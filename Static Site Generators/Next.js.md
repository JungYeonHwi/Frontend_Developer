# 2. Next.js

<목차>

## (1) [Official Docs for Getting Started](#1-official-docs-for-getting-startedhttpsnextjsorgdocsgetting-started)

---

### (1) [Official Docs for Getting Started](https://nextjs.org/docs/getting-started)

**Getting Started**

- Automatic Setup

  - 모든 것이 자동으로 설정되는 create-next-app을 사용하여 새 Next.js 생성

  ```
  npx create-next-app@latest
  # or
  yarn create next-app
  # or
  pnpm create next-app
  ```

  - TypeScript 프로젝트를 시작하려면 `--typescript` 플래그를 사용

  ```
  npx create-next-app@latest --typescript
  # or
  yarn create next-app --typescript
  # or
  pnpm create next-app -- --typescript
  ```

  - `npm run devor`나 `yarn dev` 또는 `pnpm dev`를 실행하여 http://localhost:3000에서 개발 서버를 시작
  - 응용 프로그램을 보려면 http://localhost:3000 접속
  - pages/index.js를 편집하고 브라우저에서 업데이트된 결과 확인

- Manual Setup

  - 프로젝트에 next, react, react-dom 설치

  ```
  npm install next react react-dom
  # or
  yarn add next react react-dom
  # or
  pnpm add next react react-dom
  ```

  - package.json에서 scripts 부분 확인
    - 이러한 스크립트는 응용 프로그램 개발의 여러 단계를 나타냄
      - `dev` : next dev를 실행하여 개발 모드에서 Next.js 시작
      - `build` : 프로덕션 사용을 위한 응용 프로그램을 빌드하기 위해 다음 빌드를 실행
      - `start` : next를 시작을 실행하여 Next.js 프로덕션 서버 시작
      - `lint` : 다음 lint를 실행하여 Next.js의 기본 제공 ESLint 구성을 설정
    - 두 개의 디렉토리 페이지를 만들고 응용 프로그램 루트에 공개
      - `pages` : 파일 이름을 기준으로 라우트와 연결, 예를 들어 pages/about.js는 /about에 매핑
      - `public` : 이미지, 글꼴 등의 정적 자산을 저장, 그러면 기본 URL(/)에서 시작하는 코드가 공용 디렉터리 내의 파일을 참조 가능
  - Next.js는 페이지의 개념을 중심으로 구축
  - 페이지는 페이지 디렉토리의 .js, .jsx, .ts 또는 .tsx 파일에서 내보낸 React 구성 요소
  - 파일 이름을 사용하여 동적 경로 매개 변수를 추가 가능
  - page 디렉토리 안에 index.js 파일을 추가하여 시작하기
  - 사용자가 응용프로그램의 루트를 방문할 때 렌더링되는 페이지

  ```
  function HomePage() {
  return <div>Welcome to Next.js!</div>
  }

  export default HomePage
  ```

  - 설정이 완료된 후 할 일
    - `npm run dev`, `yarn dev` 또는 `pnpm dev`를 실행하여 http://localhost:3000에서 개발 서버를 시작
    - 응용 프로그램을 보려면 http://localhost:3000을 확인
    - pages/index.js를 편집하고 브라우저에서 업데이트된 결과 확인
  - 다음과 같은 결과가 나타남
    - 자동 컴파일 및 번들링
    - 대응 빠른 새로 고침
    - 정적 생성 및 페이지 서버 측 렌더링
    - 기본 URL(/)에 매핑된 공용/을 통해 제공되는 정적 파일
  - 모든 Next.js 애플리케이션은 처음부터 제작 준비 되어 있음
