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