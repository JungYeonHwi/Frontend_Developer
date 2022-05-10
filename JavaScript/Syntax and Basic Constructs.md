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

**1.1 An Introduction to JavaScript**

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

**1.2 Manuals and specifications**

- specification
  - ECMA-262 규격은 JavaScript에 대한 가장 심층적이고 상세하며 공식화된 정보를 포함하고, 언어를 정의
  - 하지만 그렇게 형식화되면 처음에는 이해하기 어려움, 따라서 언어 세부 사항에 대한 가장 신뢰할 수 있는 정보 출처가 필요하다면 사양이 적절한 장소, 하지만 그것은 일상 용도가 아님
  - 매년 새로운 사양 버전이 출시됨, 이러한 릴리스 사이에 최신 사양 초안은 https://tc39.es/ecma262/에 있음
  - 새로운 블리딩 에지 기능(일명 "3단계")에 대한 내용은 https://github.com/tc39/proposals의 제안서를 참고
  - 또한 브라우저용으로 개발 중인 경우 튜토리얼의 두 번째 부분에서 다룬 다른 specification 존재
- Manuals
  - MDN(Mozilla) JavaScript Reference는 예제 및 기타 정보가 포함된 주요 설명서, 개별 언어 기능, 방법 등에 대한 심층적인 정보를 얻는 것이 좋음
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference에서 찾을 수 있음
  - 그러나 인터넷 검색을 대신 사용하는 것이 가장 좋음, 쿼리에서 "MDN [term](예: parseInt 함수를 찾기 위해서 https://google.com/search?q=MDN+parseInt 사용)
- Compatibility tables
  - JavaScript는 개발 언어이며, 새로운 기능이 정기적으로 추가됨
  - 브라우저 기반 엔진 및 기타 엔진에서 지원되는 기능을 보려면 다음 참조
    - http://caniuse.com : 최신 암호화 기능을 지원하는 엔진을 확인하기 위한 지원 테이블(예: http://caniuse.com/#cryptography= protocolography)
    - https://kangax.github.io/compat-table : 언어 기능과 이러한 기능을 지원하거나 지원하지 않는 엔진이 포함된 표
  - 이러한 모든 리소스는 언어 세부 정보, 지원 등에 대한 귀중한 정보를 포함하고 있기 때문에 실제 개발에서 유용
  - 특정 기능에 대한 자세한 정보가 필요한 경우 해당 정보(또는 이 페이지)를 기억

**1.3 Code editors**

- 코드 에디터는 프로그래머들이 대부분의 시간 할애
- 코드 편집기에는 IDE와 lightweight editors의 두 가지 주요 유형 존재
- 많은 사람들이 각 유형의 도구를 사용
- IDE
  - IDE(통합 개발 환경)라는 용어는 보통 "전체 프로젝트"에서 작동하는 많은 기능을 가진 강력한 편집
  - 이름에서 알 수 있듯이, 그것은 단순한 편집자가 아니라 전면적인 "개발 환경"
  - IDE는 프로젝트를 로드하고(많은 파일이 될 수 있음), 파일 간의 탐색을 허용하며(열린 파일뿐만 아니라) 전체 프로젝트를 기반으로 자동 완성 기능을 제공하며, 버전 관리 시스템(예: Git), 테스트 환경 및 기타 "프로젝트 수준"과 통합됨
  - IDE를 아직 선택하지 않은 경우 다음 옵션을 고려
    - Visual Studio Code(크로스 플랫폼, 무료)
    - WebStorm(크로스 플랫폼, 유료)
    - 윈도우의 경우, "Visual Studio Code"와 혼동되지 않도록 "Visual Studio"도 존재
    - Visual Studio는 유료로 강력한 윈도우 전용 편집기로, .NET 플랫폼에 적합
    - 자바스크립트에도 좋음
    - 무료 버전 Visual Studio Community도 존재
  - 많은 IDE가 유료이지만 평가판 사용 기간이 존재
  - 그들의 비용은 보통 자격을 갖춘 개발자의 급여와 비교했을 때 무시할 수 있으므로, 당신에게 가장 적합한 것을 선택하기만 하면 됨
