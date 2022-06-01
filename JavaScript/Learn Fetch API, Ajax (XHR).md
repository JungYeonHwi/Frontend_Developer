# 3. Learn Fetch API / Ajax (XHR)

<목차>

(1) [Fetch API MDN Docs](#1-fetch-api-mdn-docshttpsdevelopermozillaorgen-usdocswebapifetchapi)

(2) [JavaScript Fetch API](#2-javascript-fetch-apihttpswwwyoutubecomwatchv-zi0ea5o2oa)

---

### (1) [Fetch API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

**Fetch API**

- Concepts and usage
  - Fetch는 Request 및 Response 개체(및 네트워크 Request과 관련된 기타)에 대한 일반적인 정의를 제공
  - 이를 통해 서비스 직원, Cache API 및 Request과 Response을 처리하거나 수정하는 유사한 작업, 또는 Response을 프로그래밍 방식으로 생성해야 하는 모든 종류의 사용 사례(즉, 컴퓨터 프로그램 또는 개인 프로그래밍 지침 사용)를 위해 필요한 경우 어디에서나 사용 가능
  - 또한 CORS 및 HTTP Origin 헤더 의미 체계와 같은 관련 개념을 정의하여 다른 곳에서 별도의 정의를 대체
  - Request을 작성하고 리소스를 가져오려면 fetch() 메서드를 사용, 여러 인터페이스, 특히 Window와 WorkerGlobalScope에서 구현
  - 따라서 리소스를 가져오려는 거의 모든 컨텍스트에서 사용 가능
  - fetch() 메서드는 가져올 리소스에 대한 경로인 하나의 필수 인수를 사용
    - 서버 Response이 HTTP 오류 상태일 경우에도 서버가 헤더로 Response하는 즉시 해당 Request에 대한 Response으로 확인되는 약속을 반환
      0 선택적으로 init options 개체를 두 번째 인수로 전달 가능
  - Response을 검색하면 본문 내용 및 처리 방법을 정의하는 여러 가지 방법 사용 가능
    - Request() 및 Response답() 생성자를 사용하여 Request 및 Response을 직접 만들 수 있지만, 직접 만드는 것은 일반적이지 않음
    - 대신 다른 API 작업(예: 서비스 작업자의 FetchEvent.respondWith())의 결과로 생성될 가능성이 높음
- Differences from jQuery
  - 가져오기 사양은 세 가지 주요 방식으로 jQuery.ajax()와 차이
    - Response이 HTTP 404 또는 500인 경우에도 fetch()에서 반환된 약속은 HTTP 오류 상태에서 거부되지 않지만 대신 정상적으로 해결되며(확인 상태가 false로 설정됨), 네트워크 장애 시 또는 Request이 완료되지 않은 경우에만 거부
    - credential init 옵션(포함)을 설정하지 않으면 fetch()에서 교차 검색 쿠키를 보내지 않음
    - 2018년 4월, 스펙은 기본 자격 증명 정책을 'same-origin'로 변경, 다음 브라우저는 오래된 네이티브 fetch를 제공
    - 이러한 브라우저의 이전 버전을 대상으로 하는 경우 쿠키/사용자 로그인 상태의 영향을 받을 수 있는 모든 API Request에 자격 증명 'same-origin' init 옵션을 포함
- Aborting a fetch
  - 브라우저는 아직 완료되지 않은 경우 Fetch 및 XHR과 같은 작업을 중단할 수 있도록 하는 AbortController 및 AbortSignal 인터페이스(Abort API)에 대한 실험적 지원을 추가
- Fetch Interfaces
  - fetch() : 리소스를 가져오는 데 사용
  - Header : Response/Request 헤더를 나타내며, 이를 쿼리하고 결과에 따라 다른 액션을 수행 가능
  - Request : 리소스 요청
  - Response : Request에 대한 Response

**Using the Fetch API**

- Fetch API는 HTTP 파이프라인을 구성하는 요청과 응답 등의 요소를 JavaScript에서 접근하고 조작할 수 있는 인터페이스를 제공
  - Fetch API가 제공하는 전역 fetch() (en-US) 메서드로 네트워크의 리소스를 쉽게 비동기적으로 가져올 수도 있음
  - 이전에는 이런 기능을 XMLHttpRequest를 사용해 할 수 있었지만, Fetch는 더 좋은 대체제면서, 서비스 워커 등 다른 기술에서도 쉽게 사용할 수 있는 API
  - 또한 CORS와 같이 HTTP와 관련된 다른 개념들을 한 곳에 모아서 정의할 수 있는 논리적인 장소도 제공
  - fetch 명세는 jQuery.ajax()와 크게 두 가지
    - fetch()가 반환하는 프로미스 객체는 404, 500과 같은 HTTP 오류 상태를 수신해도 거부되지 않음, fetch()의 promise는 서버에서 헤더를 포함한 응답을 받는 순간 정상적으로 이행, 대신, 응답의 상태가 200-299를 벗어날 경우 ok속성이 false로 설정, promise가 거부되는 경우는 네트워크 연결이 실패하는 경우를 포함, 아예 요청을 완료하지 못한 경우로 한정
    - 자격 증명(credentials) 옵션 (en-US)을 제공하지 않은 경우, fetch()는 교차 출처 쿠키를 전송하지 않음
  - 기본적인 Fetch 요청
  ```
  fetch('http://example.com/movies.json')
      .then((response) => response.json())
      .then((data) => console.log(data));
  ```
  - 위 코드는 네트워크에서 JSON 파일을 가져와서 콘솔에 출력
  - 가장 단순한 형태의 fetch()는 가져오고자 하는 리소스의 경로를 나타내는 하나의 인수만 받음
  - 응답은 Response (en-US) 객체로 표현되며, 직접 JSON 응답 본문을 받을 수는 없음
  - Response (en-US) 객체 역시 JSON 응답 본문을 그대로 포함하지는 않음
  - Response는 HTTP 응답 전체를 나타내는 객체로, JSON 본문 콘텐츠를 추출하기 위해서는 json() (en-US) 메서드를 호출해야 함
  - json()은 응답 본문 텍스트를 JSON으로 파싱한 결과로 이행하는, 또 다른 프로미스를 반환
  - Fetch 요청은 가져오려는 리소스의 지시문이 아닌, Content-Security-Policy 헤더의 connect-src 지시문에 의해 제어
- Supplying request options

  - fetch() 메서드에는 선택적으로 두 번째 매개변수도 제공
  - 이 매개변수, init 객체를 사용하면 여러가지 설정을 제어 가능

  ```
  // POST 메서드 구현 예제
  async function postData(url = "", data = {}) {
  // 옵션 기본 값은 *로 강조
  const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE 등
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
  return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
  }

  postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
  });
  ```

  - `mode: "no-cors"`를 지정하면, 요청에 제한된 헤더만 포함
  - 사용 가능한 Header
    - `Accept`
    - `Accept-Language`
    - `Content-Language`
    - `Content-Type`, 값으로는 `application/x-www-form-urlencoded`, `multipart/form-data`, 또는 `text/plain`

- Sending a request with credentials included

  - 브라우저가 요청을 전송할 때 자격 증명을 포함하도록 하려면 fetch() 메서드에 전달하는 init 객체에 `credential: 'include'`를 추가
  - 동일 출처와 교차 출처 요청 모두에 사용 가능

  ```
  fetch('https://example.com', {
      credentials: 'include',
  });
  ```

  - 요청 URL이 스크립트와 같은 출처일 때만 자격 증명을 전송하려면 `credentials: 'same-origin'`을 추가

  ```
  // 스크립트의 출처도 'https://example.com'

  fetch('https://example.com', {
      credentials: 'same-origin',
  });
  ```

  - 브라우저가 요청에서 자격 증명을 전송하지 않도록 하려면 `credentials: 'omit'`을 사용

  ```
  fetch('https://example.com', {
      credentials: 'omit',
  });
  ```

- Uploading JSON data : fetch() (en-US)를 사용하면 JSON 인코딩된 데이터를 POST 요청에 포함 가능

  ```
  const data = { username: "example" };

  fetch("https://example.com/profile", {
  method: "POST", // 또는 'PUT'
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
      console.log("성공:", data);
  })
  .catch((error) => {
      console.error("실패:", error);
  });
  ```

- Uploading a file : fetch() (en-US)와 `<input type="file">` 입력 칸 요소, FormData()를 사용해서 파일을 업로드

  ```
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');

  formData.append("username", "abc123");
  formData.append("avatar", fileField.files[0]);

  fetch("https://example.com/profile/avatar", {
  method: "PUT",
  body: formData,
  })
  .then((response) => response.json())
  .then((result) => {
      console.log("성공:", result);
  })
  .catch((error) => {
      console.error("실패:", error);
  });
  ```

- Uploading multiple files : fetch() (en-US)와 `<input type="file" multiple>` 입력 칸 요소, FormData()를 사용해서 여러 파일을 업로드

  ```
  const formData = new FormData();
  const photos = document.querySelector('input[type="file"][multiple]');

  formData.append("title", "제주도 수학여행");
  for (let i = 0; i < photos.files.length; i++) {
  formData.append(`photos_${i}`, photos.files[i]);
  }

  fetch("https://example.com/posts", {
  method: "POST",
  body: formData,
  })
  .then((response) => response.json())
  .then((result) => {
      console.log("성공:", result);
  })
  .catch((error) => {
      console.error("실패:", error);
  });
  ```

- Processing a text file line by line

  - 응답에서 읽어오는 데이터 청크는 줄 단위로 깔끔하게 나뉘지 않으며, 문자열도 아니고 Uint8Array
  - 텍스트 파일을 가져와서 줄 단위로 처리하고자 한다면, '줄' 단위로 나누는 작업은 직접 구현해야 함

  ```
  async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  const response = await fetch(fileURL);
  const reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  const re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
      let result = re.exec(chunk);
      if (!result) {
      if (readerDone) {
          break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
      startIndex = re.lastIndex = 0;
      continue;
      }
      yield chunk.substring(startIndex, result.index);
      startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
      // 마지막 줄이 개행 문자로 끝나지 않았을 때
      yield chunk.substr(startIndex);
  }
  }

  async function run() {
  for await (let line of makeTextFileLineIterator(urlOfFile)) {
      processLine(line);
  }
  }

  run();
  ```

- Checking that the fetch was successful
  - fetch() (en-US) 프로미스는 네트워크에 오류가 있었거나, 서버의 CORS 설정이 잘못된 경우 TypeError로 거부
  - 권한 등 설정의 문제고, 404와 같은 응답은 네트워크 오류가 아니므로 거부하지 않음
  - fetch()가 성공했는지를 정확히 알아내려면 promsise의 이행 여부를 확인한 후, Response.ok (en-US) 속성의 값이 true인지도 확인해야 함
  ```
  fetch("flowers.jpg")
  .then((response) => {
      if (!response.ok) {
      throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      return response.blob();
  })
  .then((myBlob) => {
      myImage.src = URL.createObjectURL(myBlob);
  })
  .catch((error) => {
      console.error("fetch에 문제가 있었습니다.", error);
  });
  ```
- Supplying your own request object

  - fetch() 호출에 리소스의 경로를 제공하는 대신, Request() 생성자로 생성한 요청 객체를 인자로 전달 가능

  ```
  const myHeaders = new Headers();

  const myRequest = new Request("flowers.jpg", {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
  });

  fetch(myRequest)
  .then((response) => response.blob())
  .then((myBlob) => {
      myImage.src = URL.createObjectURL(myBlob);
  });
  ```

  - Request() 생성자는 fetch() 메서드와 동일한 매개변수를 받아서 기존에 존재하는 요청 객체를 전달해서 복사본을 생성하는 것도 가능
    `const anotherRequest = new Request(myRequest, myInit);`
  - 요청과 응답 본문은 한 번만 읽을 수 있으므로, 복사본을 생성, 기존에 생성해둔 요청/응답 객체를 다시 사용하되 init 옵션만 교체 가능, 이 때 복사본은 원본의 본문을 읽기 전에 생성

- Headers

  - Headers (en-US) 인터페이스의 Headers() (en-US) 생성자를 사용해서 자신만의 헤더 객체를 생성 가능, 헤더 객체는 이름과 값을 연결하는 간단한 맵

  ```
  const content = "Hello World";
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("Content-Length", content.length.toString());
  myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
  ```

  - 생성자에 2차원 배열이나 객체 리터럴을 전달하는 것으로도 같은 결과

  ```
  const myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
  });
  ```

  - 헤더의 내용을 가지고 오는 방법

  ```
  console.log(myHeaders.has("Content-Type")); // true
  console.log(myHeaders.has("Set-Cookie")); // false
  myHeaders.set("Content-Type", "text/html");
  myHeaders.append("X-Custom-Header", "AnotherValue");

  console.log(myHeaders.get("Content-Length")); // 11
  console.log(myHeaders.get("X-Custom-Header")); // ['ProcessThisImmediately', 'AnotherValue']

  myHeaders.delete("X-Custom-Header");
  console.log(myHeaders.get("X-Custom-Header")); // null
  ```

  - Headers의 모든 헤더 메서드는 유효하지 않은 HTTP 헤더 이름을 받았을 때 TypeError, 변경 메서드는 불변 보호(아래 참고)가 존재하면 TypeError

  ```
  const myResponse = Response.error();
  try {
  myResponse.headers.set("Origin", "http://mybank.com");
  } catch (e) {
  console.log("은행인 척 할 수 없어요!");
  }
  ```

  - 콘텐츠를 파싱하기 전에 유효한 형식인지 확인할 때 헤더 객체를 유용하게 사용

  ```
  fetch(myRequest)
  .then((response) => {
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("앗, JSON이 아닙니다!");
      }
      return response.json();
  })
  .then((data) => {
      /* 데이터 처리 */
  })
  .catch((error) => console.error(error));
  ```

- Guard
  - 헤더는 요청으로 전송할 수도 있고 응답으로 받을 수도 있으며 어떤 정보를 수정할 수 있고 수정할 수 없는지 다양한 제한이 존재하기 때문에, 헤더 객체는 '가드'(guard) 속성을 가짐
  - 가드 속성은 웹에 노출되진 않지만, 헤더 객체에 허용되는 변경 작업의 범위에 영향
  - 가능한 가드 값
    - none : 기본 값
    - request : 요청(Request.headers (en-US))에서 획득한 헤더 객체 보호
    - request-no-cors : Request.mode (en-US)가 no-cors인 요청에서 획득한 헤더 객체 보호
    - response : 응답(Response.headers (en-US))에서 획득한 헤더 객체를 보호
    - immutable: 헤더 객체를 읽기 전용으로 설정, 대부분 서비스 워커에서 사용
- Response objects

  - 위에서 본 바와 같이 Response (en-US) 인스턴스는 fetch() 프로미스가 이행할 때 반환
  - 응답 객체에서 아마 가장 많이 사용하게 될 속성
    - Response.status (en-US) : 상태 코드 값을 담은 정수 값(기본 값은 200)
    - Response.statusText (en-US) : 상태 코드 메시지를 담은 문자열 값 (기본 값은 빈 문자열), 참고로 HTTP/2는 상태 메시지를 지원하지 않음
    - Response.ok (en-US) : 상태 코드가 200 이상 299 이하인지 간단하게 확인할 수 있는 불리언 값
  - 응답 객체는 JavaScript에서 직접 생성할 수도 있지만, 이런 응답은 수신한 요청에 대해 respondWith() 메서드로 직접 응답해야 하는 서비스 워커에서나 활약
  - Response() (en-US) 생성자는 두 개의 선택적 인자, 하나는 응답 본문으로 쓰고, 다른 하나는Request()가 받는 것과 비슷한 옵션 객체

  ```
  const myBody = new Blob();

  addEventListener("fetch", function (event) {
  // fetch를 가로채는 ServiceWorker
  event.respondWith(
      new Response(myBody, {
      headers: { "Content-Type": "text/plain" },
      })
  );
  });
  ```

- Body
  - 요청과 응답 모두 본문 데이터를 포함 가능
  - 본문 데이터는 아래 목록의 유형 중 하나의 인스턴스
    - ArrayBuffer
    - ArrayBufferView (en-US) (Uint8Array 등등)
    - Blob/File
    - 문자열
    - URLSearchParams
    - FormData
  - Request와 Response (en-US) 인터페이스는 본문을 추출할 수 있는 다음의 메서드들을 공유하며, 추출 메서드는 모두 프로미스를 반환하며, 이 프로미스가 실제 본문 데이터로 이행
    - Request.arrayBuffer() (en-US) / Response.arrayBuffer() (en-US)
    - Request.blob() (en-US) / Response.blob() (en-US)
    - Request.formData() (en-US) / Response.formData() (en-US)
    - Request.json() (en-US) / Response.json() (en-US)
    - Request.text() (en-US) / Response.text() (en-US)
  - 본문 추출 메서드들을 사용하면 XHR을 사용할 때보다 더 쉽게 비 텍스트 데이터를 처리 가능, 요청 본문은 body 속성을 설정하는 것으로 추가
  ```
  const form = new FormData(document.getElementById("login-form"));
  fetch("/login", {
      method: "POST",
      body: form,
  });
  ```
  - 요청과 응답, 그리고 더 나아가 fetch() 함수는 본문을 보고 콘텐츠 유형을 알아내려고 시도, 요청은 따로 명시하지 않았으면 Content-Type을 헤더를 자동으로 설정
- Feature detection : Fetch API는 Window나 Worker 스코프에 Headers (en-US), Request, Response (en-US), 또는 fetch() (en-US)의 존재 여부로 지원 여부를 확인
  ```
  if (window.fetch) {
  // fetch로 요청 보내기
  } else {
  // XMLHttpRequest 사용하기?
  }
  ```

**Fetch basic concepts**

**Cross-global fetch usage**

**Headers**

**Request**

**Response**

**fetch()**

---

### (2) [JavaScript Fetch API](https://www.youtube.com/watch?v=-ZI0ea5O2oA)
