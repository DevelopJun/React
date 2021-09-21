This React Concept & Front_end development
=============

## React 개발 관련 문서

> React는 UI 컴포넌트 라이브러리이다. React UI 컴포넌트는 다른 특별한 템플릿 언어가 아닌 자바스크립트를 이용해서 만든다. 여러 컴포넌트로 UI 를 구성하는 이런 방식은 React의 핵심 철학이다. 

> 단순한 앱 개발: React는 순수 자바스크립트로 만든 컴포넌트로 만든 컴포넌트 기반 아키텍쳐이다. 선언형 스타일이며, 강력하고 개발자 친화적인 DOM 추상화를 제공한다. React Native를 사용하면 DOM 뿐만 아니라 Android나 IOS에서도 이런 이점을 얻을 수 있다. 

> 빠른 UI: React는 뛰어난 성능을 제공한다. 이는 가상 DOM 채택과 DOM의 변경사항을 비교할 때 사용하는 알고리즘 덕분이다. 
> 코드량 감소

>React는 내부적으로 가상 DOM을 사용하여 브라우저에 이미 반영된 뷰와 새로운 뷰의 차이점을 찾아낸다. 이 과정을 DOM 비교(diffing)또는 상태와 뷰의 보정(reconciliation)이라고 부른다.

## React 실행 및 개발 환경 세팅 

- npm install -g create-react-app
- create-react-app my-app (앱 만들 때 대문자 안된다. No longer Captial letters)
- npm start run , npm start build, npx serve - build
- src 폴더에 우리가 직접 작성할 소스코드 파일이 들어가고, public 폴더에 static 자원이 위치한다. public/index.html과 src/index.js는 엔트리 포인트가 되는 소스로, 파일이름이 변경되면 create-react-app은 작동하지 않으므로 주의한다.

### 컴포넌트(Component)란?
> 컴포넌트란 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈을 뜻한다.

### DOM이란?
> Javascript는 브라우저가 읽고 어떤 작업을 할 수 있는 언어, DOM은 바로 이 작업이 이루어지는 장소이다. 사실 우리가 ‘JavaScript로 하는 것’ 이라고 생각하는 것은 정확히는 “DOM API”이다. 
React는 꼭 필요한 부분만 갱신하여 내부상태(가상 DOM)와 뷰(실제 DOM)를 같게 만든다.  
