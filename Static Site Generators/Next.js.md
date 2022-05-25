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

**Pages**

- Next.js에서 page는 페이지 디렉토리의 .js, .jsx, .ts 또는 .tsx 파일에서 내보낸 React 구성요소
- 각 페이지는 파일 이름에 따라 경로와 연결
- 예 : 아래처럼 React 구성 요소를 내보내는 pages/about.js를 만들면 /about에서 접근 가능

```
function About() {
  return <div>About</div>;
}

export default About;
```

- Pages with Dynamic Routes
  - Next.js는 동적 경로가 있는 페이지를 지원
  - 예를 들어 pages/posts/[id.js]라는 파일을 만들면 posts/1, posts/2 등에서 접근 가능
- Pre-rendering
  - 기본적으로 Next.js는 모든 페이지를 미리 렌더링
  - Next.js가 클라이언트측 JavaScript로 모든 작업을 수행하는 대신 각 페이지에 대한 HTML을 미리 생성한다는 것을 의미
  - 사전 렌더링하면 성능과 SEO가 향상
  - 생성된 각 HTML은 해당 페이지에 필요한 최소한의 JavaScript 코드와 연결
  - 브라우저에 의해 페이지가 로드되면 자바스크립트 코드가 실행되어 페이지를 완전한 대화식으로 생성
- Two forms of Pre-rendering
  - Next.js는 두 가지 형태의 사전 렌더링인 정적 생성과 서버 측 렌더링, 차이점은 페이지에 대한 HTML을 생성하는 경우
    - 정적 생성(권장) : HTML은 빌드 시 생성되며 각 요청에 재사용
    - 서버측 렌더링 : HTML은 각 요청에 대해 생성
  - Next.js를 사용하면 각 페이지에 사용할 사전 렌더링 양식을 선택할 수 있다는 것
  - 대부분의 페이지에 대해 정적 생성을 사용하고 다른 페이지에 대해서는 서버 측 렌더링을 사용하여 "하이브리드" Next.js 앱 생성 가능
  - 성능상의 이유로 서버 측 렌더링을 통한 정적 생성을 사용하는 것이 좋음
  - 정적으로 생성된 페이지는 성능 향상을 위한 추가 구성 없이 CDN으로 캐시 가능
  - 그러나 경우에 따라 서버측 렌더링이 유일한 옵션
  - 정적 생성 또는 서버측 렌더링과 함께 클라이언트측 렌더링을 사용 가능
  - 페이지의 일부 부분이 클라이언트 측 자바스크립트에 의해 완전히 렌더링될 수 있다는 것을 의미
- Static Generation without data

  - 기본적으로 Next.js는 데이터를 가져오지 않고 정적 생성을 사용하여 페이지를 미리 렌더링

  ```
  function About() {
    return <div>About</div>
  }

  export default About
  ```

  - 이 페이지는 사전 렌더링할 외부 데이터를 가져올 필요가 없음
  - 이러한 경우 Next.js는 빌드 시간 동안 페이지당 단일 HTML 파일을 생성

