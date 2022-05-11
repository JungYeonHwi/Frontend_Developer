# 1. Package Managers

<목차>

(1) [Modern JavaScript for Dinosaurs](#1-w3schools-learn-htmlhttpswwww3schoolscomhtmlhtmlintroasp)
(2) [An Absolute Beginner's Guide to Using npm](#2-html-full-course---build-a-website-tutorialhttpswwwyoutubecomwatchvpqn-pnxpavg)
(3) [NPM tutorial for Beginners](#3-html-tutorial-for-beginners-html-crash-coursehttpswwwyoutubecomwatchvqz0agyrrlhu)
(4) [NPM Crash Course](#4-build-15-javascript-projects---vanilla-javascripthttpswwwyoutubecomwatchv3phxvlpokf4)
(5) []

---

### (1) [Modern JavaScript for Dinosaurs](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)

**Using JavaScript the "old-school" way**

- HTML과 JavaScript를 사용하는 "구식" 웹 사이트부터 시작하면, 이것은 수동으로 파일을 다운로드하고 연결하는 것을 포함
- 다음은 자바스크립트 파일로 연결되는 간단한 index.html 파일

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Example</title>
  **<script src="index.js"></script>**
</head>
<body>
  <h1>Hello from HTML!</h1>
</body>
</html>
```

- `<script src="index.js"></script>` 행은 index.js라는 동일한 디렉터리에 있는 별도의 JavaScript 파일을 참조

```
// index.js
console.log("Hello from JavaScript!");
```

- moment.js(사람이 읽을 수 있는 방식으로 날짜를 포맷하는 데 도움이 되는 라이브러리)와 같은 다른 사용자가 작성한 라이브러리를 추가하는 경우, 예를 들어, 다음과 같이 JavaScript에서 모멘트 함수를 사용할 수 있음

```
moment().startOf('day').fromNow();        // 20 hours ago
```

- 그러나 이것은 단지 당신이 당신의 웹사이트에 moment.js를 포함한다고 가정하는 것임
- 'homepage for moment.js'(https://momentjs.com/)에서 다음 지침 확인 가능
- 같은 디렉터리에 moment.min.js 파일을 다운로드하고 index.html 파일에 포함시키면 웹사이트에 moment.js를 추가 가능

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example</title>
  <link rel="stylesheet" href="index.css">
  <script src="moment.min.js"></script>
  <script src="index.js"></script>
</head>
<body>
  <h1>Hello from HTML!</h1>
</body>
</html>
```

- moment.min.js는 index.js보다 먼저 로드되므로 다음과 같이 index.js의 moment 함수를 사용 가능
- 자바스크립트 라이브러리로 웹사이트를 만드는 방법임
- 좋은 점은 충분히 이해하기 쉬운 것이지만, 나쁜 점은 업데이트될 때마다 새로운 버전의 라이브러리를 찾아서 다운로드하는 것이 귀찮다는 것임
