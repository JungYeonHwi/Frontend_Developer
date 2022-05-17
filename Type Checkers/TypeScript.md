# 1. TypeScript

<목차>

(1) [Official Docs for Deep Dives](#1-typescript)

---

### (1) [Official Docs for Deep Dives](https://www.typescriptlang.org/docs/)

**TypeScript for the New Programmer**

- TS(TypeScript)와 JS(JavaScript)의 관계는 현대 프로그래밍 언어에서 다소 독특;
- What is JavaScript? A Brief History
  - JS(ECMAScript라고도 함)는 브라우저를 위한 간단한 스크립트 언어로 시작
  - JS 발명 당시 웹 페이지에 내장된 짧은 코드 조각에 사용될 것으로 예상
  - 수십 줄 이상의 코드를 작성하는 것은 다소 이례적인 일
  - 이 때문에 초기 웹 브라우저들은 그러한 코드를 꽤 느리게 실행
  - 그러나 시간이 지남에 따라 JS는 점점 더 인기를 끌었고 웹 개발자들은 대화형 경험을 만들기 위해 그것을 사용하기 시작
  - 웹 브라우저 개발자들은 그들의 실행 엔진을 최적화하고 (동적 컴파일) 그것으로 할 수 있는 것을 확장함으로써 (API를 추가함으로써) JS 사용 증가에 대응했고, 이는 다시 웹 개발자들이 그것을 더 많이 사용하게 만듦
  - 최신 웹 사이트에서 브라우저는 수십만 줄의 코드에 걸쳐 있는 응용 프로그램을 자주 실헹
  - 이것은 정적 페이지의 단순한 네트워크로 시작하여 모든 종류의 풍부한 애플리케이션을 위한 플랫폼으로 진화하면서 "웹"의 길고 점진적인 성장
  - 이 외에도 JS는 node.js를 사용하여 JS 서버를 구현하는 등 브라우저의 컨텍스트 밖에서 사용될 정도로 인기를 끌고 있다. JS의 "어디서나 실행 가능" 특성은 교차 플랫폼 개발을 위한 매력적인 선택
  - 요약하자면, 우리는 빠른 사용을 위해 설계된 언어를 가지고 있고, 그리고 나서 수백만 줄의 애플리케이션을 작성할 수 있는 완전한 도구로 성장
  - JS의 몇 가지 특성
    - JS의 동등 연산자(==)는 인수를 강제하여 예기치 않은 동작을 발생
    ```
    if ("" == 0) {
    // It is! But why??
    }
    if (1 < x < 3) {
    // True for *any* value of x!
    }
    ```
    - JS는 존재하지 않는 속성에 접근 가능
    ```
    const obj = { width: 10, height: 15 };
    // Why is this NaN? Spelling is hard!
    const area = obj.width * obj.heigth;
    ```
  - 대부분의 프로그래밍 언어들은 이러한 종류의 오류가 발생할 때 오류를 발생시키며, 일부는 코드가 실행되기 전에 컴파일 중에 오류를 발생
  - 작은 프로그램을 작성할 때, 그러한 기이한 점은 성가시지만 다루기 쉬움
  - 수백 또는 수천 줄의 코드로 애플리케이션을 작성할 때, 이러한 심각한 문제
- TypeScript: A Static Type Checker
