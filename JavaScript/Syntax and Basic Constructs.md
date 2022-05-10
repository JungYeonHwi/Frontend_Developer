# 1. Syntax and Basic Constructs

<목차>

(1) [W3Schools – JavaScript Tutorial](#1-w3schools-learn-htmlhttpswwww3schoolscomhtmlhtmlintroasp)
(2) [The Modern JavaScript Tutorial](#2-html-full-course---build-a-website-tutorialhttpswwwyoutubecomwatchvpqn-pnxpavg)
(3) [HTML Tutorial for Beginners: HTML Crash Course](#3-html-tutorial-for-beginners-html-crash-coursehttpswwwyoutubecomwatchvqz0agyrrlhu)
(4) [How does the Internet work?](#4-build-15-javascript-projects---vanilla-javascripthttpswwwyoutubecomwatchv3phxvlpokf4)

---

### (1) [W3Schools – JavaScript Tutorial](https://www.w3schools.com/js/)

**CSS Introduction**

The Modern JavaScript Tutorial

---

### (2) [The Modern JavaScript Tutorial](https://javascript.info/)

**An introduction**

1.1 An Introduction to JavaScript

- JavaScript 무엇일까?
  - javascript는 처음에 "웹 페이지를 활성화"하기 위해 만들어짐
  - 이 언어로 된 프로그램을 스크립트라고 함
  - 그것들은 웹 페이지의 HTML에 바로 쓰여지고 페이지가 로드될 때 자동으로 실행
  - 스크립트는 일반 텍스트로 제공되고 실행됨, 실행할 때 특별한 준비나 컴파일이 필요하지 않음
  - 이런 점에서 JavaScript는 java라는 다른 언어와는 매우 다름
  - 오늘날 JavaScript는 브라우저뿐만 아니라 서버에서도 실행할 수 있으며, JavaScript 엔진이라는 특별한 프로그램이 있는 모든 기기에서 실행 가능
  - 브라우저에는 "JavaScript 가상 머신"이라고 불리는 내장 엔진 존재
  - 엔진마다 코드명이 다름
    - V8 – Chrome, Opera 및 Edge에서 사용
    - SpiderMonkey – 파이어폭스에서 사용
    - IE의 경우 "Chakra", "JavaScriptCore", "Nitro", Safari의 경우 "SquirrelFish"와 같은 다른 코드네임 존재
  - 위의 용어들은 인터넷상의 개발자 기사에서 사용되기 때문에 기억하기 좋음
- JavaScript가 브라우저 내에서 작동하는 것
  - 현대 JavaScript는 안전한 프로그래밍 언어임
  - 메모리나 CPU에 대한 낮은 수준의 액세스를 제공하지 않음
  - JavaScript의 기능은 실행 중인 환경에 크게 좌우됨, 예를 들어, Node.js는 자바스크립트가 임의의 파일을 읽고 쓸 수 있도록 하고, 네트워크 요청을 수행하는 등의 기능을 지원
  - 브라우저 내 JavaScript는 웹 페이지 조작, 사용자와의 상호 작용 및 웹 서버와 관련된 모든 작업을 수행 가능
  - 예를 들어 브라우저 내 JavaScript는 다음을 수행 가능
    - 페이지에 새 HTML을 추가하고, 기존 내용을 변경하고, 스타일을 수정
    - 사용자 작업에 대응하고, 마우스 클릭 시 실행, 포인터 이동, 키 누름
    - 네트워크를 통해 원격 서버로 요청을 보내고 파일을 다운로드 및 업로드 (AJAX 및 COMET 기술)
    - 쿠키를 가져와 설정하고, 방문자에게 질문을 하고, 메시지를 표시
    - 클라이언트 측("로컬 스토리지")의 데이터를 저장
- 브라우저 내 JavaScript에서 수행할 수 없는 작업
  - 브라우저에서 JavaScript의 기능은 사용자의 안전을 위해 제한, 그 목적은 악성 웹 페이지가 개인 정보에 접근하거나 사용자의 데이터를 손상시키는 것을 방지하는 것
  - 이러한 제한의 예는 다음과 같음
    - 웹 페이지의 JavaScript는 하드 디스크의 임의 파일을 읽거나 쓰거나 복사하거나 프로그램을 실행할 수 없음, OS 기능에 직접 접근 불가능
    - 현대의 브라우저는 파일 작업을 허용하지만, 접근은 제한적이며 사용자가 브라우저 창에 파일을 "드롭"하거나 `<input>` 태그를 통해 파일을 선택하는 것과 같은 특정 작업을 수행할 때만 제공
    - 카메라/마이크 및 기타 장치와 상호 작용하는 방법이 있지만 사용자의 명시적 권한이 필요, 그래서 자바스크립트가 가능한 페이지는 몰래 웹 카메라를 활성화 시키지 않고, 주변을 관찰하고 정보를 NSA로 보낼 수 있음
    - 서로 다른 탭/창은 일반적으로 서로에 대해 알지 못함, 예를 들어, 한 창이 다른 창을 열기 위해 JavaScript를 사용하는 경우처럼, 때때로 그렇게 함, 그러나 이 경우에도 한 페이지의 JavaScript가 다른 사이트(다른 도메인, 프로토콜 또는 포트)에서 온 경우 다른 페이지에 접근 불가능
    - 이를 "Same Origin Policy"이라고 함, 이 문제를 해결하려면 두 페이지 모두 데이터 교환에 동의해야 하며 이를 처리하는 특별한 자바스크립트 코드를 포함해야 함
    - 이 제한은 다시 한번 사용자의 안전을 위한 것이다. 사용자가 연 http://anysite.com의 페이지는 URL이 http://gmail.com인 다른 브라우저 탭에 액세스하여 거기에서 정보를 가질 수 없어야 함
    - JavaScript는 인터넷을 통해 현재 페이지의 원본 서버와 쉽게 통신 가능, 그러나 다른 사이트/도메인에서 데이터를 수신하는 기능은 무력화됨, 가능하지만 원격 측에서 명시적 동의(HTTP 헤더로 표현)가 필요, 다시 한 번 말하지만, 그것은 안전상의 한계
  - 예를 들어 서버에서 JavaScript를 브라우저 외부에서 사용하는 경우에는 이러한 제한이 없음, 현대의 브라우저들은 또한 확장 권한을 요청할 수 있는 플러그인/확장 기능을 허용
- JavaScript를 고유하게 만드는 것
  - JavaScript에는 적어도 세 가지 좋은 점 존재
    - HTML/CSS와 완벽하게 통합
    - 간단한 일은 간단히 이루어짐
    - 모든 주요 브라우저에서 지원되며 기본적으로 활성화
  - JavaScript는 이 세 가지를 결합한 유일한 브라우저 기술
  - 그것이 JavaScript를 독특하게 만드는 것임, 그것이 브라우저 인터페이스를 만드는 가장 널리 사용되는 도구인 이유임
  - 즉, JavaScript는 서버, 모바일 애플리케이션 등을 만들 수도 있음
- JavaScript를 통한 언어
  - JavaScript의 구문은 모든 사람의 요구에 맞지 않음, 사람마다 다른 기능을 원함
  - 프로젝트와 요구사항은 사람마다 다르기 때문에 그것은 당연한 일임
  - 그래서 최근 브라우저에서 실행되기 전에 자바스크립트로 번역(변환)되는 수많은 새로운 언어 등장
  - 현대의 도구들은 번역을 매우 빠르고 투명하게 만들어, 실제로 개발자들이 다른 언어로 코딩하고 "후드 아래에서" 자동 변환할 수 있게 함
  - 이러한 언어의 예는 다음과 같음
    - CoffeeScript는 JavaScriptic sugar로서, 더 짧은 구문을 도입하여 우리가 더 명확하고 정확한 코드를 쓸 수 있게 함, 보통 Ruby가 사용함
    - TypeScript는 복잡한 시스템의 개발과 지원을 단순화하기 위해 "엄격한 데이터 타이핑"을 추가하는 데 초점, 마이크로소프트에 의해 개발됨
    - Flow는 또한 다른 방식으로 데이터 입력을 추가, Facebook에서 개발했습니다.
    - Dart는 브라우저가 아닌 환경(모바일 앱과 같은)에서 실행되는 자체 엔진을 가진 독립 실행형 언어이며, JavaScript로 번역 가능, 구글에 의해 개발됨
    - Brython은 JavaScript로의 파이썬 변환 파일러로, JavaScript트 없이 순수한 파이썬으로 응용 프로그램을 쓸 수 있게 함
    - Kotlin은 브라우저나 노드를 대상으로 할 수 있는 현대적이고 간결하며 안전한 프로그래밍 언어
  - 더 존재함, 물론, 우리가 번역된 언어 중 하나를 사용한다고 해도, 우리가 무엇을 하고 있는지 정말로 이해하기 위해서는 JavaScript도 알아야 함
