# 1. CSS Architecture

<목차>

(1) [A Look at Some CSS Methodologies](#1-a-look-at-some-css-methodologieshttpswwwwebfxcomblogweb-designcss-methodologies)
(2) [HTML Full Course - Build a Website Tutorial](#2-html-full-course---build-a-website-tutorialhttpswwwyoutubecomwatchvpqn-pnxpavg)
(3) [HTML Tutorial for Beginners: HTML Crash Course](#3-html-tutorial-for-beginners-html-crash-coursehttpswwwyoutubecomwatchvqz0agyrrlhu)
(4) [How does the Internet work?](#4-build-15-javascript-projects---vanilla-javascripthttpswwwyoutubecomwatchv3phxvlpokf4)

---

### (1) [A Look at Some CSS Methodologies](https://www.webfx.com/blog/web-design/css-methodologies/)

**Managing CSS**

- CSS는 크고 복잡하고 빠르게 반복되는 시스템에서 관리하기 어려움
- 한 가지 이유는 CSS에 내장된 범위 지정 메커니즘이 없기 때문, CSS의 모든 것은 글로벌합니다.
- 즉, 사용자가 변경한 내용은 UI의 관련 없는 비트의 표시를 캐스케이드하고 변경 가능
- Sass, Less, Stylus와 같은 확장 CSS 언어들은 CSS를 더 쉽게 쓸 수 있는 기능을 제공함으로써 일을 조금 더 쉽게 만듦
- 그러나 이러한 확장 CSS 언어조차도 확장성 문제를 진정으로 해결하지는 못함
- CSS가 고유의 범위 지정 메커니즘을 얻을 때까지, 우리는 HTML 문서의 특정 섹션에 스타일을 고정하기 위한 자체 시스템을 고안해야 함
- CSS 방법론이 해결책
  - Object-Oriented CSS (OOCSS)
  - Block, Element, Modifier (BEM)
  - Scalable and Modular Architecture for CSS (SMACSS)
  - SUIT CSS
  - Systematic CSS
- CSS 방법론은 CSS를 제작하기 위한 공식 문서화된 시스템
- CSS는 작고 고립된 모듈로 프런트엔드를 개발, 유지, 확장할 수 있게 해줌
- CSS 방법론을 채택하면 규모와 복잡성에 관계없이 웹 디자인 프로젝트를 설계하고 반복하는 것이 더 쉬워짐
- 대규모 웹 사이트의 CSS 개발 각 CSS 방법론은 CSS 확장성/유지관리 문제에 대해 약간 다른 솔루션 세트를 제공
- CSS 방법론은 종종 다음을 위한 지침을 정의
  - CSS and HTML best practices
  - Class- and ID-naming conventions
  - Ordering and grouping of CSS style rules
  - Code formatting

**Object-Oriented CSS (OOCSS)**

- Nicole Sullivan이 OOCSS를 2009년에 출시
- 오늘날에도 여전히 큰 영향력
- OOCSS는 피부로부터 구조를 분리
- 이 방법론은 콘텐츠와 컨테이너를 명확하게 구분
- OOCSS에서 스타일 규칙은 CSS 클래스 셀렉터를 사용하여 독점적으로 작성
- 예를 들어, 버튼 요소의 스타일은 다음과 같은 두 가지 클래스를 통해 설정 가능
  - .button — provides the button’s basic structure
  - .grey-btn — applies colors and other visual properties

```
# CSS
.button { box-sizing: border-box; height: 50px; width: 100%; } .grey-btn { background: #EEE; border: 1px solid #DDD; box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 3px; color: #555; }
```

```
# HTML
<button class="button grey-btn">
```

- OOCSS 방법론의 한 가지 목표는 다양한 스타일 규칙에서 동일한 속성의 중복을 줄이는 것
- 즉, OOCSS는 드라이 스타일시트를 유지하는 데 도움이 될 수 있음
- 이 방법론은 많은 소규모 모듈식 전문 CSS 클래스를 사용하여 이 목표를 달성하려고 시도
- type selector를 통해 적용되는 스타일 특성은 거의 없음(예: h1, div 및 body)
- 정렬되지 않은 목록 요소의 첫 번째 목록 항목을 다른 색으로 지정하려고 함

```
# HTML
<!-- Counter-example --> <ul class="to-do"> <li>Combine my CSS files</li> <li>Run CSS Lint</li> <li>Minify my stylesheet</li> </ul>
```

```
# CSS
/* Counter-example */ .to-do { color: #FFF; background-color: #000; } .to-do li:first-child { color: #FF0000; }
```

- CSS를 더 모듈화되고 유연하게 만들기 위해, 그리고 descendant selector를 피하기 위해, 위의 반례는 다음과 같은 방식으로 다시 작성 가능

```
# HTML
<!-- OOCSS --> <ul class="to-do"> <li class="first-to-do-item">Combine my CSS files</li> <li>Run CSS Lint</li> <li>Minify my stylesheet</li> </ul>
```

```
# CSS
/* OOCSS */ .to-do { color: #FFF; background-color: #000; } .first-to-do-item { color: #FF0000; }
```

- OOCSS의 주요 단점은 수업을 엄청나게 많이 듣게 됨
- 유지 및 관리가 어려울 수 있음
- OOCSS의 원칙이 무효라는 것은 아니고, 반대로 OOCSS는 대규모 CSS 개발에 건전성을 되살리는 상식적인 CSS 방법론