- Lightweight editors
  - IDE만큼 강력하지는 않지만 빠르고 우아하며 단순
  - 주로 파일을 즉시 열고 편집하는 데 사용
  - "Lightweight editors"와 "IDE"의 주요 차이점은 IDE가 프로젝트 수준에서 작동하기 때문에 시작할 때 훨씬 더 많은 데이터를 로드하고 필요한 경우 프로젝트 구조를 분석하는 것, 파일 하나만 있으면 Lightweight editors가 훨씬 빠름
  - 실제로 Lightweight editors에는 디렉터리 수준 구문 분석기와 자동 완성기를 포함한 많은 플러그인이 있을 수 있으므로 Lightweight editors와 IDE 사이에는 엄격한 경계가 없음
  - 다음 옵션은 주의
    - Atom(크로스 플랫폼, 무료)
    - Sublime Text(크로스 플랫폼, 쉐어웨어)
    - Notepad++(Windows, 무료)
    - Vim과 Emacs도 사용법을 안다면 사용

**1.4 Developer console**

- 코드는 오류가 발생하기 쉬움, 실수할 가능성이 높음, 내가 무슨 말을 하고 있는 거지? 적어도 로봇이 아니라 인간이라면 실수를 하게 될 것임
- 그러나 브라우저에서 사용자는 기본적으로 오류 확인 가능 그래서 script에 문제가 생기면, 우리는 무엇이 고장났는지 볼 수 없고 고칠 수 없음
- 오류를 보고 스크립트에 대한 다른 많은 유용한 정보를 얻기 위해 "개발자 도구"가 브라우저에 내장되어 있음
- 대부분의 개발자들은 크롬이나 파이어폭스 브라우저가 최고의 개발자 도구를 가지고 있기 때문에 개발을 위해 크롬이나 파이어폭스에 의존, 다른 브라우저들도 개발자 도구를 제공하는데, 때로는 특별한 기능을 제공하기도 하지만 보통 크롬이나 파이어폭스를 따라잡는 역할을 함, 그래서 대부분의 개발자는 "즐겨찾기" 브라우저를 가지고 있으며 문제가 브라우저에 특정되면 다른 브라우저로 전환
- 개발자 도구는 강력하며 많은 기능을 가지고 있음, 먼저, 우리는 그것들을 열고, 오류를 보고, JavaScript 명령을 실행하는 방법을 배울 것임
- Google Chrome
  - 자바스크립트 코드에 오류 존재, 그것은 일반 방문객의 눈에 보이지 않기 때문에, 그것을 보기 위해 개발자 도구를 열어야 함
  - F12를 누르거나 Mac을 사용하는 경우 Cmd+Opt+J를 누르기
  - 개발자 도구는 기본적으로 콘솔 탭에서 열림
  - 다음처럼 생김
    ![chrome error](./img/chrome.png)
  - 개발자 도구의 정확한 모양은 사용자의 크롬 버전에 따라 다름
  - 여기서 빨간색 오류 메시지를 볼 수 있음
    - 이 경우 script에 알 수 없는 "lalala" 명령이 포함되어 있음
    - 오른쪽에는 오류가 발생한 줄 번호와 함께 source bug.html:12에 대한 클릭 가능한 링크 존재
  - 오류 메시지 아래에 파란색 > 기호가 있습니다. 이것은 우리가 자바스크립트 명령어를 입력할 수 있는 "명령줄"을 표시, Enter 키를 눌러 실행
- Firefox, Edge, and others
  - 대부분의 다른 브라우저들은 개발자 도구를 열기 위해 F12를 사용
  - 이러한 도구 중 하나를 사용하는 방법을 알게 되면(Chrome부터 시작할 수 있음) 다른 도구로 쉽게 전환 가능
- Safari
  - Safari(Mac 브라우저, Windows/Linux에서 지원되지 않음)는 여기서 조금 특별합니다. 먼저 "개발 메뉴"를 활성화
  - "preferences"를 열고 "advanced"영역으로 이동, 아래쪽에 확인란 존재
  - 이제 Cmd+Opt+C가 콘솔을 전환 가능, 또한 "개발"이라는 이름의 새 최상위 메뉴 항목이 표시됨, 여기에는 많은 명령과 옵션 존재