- Static Generation with data

  - 일부 페이지는 사전 렌더링하기 위해 외부 데이터를 가져와야 함
  - 두 가지 방법이 있으며 둘 중 하나 또는 둘 다 해당
  - 각 경우 Next.js에서 제공하는 다음 기능을 사용 가능

    - 페이지 내용은 외부 데이터에 따라 다르며, getStaticProps를 사용

      - 예 : 블로그 페이지가 CMS(콘텐츠 관리 시스템)에서 블로그 게시물 목록을 가져와야 할 수 있음

      ```
      // TODO: Need to fetch `posts` (by calling some API endpoint)
      //       before this page can be pre-rendered.
      function Blog({ posts }) {
        return (
          <ul>
            {posts.map((post) => (
              <li>{post.title}</li>
            ))}
          </ul>
        )
      }

      export default Blog
      ```

      - 사전 렌더링 시 이 데이터를 가져오기 위해 Next.js를 사용하면 동일한 파일에서 getStaticProps라는 비동기 함수를 내보내기 가능
      - 이 함수는 빌드 시 호출되며 사전 렌더링 시 가져온 데이터를 페이지의 소품으로 전달 가능

      ```
      function Blog({ posts }) {
        // Render posts...
      }

      // This function gets called at build time
      export async function getStaticProps() {
        // Call an external API endpoint to get posts
        const res = await fetch('https://.../posts')
        const posts = await res.json()

        // By returning { props: { posts } }, the Blog component
        // will receive `posts` as a prop at build time
        return {
          props: {
            posts,
          },
        }
      }

      export default Blog
      ```

    - 페이지 경로는 외부 데이터에 따라 다르며, getStaticPaths를 사용

      - Next.js를 사용하면 동적 경로가 있는 페이지를 만들기 가능
      - 예를 들어 pages/posts/[id]라는 파일을 생성 가능해 id 기반 단일 블로그 게시물을 보여줌
      - 이렇게 하면 posts/1에 접근할 때 ID가 1인 블로그 게시물을 표시 가능
      - 그러나 빌드 시 사전 렌더링할 ID는 외부 데이터에 따라 차이
      - 예 : 데이터베이스에 블로그 게시물(ID: 1)을 하나만 추가했다고 가정, 이 경우 빌드 시 posts/1을 미리 렌더링
      - 나중에 ID가 2인 두 번째 게시물을 추가 가능, 그러면 게시물/2도 미리 렌더링
      - 따라서 미리 렌더링된 페이지 경로는 외부 데이터에 따라 달라
      - 이를 처리하기 위해 Next.js를 사용하면 동적 페이지(pages/posts/[id])에서 getStaticPaths라는 비동기 함수를 내보내기 가능
      - 함수는 빌드 시 호출되며 사전 렌더링할 경로를 지정 가능

      ```
      // This function gets called at build time
      export async function getStaticPaths() {
        // Call an external API endpoint to get posts
        const res = await fetch('https://.../posts')
        const posts = await res.json()

        // Get the paths we want to pre-render based on posts
        const paths = posts.map((post) => ({
          params: { id: post.id },
        }))

        // We'll pre-render only these paths at build time.
        // { fallback: false } means other routes should 404.
        return { paths, fallback: false }
      }
      ```

      - 또한 pages/posts/[id.js]에서 getStaticProps를 내보내야 이 ID로 게시물에 대한 데이터를 가져와 페이지를 사전 렌더링하는 데 사용 가능

      ```
      function Post({ post }) {
        // Render post...
      }

      export async function getStaticPaths() {
        // ...
      }

      // This also gets called at build time
      export async function getStaticProps({ params }) {
        // params contains the post `id`.
        // If the route is like /posts/1, then params.id is 1
        const res = await fetch(`https://.../posts/${params.id}`)
        const post = await res.json()

        // Pass post data to the page via props
        return { props: { post } }
      }

      export default Post
      ```

  - When should I use Static Generation?
    - 페이지를 한 번 작성하고 CDN에서 제공할 수 있으므로 서버가 모든 요청에 대해 페이지를 렌더링하는 것보다 훨씬 빠르기 때문에 가능한 경우 언제든지 정적 생성(데이터 포함 또는 없음)을 사용하는 것이 좋음
    - 정적 생성을 다음과 같은 다양한 유형의 페이지에 사용 가능
      - 마케팅 페이지
      - 블로그 게시물 및 포트폴리오
      - 전자상거래 제품 목록
      - 도움말 및 문서
    - 사용자의 요청보다 먼저 이 페이지를 미리 렌더링하고 싶으면 정적 생성 이용
    - 반면, 정적 생성은 사용자의 요청 앞에 페이지를 미리 렌더링할 수 없는 경우는 사용이 좋지 않음
    - 페이지에는 자주 업데이트되는 데이터가 표시되며 페이지 내용은 모든 요청에 따라 변경 가능
    - 이러한 경우 다음 중 하나를 수행
      - 클라이언트 측 렌더링과 함께 정적 생성 사용 : 페이지의 일부 사전 렌더링을 건너뛰고 클라이언트 측 JavaScript를 사용하여 해당 부분을 채우기 가능
      - Use Server-Side Rendering : Next.js는 각 요청에 대해 페이지를 미리 렌더링, 페이지를 CDN으로 캐시할 수 없기 때문에 속도가 느려지지만 미리 렌더링된 페이지는 항상 최신 상태로 유지
  - Server-side Rendering

    - 페이지가 서버측 렌더링을 사용하는 경우, 페이지 HTML은 각 요청에 대해 생성
    - 페이지에 서버측 렌더링을 사용하려면 getServerSideProps라는 비동기 함수를 내보내기
    - 이 함수는 모든 요청 시 서버에서 호출
    - 예를 들어, 페이지가 외부 API에서 가져온 자주 업데이트되는 데이터를 미리 렌더링해야 한다고 가정
    - 다음과 같이 이 데이터를 가져와서 페이지로 전달하는 getServerSideProps를 작성 가능

    ```
    function Page({ data }) {
      // Render data...
    }

    // This gets called on every request
    export async function getServerSideProps() {
      // Fetch data from external API
      const res = await fetch(`https://.../data`)
      const data = await res.json()

      // Pass data to the page via props
      return { props: { data } }
    }

    export default Page
    ```

    - 보시다시피 getServerSideProps는 getStaticProps와 유사하지만 차이점은 getServerSideProps가 빌드 시간이 아닌 모든 요청에 대해 실행된다는 것
