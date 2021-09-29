import React, {useEffect} from 'react'
import axios from 'axios';


function LandingPage() {

    useEffect(()=>{ // useEffect함수는 리액트가 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook이다.
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            LandingPage 랜딩 페이지
        </div>
    )
}

export default LandingPage
