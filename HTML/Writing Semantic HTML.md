# 2. Writing Semantic HTML

<목차>

(1) [W3Schools: Semantic HTML](#1-typescript)

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
