# 1. Pcik a Framework

<목차>

(1) [What is the difference between a framework and a library?](#1-what-is-the-difference-between-a-framework-and-a-libraryhttpsyoutubedmo9virbca)
(2) (2) [Which JS Framework is best?](#2-which-js-framework-is-besthttpsyoutubecuhdqhdhvpe)

---

### (1) [What is the difference between a framework and a library?](https://youtu.be/D_MO9vIRBcA)

- framework로서의 library의 모음이라고 할 수 있지만, 모든 framework가 어떤 경우에는 library를 사용하거나 의존하지 않기 때문에 완전히 사실이라고 할 수 없음
- framework와 library의 구별되는 차이점은 누가 누구를 호출하는지, 즉 framework에서 코드를 호출하는 것과 library에서 framework 코드가 호출하는 것
- rel에 대해 생각하는 것과 같은 방식으로 library를 호출하는 것은 코드
- 일반적인 서버 클라이언트 관계에서 서버와 클라이언트간의 관계에서 클라이언트는 서버에 요청을 하고, 서버는 클라이언트에 응답
- 예시
  - curl 함수 중 하나를 사용할 때 PHP library임, curl library에서 함수를 호출하면 코드가 호출자와 library 코드가 호출이 됨
  - laravel과 같은 PHP framework를 사용할 때, 이 관계는 반전이 되고 애플리케이션 코드를 호출하는 framework 코드임
- framework에서 작성된 이것은 일반적으로 제어 역전으로 알려진 디자인을 사용하므로 호출자가 프로그램의 기능이나 동작을 정의하기 위해 동료에 의존하고 호출이 호출자에 따라 흐름을 정의하면 반전됨
- 프로그램에서 제어 또한 준비된 문서와 같은 작업을 수행할 때, JavaScript framework인 jQuery와 같은 것으로 쉽게 관찰 가능
- 문서가 준비 상태일 때 정의한 이 콜백을 호출할 framework를 framework의 제어 부분의 흐름
- 이 흐름은 이제 일반적인 PHP MVC framework에서와 유사하게 담당
- 들어오는 모든 요청을 처리하는 전면 컨트롤러를 정의하는 framework임을 확인하고 일부 사용자 정의 컨트롤러를 통해 기본 애플리케이션 코드에 정보를 제공한 다음 응답을 수집하여 애플리케이션에 대한 제어 흐름을 유지하지만 포기
- framework와 library의 실제 차이점은 제어에 관한 것이므로 애플리케이션 코드에 대한 동작 정의는 특히 제어 framework의 흐름을 궁극적으로 제어하므로 애플리케이션의 흐름을 제어하고 library는 그렇지 않음

---

### (2) [Which JS Framework is best?](https://youtu.be/cuHDQhDhvPE)
