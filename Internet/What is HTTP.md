# 2. What is HTTP?

<목차>

(1) [What is HTTP?](#2-what-is-http)

---

### (1) [What is HTTP?](https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/)

**What is HTTP?**

- HTTP(Hypertext Transfer Protocol)는 월드 와이드 웹의 기반이며 하이퍼텍스트 링크를 사용하여 웹 페이지를 로드하는 데 사용
- HTTP는 네트워크 장치 간에 정보를 전송하도록 설계된 응용 계층 프로토콜이며 네트워크 프로토콜 스택의 다른 계층 위에서 실행
- HTTP를 통한 일반적인 흐름은 클라이언트 컴퓨터가 서버에 요청을 한 다음 응답 메시지를 보내는 것을 포함

**What’s in an HTTP request?**

- HTTP 요청은 웹 브라우저와 같은 인터넷 통신 플랫폼이 웹 사이트를 로드하는 데 필요한 정보를 요청하는 방식
- 인터넷을 통해 이루어지는 각 HTTP 요청은 서로 다른 유형의 정보를 전달하는 일련의 암호화된 데이터를 가지고 있음
- 일반적인 HTTP 요청에는 다음이 포함
  - HTTP 버전 유형
  - URL
  - HTTP 방식
  - HTTP 요청 헤더
  - 선택적 HTTP 본문
- 이러한 요청의 작동 방식과 요청 내용을 사용하여 정보를 공유하는 방법 확인하기
- HTTP method
  - HTTP 메서드(HTTP 동사라고도 함)는 HTTP 요청이 쿼리된 서버에서 기대하는 동작을 나타냄
  - 예를 들어, 가장 일반적인 HTTP 방법 중 두 가지는 'GET'와 'POST'이다
    - 'GET' 요청은 (보통 웹사이트의 형태로) 반환되는 정보를 기대
    - 'POST' 요청은 일반적으로 클라이언트가 웹 서버에 정보를 제출
- HTTP request header
  - HTTP 헤더는 키와 값 쌍으로 저장된 텍스트 정보를 포함하며, 모든 HTTP 요청에 포함
  - 이러한 헤더는 클라이언트가 어떤 브라우저에서 어떤 데이터를 사용하고 있는지와 같은 핵심 정보를 전달
  - Google Chrome의 네트워크 탭에서 HTTP 요청 헤더의 예시
    [!http request headers](./img/http%20request%20headers.png)
- HTTP request body
  - 요청 본문은 요청이 전송하는 정보의 '본문'을 포함하는 부분
  - HTTP 요청 본문에는 사용자 이름 및 암호와 같이 웹 서버에 제출되는 모든 정보 또는 양식에 입력된 기타 데이터가 들어 있음

**What’s in an HTTP response?**

- HTTP 응답은 웹 클라이언트(종종 브라우저)가 HTTP 요청에 대한 응답으로 인터넷 서버로부터 수신하는 응답
- 이러한 응답은 HTTP 요청에서 요청한 내용에 따라 중요한 정보를 전달
- 일반적인 HTTP 응답에는 다음이 포함
  - HTTP 상태 코드
  - HTTP 응답 헤더
  - 선택적 HTTP 본문
- HTTP status code
  - HTTP 상태 코드는 HTTP 요청이 성공적으로 완료되었는지 여부를 나타내는 데 가장 많이 사용되는 3자리 코드
  - 상태 코드는 다음 5개의 블록으로 구분 - 1xx 정보 - 2xx 성공 - 3xx 리디렉션 - 4xx 클라이언트 오류 - 5xx 서버 오류
    "xx"는 00과 99 사이의 다른 숫자를 나타냄
  - 숫자 '2'로 시작하는 상태 코드는 성공을 나타
    - 예를 들어, 클라이언트가 웹 페이지를 요청한 후 가장 일반적으로 표시되는 응답의 상태 코드는 '200 OK'로 나타나며, 이는 요청이 제대로 완료되었음을 나타냄
  - 응답이 '4' 또는 '5'로 시작되면 오류가 발생했으며 웹 페이지가 표시되지 않음 - '4'로 시작하는 상태 코드는 클라이언트 측 오류를 나타냄 (URL에서 오타를 낼 때 '404 NOT FOUND' 상태 코드가 발생하는 것이 매우 일반적입니다). - '5'로 시작하는 상태 코드는 서버 측에서 문제가 발생했음을 의미
    상태 코드는 '1' 또는 '3'으로 시작할 수 있으며, 이는 각각 정보 응답과 리디렉션을 나타냄
- HTTP response header
  - HTTP 요청과 마찬가지로 HTTP 응답에는 응답 본문에서 전송되는 데이터의 언어 및 형식과 같은 중요한 정보를 전달하는 헤더가 함께 제공
  - Google Chrome의 네트워크 탭에서 HTTP 응답 헤더의 예시
    [!HTTP response headers](./img/HTTP%20response%20headers.png)
    - HTTP response body
      - 'GET' 요청에 대한 성공적인 HTTP 응답은 일반적으로 요청된 정보를 포함하는 본문을 가짐
      - 대부분의 웹 요청에서 이것은 웹 브라우저가 웹 페이지로 변환하는 HTML 데이터

**Can DDoS attacks be launched over HTTP?**

- HTTP는 "상태 없는" 프로토콜이며, 이는 각 명령이 다른 명령과 독립적으로 실행된다는 것을 의미
- 원래 사양에서 HTTP 요청은 각각 TCP 연결을 만들고 닫았음
- 새로운 버전의 HTTP 프로토콜(HTTP 1.1 이상)에서는 영구 연결을 통해 여러 HTTP 요청이 영구 TCP 연결을 통해 전달되도록 하여 리소스 소비를 개선
- DoS 또는 DDoS 공격의 맥락에서, 많은 양의 HTTP 요청은 대상 장치에 대한 공격을 마운트하는 데 사용될 수 있으며, 애플리케이션 계층 공격 또는 계층 7 공격의 일부로 간주
