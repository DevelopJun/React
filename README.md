This React Concept & Front_end development
=============
## React 개발 참조문서
https://create-react-app.dev/

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
Axios는 npm을 이용하여 다운로드 가능한 HTTP request 모듈 혹은 라이브러리입니다.

## Cors 에러 
Cors 정책이란 Cross-Origin Resource Sharing(CORS) 보안을 위해서, 두개의 다른 포트를 가지고 있는 서버는 아무 설정없이 Request를 보낼수는 없다. 
백엔드, 프론트엔드 부분을 모두 컨트롤 할 수 있으면, Server 부분 Client 부분 모두 수정해서, 해결 방법은 많다. 
> Proxy 방법 : npm install http-proxy-middleware -- save
> Proxy Server란 무엇인가? 유저 <-> Proxy Server <-> 인터넷
1. 아이피를 Proxt Server에서 임의로 바꿔 버릴 수 있다. 그래서 인터넷에서는 접근하는 사람의 IP를 모르게 된다.
2. 보내는 데이터도 임의로 바꿀 수 있다.
3. 방화벽 기능, 웹 필터 기능, 캐쉬 데이터, 공유 데이터 제공 기능
> 사용이유
- 회사에서 직원들이나 집안에서 아이들 인터넷 사용 제어
- 캐쉬를 이용해 더 빠른 인터넷 이용 제공
- 더 나은 보안 제공
- 이용 제한된 사이트 접근 가능

## Concurrently
백엔드, 프론트엔드 서버를 모두 동시에 사용할때 사용하는 라이브러리로, 
- 명령어 npm install concurrently --save

## CSS FRAMWORK 종류 for React JS 
1. Material UI
2. React Bootstrap
3. Semantic UI
**4. Ant Design -> https://ant.design/**
5. Materialize

## Redux 기초 
> Props vs State
- Props[변하는것이 불가능하다]  부모 컴포넌트가 자식 컴포넌트한테 전달하는 데이터로, (자식 입장에서 ) 읽기 전용이다. 
- State[변하는것이 가능하다]  State는 컴포넌트의 상태를 나타내며, props와 반대로 변할 수 있다. 컴포넌트의 내부에서 선언되기 때문이다. 이러한 state는 외부에
공개되지 않고, 컴포넌트가 스스로 관리한다.
> Redux란 (strict unidirectional data flow)
> 리덕스는 가장 사용률이 높은 상태관리 라이브러리로써 위에 언급한대로 리액트의 복잡한 컴포넌트 구조속에서 보다 간편하게 모든 컴포넌트들이 state 를 쉽게 공유할 수 있게 해주는 방식이다. 우선 리덕스는 리액트 내부에 있는 기술이 아니며 순수 HTML, JAVASCRIPT 내에서도 사용이 가능하다. 컴포넌트에 집중된 리액트와 시너지가 좋으니 대체적으로 리액트에 리덕스를 사용할 뿐이다.
> ![image](https://user-images.githubusercontent.com/63999666/135220703-4328fd32-8ecf-4684-b4a0-13d78aae704d.png)
다운 받아야 할 Dependency들 
1. redux 
2. react-redux
3. redux-promis (redux를 더 잘 사용할 수 있게 만드는 middleware이다.)
4. redux-thunk (redux를 더 잘 사용할 수 있게 만드는 middleware이다.)

## Reacrt Component
- **Class Component** : Provide more features, Longer Code, More Complex Code, Slower Performance
- **Functional Component** : Provide less features, Shorter Code, Simpler Code, Faster Performance
> 요즘은 대부분 Hook을 사용한다. Functional componet를 대부분 사용하는거지, 

> Constructor -> render -> React updates DOM and refs  





 
