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

**Managing CSS**

- CSS는 크고 복잡하고 빠르게 반복되는 시스템에서 관리하기 어려움
