This React Concept & Front_end development
=============

## React 개발 관련 문서

> React는 UI 컴포넌트 라이브러리이다.(Framework가 아니다.) React UI 컴포넌트는 다른 특별한 템플릿 언어가 아닌 자바스크립트를 이용해서 만든다. 여러 컴포넌트로 UI 를 구성하는 이런 방식은 React의 핵심 철학이다. 

> 단순한 앱 개발: React는 순수 자바스크립트로 만든 컴포넌트로 만든 컴포넌트 기반 아키텍쳐이다. 선언형 스타일이며, 강력하고 개발자 친화적인 DOM 추상화를 제공한다. React Native를 사용하면 DOM 뿐만 아니라 Android나 IOS에서도 이런 이점을 얻을 수 있다. 

> 빠른 UI: React는 뛰어난 성능을 제공한다. 이는 가상 DOM 채택과 DOM의 변경사항을 비교할 때 사용하는 알고리즘 덕분이다. 
> 코드량 감소

>React는 내부적으로 가상 DOM을 사용하여 브라우저에 이미 반영된 뷰와 새로운 뷰의 차이점을 찾아낸다. 이 과정을 DOM 비교(diffing)또는 상태와 뷰의 보정(reconciliation)이라고 부른다.

## React 실행 및 개발 환경 세팅 

- npm install -g create-react-app (이렇게 할 경우 gloabal 디렉토리에 다운을 받게 되는 것이다.)
- npx create-react-app 으로도 가능하다.
-   > npx vs npm
-   > npm은 저장소 역할을 한다. ex) npm install registry npm에 관한 내용은 package.json에 다 나와있다. 
-   > npm 은 loacl과 global 다운 받을 수 있는데, npx이 npm registry에서 create-react-app을 찾아서 다운로드 없이 실행 시켜준다. 이렇게 되면 Disk Space를 낭비하지 않을 수 있고, 항상 최신 버전을 사용할 수 있다. 
- create-react-app my-app (앱 만들 때 대문자 안된다. No longer Captial letters)
- npm start run , npm start build, npx serve - build
- src 폴더에 우리가 직접 작성할 소스코드 파일이 들어가고, public 폴더에 static 자원이 위치한다. public/index.html과 src/index.js는 엔트리 포인트가 되는 소스로, 파일이름이 변경되면 create-react-app은 작동하지 않으므로 주의한다.

### 컴포넌트(Component)란?
> 컴포넌트란 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈을 뜻한다. Module과 비슷하게 컴포넌트로 이뤄져 있어서 resuable이 뛰어나다. 

### DOM이란?
> Javascript는 브라우저가 읽고 어떤 작업을 할 수 있는 언어, DOM은 바로 이 작업이 이루어지는 장소이다. 사실 우리가 ‘JavaScript로 하는 것’ 이라고 생각하는 것은 정확히는 “DOM API”이다. 
React는 꼭 필요한 부분만 갱신하여 내부상태(가상 DOM)와 뷰(실제 DOM)를 같게 만든다.  

> Virtual DOM은 Real DOM 과 같은 porperties들을 갖고 있으면 그냥 가볍게 Real DOM을 Copy한거라고 보면된다. 
1. JSX(우선 HTML 으로 알아두자) 을 렌더링 한다. 그러면 Virtual DOM이 Update가 된다.
2. virtual DOM이 이전 Virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다.
3. 위 과정을 diffing 이라고 부른다. 
4. 그 바뀐 부분만 Real DOM에서 바꿔준다. 

## Babel이란 
> 최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을 구형 브라우저에서도 돌 수 있게 변환 시켜주는 것.

## Webpack 
> 모듈합해서 bundle 하는 기술, 
> webpack은 src 부분만 bundle 하기 때문에, 이미지, 로고 등 다른 파일들 넣을때 웬만하면 src 밑에 넣어야 한다.

## React-Router Dom
React-Router Dom 을 통해서 url path 설정 

## Axios

## Bcrypt로 비밀번호 암호화 하는법 
> 현재 데이터 베이스에 저장된 비밀 번호를 보면 너무 안전하지가 않다. 
> 따라서 Bcrty를 이용하여 비밀 번호를 암호화 해줘서 데이터 베이스에 저장해줘야 한다. 
> - npm install bcrpt --save
> 1. 경로 router 접속

