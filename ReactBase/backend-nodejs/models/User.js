const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function(next){
    var user = this; // 지금 user가 위에 

    if(user.isModified('password')){
    // 비밀번호 암호화 시킨다. 

    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return next(err)

        bcrypt.hash(user.password , salt, function(err, hash){
            if(err) return next(err)
            user.password = hash
            next()
            })
        })
    }else{
        next()
    }
})

// 비밀번호 비교 메서드 
userSchema.methods.comparePassword = function(plainPassword, cb){
    // plainPassword가 1234567 이고, 암호화된 비밀번호가 $2b$10$zESIyyVLUH6nYryyT6jrGOdNrI4Ybi5nP3W4K0dkBSEm0drSi4SyS" 이거라서 비교를 해야함.
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err),
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb){
    var user = this;
    // jsonwebtoken을 이용해서 token을 생성하기 
    var token = jwt.sign(user._id.toHexString(), 'secretToken') // 이게 합쳐져서 난중에 'secretToken'만 가지고 user._id를 알 수 있게 되는거지.
    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb){
    var user = this;

    // 토큰 decode 실행
    jwt.verify(token, 'secretToken', function(err, decoded){
        // 유저 아이디를 이용해서 유저를 찾은 당므에, 
        // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인 

        user.findOne({"_id": decoded, "token": token}, function(err, user){
          if(err) return cb(err);
          cb(null, user)  
        })
    })
}

const User = mongoose.model('User', userSchema)
module.exports ={User} // 위의 User은 export로 다른 파일에서 사용할 수 있도록 만든 것이다. 


