# NextJS Introduction

### 1. Library vs Framework
- 1.1. library
프로젝트를 원하는대로 커스텀 할 수 있음.

- 1.2. Next.js는 Framework
알맞는 곳에 알맞는 파일을 넣는다면, Next.js 내부에서 처리.
ex) pages에 about.js를 만든다면 별도의 router 처리 없이 localhost:3000/about로 접근 가능. (함수 명은 상관없음.)

### 2. Pages
- export default로 작성된 함수가 있어야 페이지 랜더링 가능.
- index.js는 메인으로 연결. ('/' 처리.)
        - ex) pages에 index.js는 localhost:3000/으로 접근.

### 3. Static Pre Rendering
- 기존 (client side rendering)
    browser가 javascript와 react.js를 실행시킨 후에 사용자가 UI를 볼 수 있음.
    (느린 네트워크 환경에선 white page가 보임.)
    페이지에 html코드를 가지고 있지 않음.
    브라우저가 모든 것을 랜더링 함.

- Next.js (server side rendering)
    페이지에 html 코드를 가지고 있음
    데이터가 느리거나 웹 사이트에 javascript가 꺼져있어도 초기 상태로 랜더링 됨. (ex) counter)
    hydration: 최초 랜더링 시에 초기 html을 띄우고, react.js가 client로 전송되면 react.js 앱을 실행.
               react.js를 백엔드에서 동작(페이지를 미리 만들어둠.)
               -> component를 랜더링 한 후 만들어진 html이 유저에게  미리 보여짐.
    SEO, 검색 엔진, 유저에게 매우 좋음.