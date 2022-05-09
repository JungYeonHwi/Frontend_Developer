# 1. Learn the basics

<목차>

(1) [W3Schools: Learn HTML](#1-w3schools-learn-htmlhttpswwww3schoolscomhtmlhtmlintroasp)
(2) [HTML Full Course - Build a Website Tutorial](#2-html-full-course---build-a-website-tutorialhttpswwwyoutubecomwatchvpqn-pnxpavg)
(3) [HTML Tutorial for Beginners: HTML Crash Course](#3-html-tutorial-for-beginners-html-crash-coursehttpswwwyoutubecomwatchvqz0agyrrlhu)
(4) [How does the Internet work?](#4-build-15-javascript-projects---vanilla-javascripthttpswwwyoutubecomwatchv3phxvlpokf4)

---

### (1) [W3Schools: Learn HTML](https://www.w3schools.com/html/html_intro.asp)

**HTML Introduction**

- HTML은 웹 페이지를 만들기 위한 표준 마크업 언어
- HTML이란?
  - HTML은 하이퍼 텍스트 마크업 언어를 나타냄
  - HTML은 웹 페이지를 만들기 위한 표준 마크업 언어
  - HTML은 웹 페이지의 구조를 설명
  - HTML은 일련의 요소로 구성
  - HTML 요소는 브라우저에 콘텐츠를 표시하는 방법을 알려줌
  - HTML 요소는 "이것은 제목", "이것은 문단", "이것은 링크" 등과 같은 내용의 조각에 레이블을 붙임
- 간단한 HTML 문서
  - `<!DOCTYPE html> `선언 : HTML5 문서라고 정의
  - `<html>` 요소 : HTML 페이지의 루트 요소
  - `<head>` 요소 : HTML 페이지에 대한 메타 정보가 포함
  - `<title>` 요소 : HTML 페이지의 제목을 지정 (브라우저의 제목 표시줄 또는 페이지 탭에 표시)
  - `<body>` 요소는 문서의 본문을 정의, 제목, 문단, 이미지, 하이퍼링크, 테이블, 목록 등과 같이 보이는 모든 내용을 담는 컨테이너
  - `<h1>` 요소 : 큰 제목을 정의
  - `<p>` 요소 : 단락 정의

```
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

- HTML 요소란?
  - HTML 요소는 시작 태그, 일부 내용 및 끝 태그로 정의
  - `<tagname> 콘텐츠는 여기에... </tagname>` : HTML 요소는 시작 태그부터 끝 태그까지 모두
  - `<h1>My First Heading</h1>`
  - `<p>My first paragraph.</p>`
- 웹 브라우저
  - 웹 브라우저(Chrome, Edge, Firefox, Safari)의 목적은 HTML 문서를 읽고 올바르게 표시하는 것
  - 브라우저는 HTML 태그를 표시하지 않지만, 이러한 태그를 사용하여 문서를 표시하는 방법 결정
    [!A Simple HTML Document](./img/A%20Simple%20HTML%20Document.png)
- HTML page 구조
  [!HTML Page Structure](./img/HTML%20Page%20Structure.png)
- HTML 역사
  [!HTML History](./img/HTML%20History.png)

**HTML Editors**

- 메모장 또는 텍스트 편집을 사용하여 HTML 배우기
  - 웹 페이지는 전문적인 HTML 편집기를 사용하여 만들고 수정 가능
  - HTML을 학습하려면 메모장(PC)이나 텍스트 편집(Mac)과 같은 간단한 텍스트 편집기를 사용하는 것이 좋음
  - 우리는 간단한 텍스트 편집기를 사용하는 것이 HTML을 배우는 좋은 방법이라고 믿음
  - 다음 단계에 따라 메모장 또는 텍스트 편집을 사용하여 첫 번째 웹 페이지 만들기
    [!Notepad](./img/Notepad.png)
- W3Schools Online Editor의 "Try it Yourself" 이용
  - 무료 온라인 편집기로 HTML 코드를 편집하고 브라우저에서 결과를 보기 가능
  - 이것은 코드를 빠르게 테스트하고 싶을 때 완벽한 도구, 또한 컬러 코딩과 코드를 저장하고 다른 사용자와 공유할 수 있는 기능도 있음
    [!Editor](./img/Editor.png)

**HTML Basic Examples**

- HTML 문서
  - `<!DOCTYPE html>` : 모든 HTML 문서는 문서 유형 선언으로 시작해야 함
  - 문서 자체는 `<html>`로 시작하여 `</html>`로 끝남
  - HTML 문서의 보이는 부분은 `<body>`와 `</body>` 사이
- `<!DOCTYPE>` 선언
  - `<!DOCTYPE>` 선언은 문서 유형을 나타내며, 브라우저가 웹 페이지를 올바르게 표시할 수 있도록 도와줌
  - 페이지 맨 위에 HTML 태그 앞에 한 번만 나타나야 함
  - `<!DOCTYPE>` 선언은 대소문자를 구분 안함
  - HTML5에 대한 `<!DOCTYPE>` 선언 : `<!DOCTYPE html>`
- HTML Heading
  - HTML 헤더는 `<h1>`에서 `<h6>`태그로 정의
  - 가장 중요한 제목을 정의, 가장 덜 중요한 제목을 정의
  ```
  <h1>This is heading 1</h1>
  <h2>This is heading 2</h2>
  <h3>This is heading 3</h3>
  ```
- HTML Paragraph : 단락은 `<p>` 태그로 정의
  ```
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
  ```
- HTML Link
  - 링크는 `<a>` 태그로 정의
  - 링크의 대상이 href 속성에 지정
  - 속성은 HTML 요소에 대한 추가 정보 제공하는 데 사용
  ```
  <a href="https://www.w3schools.com">This is a link</a>
  ```
- HTML Image
  - 이미지는 `<img>` 태그로 정의
  - 원본 파일(src), 대체 텍스트(alt), 너비 및 높이는 다음과 같은 속성으로 제공
  ```
  <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
  ```
- HTML 소스를 보는 방법
  - HTML 소스 코드 보기 : HTML 페이지를 마우스 오른쪽 단추로 클릭하고 다른 브라우저에서 "페이지 소스 보기"(Chrome에서) 또는 "소스 보기"(Edge에서)를 선택, HTML 소스 코드가 포함된 창이 열림
  - HTML 요소 검사 : 요소(또는 빈 영역)를 마우스 오른쪽 단추로 클릭하고 "Inspect" 또는 "Inspect Element"를 선택하여 구성 요소를 확인 (HTML과 CSS가 모두 표시), 열리는 요소 또는 스타일 패널에서 HTML 또는 CSS를 즉시 편집 가능

**HTML Elements**

- HTML 요소는 시작 태그, 일부 내용 및 끝 태그로 정의
  - `<tagname> 콘텐츠는 여기에... </tagname>` : HTML 요소는 시작 태그부터 끝 태그까지 모두
  - `<h1>My First Heading</h1>`
  - `<p>My first paragraph.</p>`
- 중첩된 HTML 요소

  - HTML 요소는 중첩 가능 (즉, 요소가 다른 요소를 포함할 수 있음)
  - 모든 HTML 문서는 중첩된 HTML 요소로 구성
  - 다음 예제에는 4개의 HTML 요소(`<html>, <body>, <h1>, <p>`)가 포함

  ```
  <!DOCTYPE html>
  <html>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
  </html>
  ```

- 끝 Tag가 없으면 안됨 : 끝 태그를 없애도 HTML 요소가 올바르게 표시는 되지만 없으면 안됨

  ```
  <html>
  <body>

  <p>This is a paragraph
  <p>This is a paragraph

  </body>
  </html>
  ```

- 빈 HTML 요소
  - 내용이 없는 HTML 요소를 빈 요소
  - <br> 태그는 줄 바꿈을 정의하며, 닫힘 태그가 없는 빈 요소
    `<p>This is a <br> paragraph with a line break.</p>`
- HTML은 대소문자를 구분하지 않음
  - HTML 태그는 대소문자를 구분하지 않습니다. `<P>`는 `<p>`와 같은 의미
  - HTML 표준은 소문자 태그를 요구하지 않지만 W3C는 HTML의 소문자를 권장하고 XHTML과 같은 더 엄격한 문서 유형을 위해 소문자를 요구

**HTML Attributes**

### (2) [HTML Full Course - Build a Website Tutorial](https://www.youtube.com/watch?v=pQN-pnXPaVg)

### (3) [HTML Tutorial for Beginners: HTML Crash Course](https://www.youtube.com/watch?v=qz0aGYrrlhU)

### (4) [Build 15 JavaScript Projects - Vanilla JavaScript](https://www.youtube.com/watch?v=3PHXvlpOkf4)

```

```
