import React from 'react';
import ReactDOM  from 'react-dom';

// React는 ReactDOM.render() 메서드를 통해 컴포넌트를 실제로 사용한다. 

// 이런식으로 react 엘리먼틀르 생성하는거지, 
let linkReactElement = React.createElement('a',
    {href: 'http://webapplog.com'},
    'webapplog.com'
)

var h1 = React.createElement('h1', null, 'Hello world!') // h1 요소를 React 엘리먼트로 생성하여 변수에 담는다.
ReactDOM.render( // h1  요소가 ID content인 실제 DOM에 랜더링 된다.
    //h1, 이렇게 개발 할수도 있고,
    React.createElement('div', null, h1, h1),
    document.getElementById('content')
)



////////////////////////// React 컴포넌트 클래스 생성 /////////////////////////////////////

// 기본구조 //
// class App extends Component {
//     render() {
//         return (hi);
//     }
// }

// 리액트에서 최소한의 단위는 컴포넌트이다. 기능을 단위별로 캡슐화 하며, 이 작은 컴포넌트들이 모여서 ,
// 유기적으로 잘 연결되고 동작될때 좋은 앱이 만들어졌다고 말할 수 있다. 
//

let h2 = React.createElement('h2', null, 'Component test')
class ComponentTest extends React.Component{ // React 컴포넌트 클래스 정의(이름은 대문자로 시작한다.)
    render(){ // 엘리먼트 하나를 반환하는 함수인 render() 메서드를 생성한다. // 컴포넌트 클래스 render()메서드는 엘리먼트 하나만 반환한다!
        return React.createElement('div', null, h2, h2) // 하나만 반환,
    }
}

ReactDOM.render( // React 엘리먼트를 ID가 content인 실제 Dom에 넣어준다.
    React.createElement(ComponentTest, null), // 이때 ComponentTest는 문자열이 아니라 객체임. 
    document.getElementById('component')
)


//////////////////////// React 속성 사용하기 ///////////////////////////////////////

// Object.freeze()와 Object.isFrozen() 


// Props 리액트에서 데이터를 다룰때 쓴다. 부모 컴포넌트가 자식 컴퓨넌트한테 값을 전달할때 사용하며 '읽기 전용'이다.


class HelloWorld extends React.Component{
    render(){
        return React.createElement(
            'h1',
            null,
            'Hello ' + this.props.frameworkName + ' world!!'
        )
    }
}

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, { // Hello Word가 부모 노드인거지,
            id: 'ember',
            frameworkName: 'Ember.js',
            title: 'A framework for creating ambitious wep applications.'
        }),
        React.createElement(HelloWorld, {
            id: 'backbon',
            frameworkName: 'Backbone.js',
            title: 'Backbone.js gives structure to web applications...'
        }),
        React.createElement(HelloWorld, {
            id: 'angular',
            frameworkName: 'Angular.js',
            title: 'Superheroic JavaScript MVM Framwork'
        })
    ),
    document.getElementById('attribute')

)
