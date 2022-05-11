# 1. CSS Preprocessors

<목차>

(1) [CSS Preprocessors Explained](#1-a-look-at-some-css-methodologieshttpswwwwebfxcomblogweb-designcss-methodologies)

(2) [Why Use Preprocessors?](#2-html-full-course---build-a-website-tutorialhttpswwwyoutubecomwatchvpqn-pnxpavg)

---

### (1) [CSS Preprocessors Explained](https://www.freecodecamp.org/news/css-preprocessors/#:~:text=CSS%20Preprocessors%20compile%20the%20code,preprocessor%20were%20not%20in%20place.)

- CSS Preprocessors는 FrontEnd 웹 개발자들의 워크플로우에서 점점 더 주류
- CSS는 믿을 수 없을 정도로 복잡하고 미묘한 언어이며, 이를 더 쉽게 사용하기 위해 개발자들은 종종 SASS나 LESS와 같은 Preprocessors를 사용
- CSS Preprocessors는 특별한 컴파일러를 사용하여 작성된 코드를 컴파일
- 그런 다음 이를 사용하여 기본 HTML 문서에 의해 참조될 수 있는 CSS 파일 생성
- CSS Preprocessors를 사용할 때, 당신은 Preprocessors가 제자리에 있지 않을 때처럼 일반적인 CSS에서 프로그래밍할 수 있을 것
- 좋은 점은 사용할 수 있는 옵션이 더 많음
- SASS와 같은 일부에는 문서 작성을 더 쉽게 하기 위한 특정 스타일 표준 존재
- 예를 들어, 원한다면 괄호를 생략 가능
- 물론 CSS Preprocessors는 다른 기능도 제공
- 제공되는 많은 기능들은 구문이 약간만 다를 뿐 사전 processor 간에 믿을 수 없을 정도로 유사
- 원하는 거의 모든 것을 선택할 수 있고, 같은 것들을 성취 가능

**Variables**

- 모든 프로그래밍 언어에서 가장 일반적으로 사용되는 항목 중 하나는 변수인데, CSS에는 특별히 부족한 점 존재
- 변수를 마음대로 사용할 수 있으므로 값을 한 번 정의하고 전체 프로그램에서 재사용 가능
- SASS의 예시

```
$yourcolor: #000056
.yourDiv {
  color: $yourcolor;
 }
```

- `SASS yourcolor` 변수로 선언하면 정의를 다시 입력하지 않고도 전체 문서에서 동일한 색상을 재사용 가능

**Loops**

- 언어에서 또 다른 공통 항목은 Loops이며, CSS에는 없는 것이 존재
- Loops는 여러 번 다시 입력할 필요 없이 동일한 명령을 여러 번 반복하는 데 사용 가능
- SASS의 예시

```
@for $vfoo 35px to 85px {
  .margin-#{vfoo} {
    margin: $vfoo 10px;
   }
 }
```

- 이 Loops는 margin 크기를 변경하기 위해 동일한 코드를 여러 번 작성하는 것 방지

**If/Else Statements**

- CSS가 부족한 또 다른 특징은 If/Else문
- 지정된 조건이 참인 경우에만 명령 집합을 실행
- SASS의 예시

```
@if width(body) > 500px {
  background color: blue;
 } else {
  background color: white;
 }
```

- 페이지 본문의 너비에 따라 배경색이 변경
- 이것들은 CSS Preprocessors의 주요 기능 중 일부에 불과
- CSS Preprocessors는 믿을 수 없을 정도로 유용하고 다양한 도구

---

### (2) [Why Use Preprocessors?](https://sherocommerce.com/what-is-a-css-preprocessors-why-use-them/)

**WHAT IS A CSS PREPROCESSOR?**

- CSS Preprocessors는 CSS를 확장하는 스크립트 언어이며 일반 CSS 구문으로 컴파일 됨
- 브라우저는 CSS만 이해할 수 있으며, CSS는 깨끗하고 재사용 가능한 규칙을 작성하기에 충분하지 않을 수 있음
- CSS만을 사용하여 설계자/개발자는 스타일시트에 걸쳐 불분명한 데이터 조각을 가지고 있던 여러 셀렉터에서 규칙 모음을 재사용할 수 없음
- 이러한 한계를 극복하기 위해 Preprocessors의 개념이 만들어짐
- 그것은 기본 기능을 확장한 CSS의 고급 작성 방법을 제공
- 이 고급 코드는 나중에 브라우저가 이해할 일반적인 CSS 코드로 컴파일

**WHAT IS THE DIFFERENCE BETWEEN POPULAR PREPROCESSORS?**

- Sass, LESS, Stylus의 세 가지 주요 Preprocessors 존재
- Sass, LESS, Stylus의 약 80%가 동일하지만 각 CSS Preprocessors는 동일한 작업을 수행하는 고유한 방법 존재
- 나머지 20%는 고급 사용법의 사소한 차이로 구성
- 세 개의 Preprocessors를 모두 사용하여 variables, media queries, mixins, nesting, loops & conditionals and importing 가능
- 이 세 가지 모두 주요 설계 요소를 추상화하고, 논리를 사용하고, 코드를 적게 쓸 수 있게 해주며, 이 세 가지 모두 기본적인 CSS보다 우위를 점할 수 있게 해줌
- SASS
  - Sass는 Ruby를 기반으로 만들어졌고 Gumby와 Foundation과 같은 프레임워크를 가지고 있음
  - Sass는 또한 Compass와 Bourbon과 같은 library에도 혼합을 가지고 있음
  - Sass와 LEST 및 Stylus의 몇 가지 차이점은 @extend, @media, @content
  - @extend를 사용하면 CSS 속성 집합을 한 셀렉터에서 다른 셀렉터로 공유 가능
  - @media를 사용하면 중첩 바로 내부에서 미디어 쿼리를 사용하여 특정 화면 크기를 지정 가능
  - @content를 사용하면 mixin에 포함된 스타일 내에 배치하기 위해 mixin에 스타일 블록을 전달 가능
  - 스타일은 mixin 내에 있는 모든 @content directive 위치에 나타남
- SCSS
  - SCSS는 Sass와 비슷하지만 일반 CSS에 더 가까움
  - SCSS는 CSS를 완전히 준수
  - 일반 CSS를 SCSS 파일로 가져올 수 있으며, 즉시 작동됨
  - CSS에서 무언가를 빌리는 것은 좋은 의미
  - 그것은 깨끗하게 잘 쓰여져 있음
  - 그리고 모든 것을 다시 쓰는 데 시간을 들이는 것은 여러분에게 가장 큰 이익이 되지 않음
- LESS
  - 브라우저에서 노드 Javascript 내에서 실행되는 횟수가 적음
  - LESS와 다른 CSS 프리프로세서의 주요 차이점은 LESS가 브라우저에서 less.js를 통한 실시간 컴파일을 허용한다는 것
  - Sass 또는 Stylus를 사용하면 혼합을 만들 때 CSS 선언 그룹을 만들 수 있지만 LEST에서는 혼합을 클래스의 속성에 포함시킴
- STYLUS
  - node.js에 구축된 Stylus는 당신의 CSS를 막히게 하는 모든 추가 문자들을 실제로 제거
  - Stylus는 구문의 측면에서 freedom를 허용하며 괄호, 세미콜론 및 콜론을 생략 가능
  - Stylus는 강력한 언어 기능 및 조건 통합

**4 Reasons to use a CSS Preprocessor**

- 코드 유지보수가 쉬워짐

  - 문서의 시작 부분에 선언된 변수, 믹스인 및 함수 생성 가능
  - 이렇게 하면 색상과 같은 간단한 변경 사항을 쉽게 유지 가능
  - 예를 들어 기본 색상과 보조 색상에 대한 변수 선언

  ```
  $primary_color: #346699;
  $secondary_color: #769bc0;

  a{color: $primary_color;}
  nav{background-color: $secondary-color;}

  ## 위의 두 문장과 동일
  a{color: #346699;}
  nav{background-color:#769bc0;}
  ```

  - 따라서 기본 색상을 주황색으로 변경하고 싶다면 변수에 선언된 색상만 변경하면 되고 Preprocessor는 CSS로 출력되는 해당 색상의 모든 인스턴스를 자동으로 변경

- 이것은 당신의 CSS를 DRY하게 만들 것

  - 반복하지 말기 (WET와 반대로, 모든 것을 두 번 쓰기)
  - 컴퓨터 프로그래밍의 주요 원칙

  ```
  .main-heading{
  font-family: Tahoma, Geneva, sans-serif; font-weight: bold; font-size:20px; text-transform: uppercase; color: blue;

  }

  .secondary-heading{
  font-family: Tahoma, Geneva, sans-serif; font-weight: bold; font-size:16px; text-transform: uppercase; color: blue;

  }
  ```

  - 위의 코드를 아래로 고치기
  - SCSS에서 @extend를 사용하면 CSS 속성 집합을 한 선택에서 다른 선택으로 공유 가능

  ```
  .main-heading{
  font-family: Tahoma, Geneva, sans-serif; font-weight: bold; font-size:20px; text-transform: uppercase; color: blue;

  }

  .secondary-heading{
  @extend .main-heading; font-size:16px;

  }
  ```

  - 그것은 당신의 CSS를 더 조직적으로해 줌

- Sass와 LESS 모두 중첩된 정의를 지원

  - 이것은 훌륭한 기능이고 일 정리
  - 이런 식으로 css 정의를 쓰기 시작하면, 당신은 예전 방식이 얼마나 반복적이었는지 깨닫게 될 것임

  ```
  h2{
  font-family:Helvetica, Arial, sans-serif; font-size:20px; text-transform:uppercase; a { color:blue; } &:hover{ text-decoration:underline; color:green; }


  }
  ```

  ```
  h2 {
  font-family: Helvetica, Arial, sans-serif; font-size: 20px; text-transform: uppercase;

  }

  h2 a {
  color: blue;

  }

  h2 a:hover {
  text-decoration: underline; color: green;

  }
  ```

- 시간 절약 : 동일한 코드를 반복해서 작성하지 않아도 되는 경우 얼마나 많은 시간 절약 가능
