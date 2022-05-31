# 2. Writing Semantic HTML

<목차>

(1) [W3Schools: Semantic HTML](#1-w3schools-semantic-htmlhttpswwww3schoolscomhtmlhtml5semanticelementsasp)

(2) [How To Write Semantic HTML](#2-how-to-write-semantic-htmlhttpshackernooncomhow-to-write-semantic-html-dkq3ulo)

---

### (1) [W3Schools: Semantic HTML](https://www.w3schools.com/html/html5_semantic_elements.asp)

**What are Semantic Elements?**

- semantic element는 의미를 명확하게 설명 가능
- 의미 없는 element 예: `<div>`, `<span>`
- 의미 있는 element 예: `<form>`, `<table>`, `<article>`

**Semantic Elements in HTML**

- 많은 웹 사이트에는 다음과 같은 HTML 코드가 포함 : `<div id="nav"> <div class="header"> <div id="footer">`
- HTML에는 웹 페이지의 다른 부분을 정의하는 데 사용할 수 있는 몇 가지 의미 요소 존재
  - `<article>`
  - `<aside>`
  - `<details>`
  - `<figcaption>`
  - `<figure>`
  - `<footer>`
  - `<header>`
  - `<main>`
  - `<mark>`
  - `<nav>`
  - `<section>`
  - `<summary>`
  - `<time>`
- HTML `<section>` Element
- `<section>` element 문서에서 섹션 정의
- HTML 문서에 따르면, "섹션은 일반적으로 제목이 있는 콘텐츠의 주제 그룹"
- `<section>` element를 사용할 수 있는 예:
  - 챕터
  - 서론
  - 뉴스 항목
  - 연락처 정보
- 웹 페이지는 일반적으로 소개, 내용 및 연락처 정보를 위한 섹션으로 분할 가능

```
<section>
  <h1>WWF</h1>
  <p>
    The World Wide Fund for Nature (WWF) is an international organization
    working on issues regarding the conservation, research and restoration of
    the environment, formerly named the World Wildlife Fund. WWF was founded in
    1961.
  </p>
</section>

<section>
  <h1>WWF's Panda symbol</h1>
  <p>
    The Panda has become the symbol of WWF. The well-known panda logo of WWF
    originated from a panda named Chi Chi that was transferred from the Beijing
    Zoo to the London Zoo in the same year of the establishment of WWF.
  </p>
</section>
```

**HTML `<article>` Element**

- `<article>` element는 독립적이고 자체적인 콘텐츠를 지정
- `<article>`는 그 자체로 의미가 있어야 하며, 웹 사이트의 나머지 부분과 독립적으로 배포할 수 있어야 함
- `<article>` element를 사용할 수 있는 예:
  - 포럼 게시물
  - 블로그 게시물
  - 사용자 설명
  - 제품 카드
  - 신문기사

```
<article>
  <h2>Google Chrome</h2>
  <p>
    Google Chrome is a web browser developed by Google, released in 2008. Chrome
    is the world's most popular web browser today!
  </p>
</article>

<article>
  <h2>Mozilla Firefox</h2>
  <p>
    Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox
    has been the second most popular web browser since January, 2018.
  </p>
</article>

<article>
  <h2>Microsoft Edge</h2>
  <p>
    Microsoft Edge is a web browser developed by Microsoft, released in 2015.
    Microsoft Edge replaced Internet Explorer.
  </p>
</article>
```

**Nesting `<article>` in `<section>` or Vice Versa?**

- `<article>` element는 독립적이고 자체적인 콘텐츠를 지정
- `<section>` element는 문서의 섹션을 정의
- 정의를 사용하여 이러한 요소를 내포하는 방법을 결정 불가능
- `<section>` element를 포함하는 `<article>` element와 `<article>` element를 HTML 페이지를 찾기 가능
- HTML `<header>` Element
- `<header>` element는 소개 콘텐츠 또는 탐색 링크 집합을 위한 컨테이너
- `<header>` element에는 일반적으로 다음 포함
  - 하나 이상의 제목 요소(`<h1>` - `<h6>`)
  - 로고 또는 아이콘
  - 저자 정보
- 하나의 HTML 문서에 여러 개의 `<header>` element가 존재 가능 그러나 `<header>`는 `<footer>`, `<address>` 또는 다른 `<header>` element 내에 배치 불가능

```
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>
    WWF's mission is to stop the degradation of our planet's natural
    environment, and build a future in which humans live in harmony with nature.
  </p>
</article>
```

**HTML `<footer>` Element**

- `<footer>` element는 문서 또는 섹션에 대한 바닥글을 정의
- `<footer>` element에는 일반적으로 다음이 포함
  - 저자 정보
  - 저작권 정보
  - 연락처 정보
  - 현장 지도
  - 톱 링크
  - 관련 document
- 하나의 문서에 여러 개의 `<footer>` element 존재 가능

```
<footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
```

**HTML `<nav>` Element**

- `<nav>` element는 일련의 탐색 링크를 정의

```
<nav>
  <a href="/html/">HTML</a> | <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```

**HTML `<aside>` Element**

- `<aside>` element는 사이드바와 같이 배치되는 내용 외에 일부 내용을 정의
- `<aside>` 내용은 주변 콘텐츠와 간접적으로 관련되어야 함

```
<p>
  My family and I visited The Epcot center this summer. The weather was nice,
  and Epcot was amazing! I had a great summer together with my family!
</p>

<aside>
  <h4>Epcot Center</h4>
  <p>
    Epcot is a theme park at Walt Disney World Resort featuring exciting
    attractions, international pavilions, award-winning fireworks and seasonal
    special events.
  </p>
</aside>
```

```
<html>
  <head>
    <style>
      aside {
        width: 30%;
        padding-left: 15px;
        margin-left: 15px;
        float: right;
        font-style: italic;
        background-color: lightgray;
      }
    </style>
  </head>
  <body>
    <p>
      My family and I visited The Epcot center this summer. The weather was
      nice, and Epcot was amazing! I had a great summer together with my family!
    </p>

    <aside>
      <p>
        The Epcot center is a theme park at Walt Disney World Resort featuring
        exciting attractions, international pavilions, award-winning fireworks
        and seasonal special events.
      </p>
    </aside>

    <p>
      My family and I visited The Epcot center this summer. The weather was
      nice, and Epcot was amazing! I had a great summer together with my family!
    </p>
    <p>
      My family and I visited The Epcot center this summer. The weather was
      nice, and Epcot was amazing! I had a great summer together with my family!
    </p>
  </body>
</html>
```

**HTML `<figure>` and `<figcaption>` Elements**

- `<figure>`는 그림, 다이어그램, 사진, 코드 목록 등과 같은 자체 포함 콘텐츠를 지정
- `<figcaption>` 태그는 `<figure>` element에 대한 캡션을 정의, `<figcaption>` element는 `<figure>` element의 첫 번째 자식 또는 마지막 자식 요소로 배치 가능
- `<img>`는 실제 이미지/일러스트레이션을 정의

```
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" />
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
```

**Why Semantic Elements?**

- A semantic Web은 애플리케이션, 기업 및 커뮤니티에서 데이터를 공유하고 재사용을 가능하게 함

**Semantic Elements in HTML**

| Tag            | 설명                                                                |
| -------------- | ------------------------------------------------------------------- |
| `<article>`    | 독립적이고 자체적인 내용 정의                                       |
| `<aside>`      | 페이지 내용 외에 내용 정의                                          |
| `<details>`    | 사용자가 보거나 숨길 수 있는 추가 세부 정보 정의                    |
| `<figcaption>` | `<figure>` element의 캡션 정의                                      |
| `<figure>`     | 그림, 다이어그램, 사진, 코드 목록 등과 같은 자체 포함 콘텐츠를 지정 |
| `<footer>`     | 문서 또는 섹션에 대한 바닥글 정의                                   |
| `<header>`     | 문서 또는 섹션의 머리글을 지정                                      |
| `<main>`       | 문서의 기본 내용을 지정                                             |
| `<mark>`       | 표시/강조된 텍스트를 정의                                           |
| `<nav>`        | navigation 링크 정의                                                |
| `<section>`    | 문서에서 섹션을 정의                                                |
| `<summary>`    | `<details>` element에 대해 표시되는 제목을 정의                     |
| `<time>`       | 날짜/시간을 정의                                                    |

---

### (2) [How To Write Semantic HTML](https://hackernoon.com/how-to-write-semantic-html-dkq3ulo)

**how to write semantic HTML?**

- HTML5에서는 <div>`및`<span>` 의 불필요한 사용을 피하는 것
- World Wide Web Consortium은 콘텐츠에 따라 모든 요소에 레이블을 지정할 것을 권장
- 예를 들어, 문서의 상단 섹션을 그룹화하기 위해 `<header>` 대신해서 `<div class=header>` 사용
- 훨씬 더 읽기 쉽고 접근 가능하며 이해하기 쉬움

**Don't divide, better create sections.**

- HTML5 이후로 `<section>` 태그가 있는데, 이는 주요 콘텐츠를 더 작은 콘텐츠 그룹으로 나누는 데 매우 유용
- `<section>` 요소는 중첩될 수 있으며 올바른 형식의 제목 요소가 항상 존재해야만 함

```
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <section id="container">
      <section id="header">
        <section id="header-content"></section>
      </section>
      <section id="section">Section content</section>
      <section id="footer"></section>
    </section>
  </body>
</html>
```

**Main content?**

- 우리가 "주요 콘텐츠"를 언급할 때 정보에 대해 이야기할 때 다른 모든 것은 완전히 불필요
- 정보의 무결성에 영향을 미치지 않고 마음대로 제거하거나 편집 가능

**Self-contained**

- 문서에서 완전한 정보로 완벽하게 작동하고 문서의 무결성에 영향을 미치지 않고 대체될 수 있는 섹션을 찾으면 `<article>` 요소 존재
- 게시물과 뉴스는 `<article>` 예시
- 마음대로 생성하고 교환할 수 있지만 문서 구조에는 영향을 미치지 않음

```
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <section>
      <section id="header">
        <section id="header-content"></section>
      </section>
      <article>
        <h1>Article heading</h1>
        <p>article content</p>
      </article>
      <section id="footer"></section>
    </section>
  </body>
</html>
```

**`<section>` and `<article>` are workmates, not relatives.**

- `<section>` 및 `<article>` 요소는 계층 구조의 일부로 생각되지 않고 실제로 함께 작동하도록 만들어짐
- 의미 구조를 생성하는 경우 문제 없이 서로 내부에서 사용 가능

```
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <section>
      <section id="header">
        <section id="header-content"></section>
      </section>
      <article>
        <h1>Article heading</h1>
        <section>
          <h2>Content heading</h2>
          <p>article content</p>
        </section>
      </article>
      <section id="footer"></section>
    </section>
  </body>
</html>
```

**Formally introducing content**

- 제목이나 이미지를 통해 다음 콘텐츠를 소개하는 섹션이 있는 것이 일반적
- 이러한 경우 `<header>` 를 사용 하여 해당 목적을 추구하는 모든 요소를 ​​그룹화 가능
- 문서에 여러 헤더가 있을 수 있지만 조건은 하나뿐이므로 다른 `<header>` , `<footer>` 또는 `<address>` 요소 내에서 사용하지 않기

```
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <header>
      <section id="header-content"></section>
    </header>
    <section>
      <article>
        <h1>Article heading</h1>
        <section>
          <h2>Content heading</h2>
          <p>article content</p>
        </section>
      </article>
      <section id="footer"></section>
    </section>
  </body>
</html>
```

**Formally closing content**

- 섹션 끝에 관련 요소에 태그를 지정하려면 `<footer>` 사용 가능
- 크레딧, 저작권, 사이트맵, 보조 탐색 모음 등 이러한 모든 유형의 요소는 `<footer>` 태그 내에서 그룹화 가능

```
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <header>
      <section id="header-content"></section>
    </header>
    <section>
      <article>
        <h1>Article heading</h1>
        <section>
          <h2>Content heading</h2>
          <p>article content</p>
        </section>
      </article>
    </section>
    <footer></footer>
  </body>
</html>
```

**What about the controls?**

- 아이콘 및 이미지와 같은 다른 요소와 함께 링크를 항상 탐색 모음으로 그룹화 가능
- 이 목적을 위한 시맨틱 태그인 `<nav>` 요소도 존재
- navbars에 어떤 기술을 사용하든 상관없이 모두 `<nav>` 요소에서 사용

```
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <article>
        <h1>Article heading</h1>
        <section>
          <h2>Content heading</h2>
          <p>article content</p>
        </section>
      </article>
    </section>
    <footer></footer>
  </body>
</html>
```

**There can be only one.**

- 주요 내용을 식별했음에도 불구하고 문서의 섹션에 기본 섹션으로 레이블을 지정해야 할 수도 있음
- 이것은 `<main>` 요소를 사용하여 쉽게 해결 가능
- `<main>` 요소는 문서에 고유한 콘텐츠 레이블을 지정하는 데 유용
- 하나의 문서, 하나의 `<main>` 요소만 있을 수 있음
- 이 의미 요소는 검색 엔진 최적화에 유용

```
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <h1>Article heading</h1>
        <section>
          <h2>Content heading</h2>
          <p>article content</p>
        </section>
      </article>
    </main>
    <section>
      <h1>Section heading</h1>
      <p>Section content</p>
    </section>
    <footer></footer>
  </body>
</html>
```

**If it is not main, put it aside!**

- `<section>`, `<article>`, `<main>`, `<header>`, `<footer>` 및 `<nav>` 와 같은 요소 는 시맨틱 HTML 코드를 작성하는 훌륭한 도구
- 내용 자체는 관련이 있으나 주요 내용의 일부가 아닌 경우에는 `<aside>` 요소 이용
- 뉴스 피드, 광고 제안, 뉴스레터 양식 등과 같은 추가 콘텐츠에 레이블을 지정해야 할 때 사용

```
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <h1>Article heading</h1>
        <section>
          <h2>Content heading</h2>
          <p>article content</p>
        </section>
      </article>
    </main>
    <section>
      <h1>Section heading</h1>
      <p>Section content</p>
    </section>
    <aside>Auxiliary content</aside>
    <footer></footer>
  </body>
</html>
```

**Just figure it!**

- 기본 흐름에 있지만 필요할 때 해제할 수 있는 모든 콘텐츠에 레이블을 지정하는 데 유용한 요소가 있음
- 마음대로 배치하거나 제거할 수 있는 자체 포함된 요소이기 때문에 `<article>`과 유사하지만 `<Figure>` 요소 존재
- 보조 콘텐츠를 그룹화할 때 특히 유용
- `<figcaption>` 과 함께 `<Figure>` 는 일러스트레이션, 차트, 다이어그램, 사진 등과 같은 콘텐츠를 표시하는 데 좋음

```
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <h1>Article heading</h1>
        <section>
          <h2>Content heading</h2>
          <p>article content</p>
        </section>
      </article>
    </main>
    <section>
      <h1>Section heading</h1>
      <p>Section content</p>
    </section>
    <aside>Auxiliary content</aside>
    <footer>
      <figure>
        <img src="logo.png" alt="" />
        <figcaption>Slogan</figcaption>
      </figure>
    </footer>
  </body>
</html>
```
