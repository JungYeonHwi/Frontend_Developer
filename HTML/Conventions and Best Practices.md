# 4. Conventions and Best Practices

<목차>

(1) [HTML Best Practices](#1-html-best-practiceshttpsgithubcomhail2uhtml-best-practices)

---

### (1) [HTML Best Practices](https://github.com/hail2u/html-best-practices)

**공통**

- DOCTYPE은 표준 모드를 활성화하기 위해 필요함

```
<!DOCTYPE html>
<html>
  ...
</html>
```

- XML 선언을 쓰지 않기

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE html>
```

=> 다음과 같이 쓰지 않는 것을 지양

- 문자 레퍼런스를 가능한 한 사용하지 말기
- HTML문서를 UTF-8로 작성하고 있다면, 대부분의 문자(이모티콘 포함)를 직접적으로 쓰기 가능

```
<p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
```

- 버그가 없는 HTML 문서를 만들기 위해서 `&`, `<`, `>`, `"`, `'`를 문자 레퍼런스로 변환하기

```
<h1>The &quot;&amp;&quot; character</h1>
```

- 제어 문자나 보이지 않는 문자를 제어하기 위해 숫자 문자 레퍼런스를 사용하기
- spec은 이러한 문자에 대해 사람이 읽을 수 있는 이름을 정의하는 걸 보장하지 않음

```
<p>This book can read in 1&#xA0;hour.</p>
```

- 주석 내용 주위에 공백을 넣기
- 일부 문자는 주석의 여는 태그 바로 뒤나 닫는 태그 바로 앞에 붙어서 넣을 수 없음

```
<!-- This section is non-normative -->
```

- 닫기 태그 생략하지 않기

```
<html>
  <body>
    ...
  </body>
</html>
```

- 빈 요소 포맷 섞지 않기

```
<img alt="HTML Best Practices" src="/img/logo.png">
<hr>
```

- 태그 및 속성 값 사이에 공백문자 넣지 않기

```
<h1 class="title">HTML Best Practices</h1>
```

- 대소문자 섞지 않기

```
<a href="#general">General</a>
```

혹은

```
<A HREF="#general">General</A>
```

- 인용 부호 섞지 않기

```
<img alt="HTML Best Practices" src="/img/logo.jpg">
```

- 속성을 두 개 이상의 공백 문자로 나누지 않기

```
<input name="q" type="search">
```

- boolean 속성값 생략

```
<audio autoplay src="/audio/theme.mp3">
```

- 네임스페이스 생략 (HTML 문서에서 SVG와 MathML은 바로 쓰기 가능)

```
<svg>
  ...
</svg>
```

- XML 속성 쓰지 않기

```
<span lang="ja">...</span>
```

- `data-*`, 마이크로데이터, RDFa Lite 속성을 일반 속성과 섞어쓰지 않기

```
<img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">
```

- 기본 암시적 ARIA 시맨틱을 사용

```
<nav>
  ...
</nav>

<hr>
```

**루트 요소**

- `lang` 속성 추가

```
<html lang="en-US">
```

- `lang` 속성을 가능하면 짧게 하기

```
<html lang="ja">
```

- `data-*`을 가능한 한 없애기

```
<span title="French"><span lang="fr">chemises</span></span>
...
<strong class="warning">Do not wash!</strong>
```

**문서 메타데이터**

- `title` 넣기

```
<head>
  <meta charset="UTF-8">
  <title>HTML Best Practices</title>
</head>
```

- `base` 요소 쓰지 않기 : 절대 경로나 URL은 개발자와 유저 모두에게 안전

```
<head>
  ...
  <link href="/blog/hello-world" rel="canonical">
  ...
</head>
```

- 마이너한 링크 리소스에 MIME 타입 정의

```
<link href="/pdf" rel="alternate" type="application/pdf">
<link href="/feed" rel="alternate" type="application/rss+xml">
<link href="/css/screen.css" rel="stylesheet">
```

- 대부분의 브라우저에서 `/favicon.ico`를 자동으로 비동기방식으로 가져오기 때문에 링크하지 않기
- 대체 스타일시트에 `title` 속성 넣기

```
<link href="/css/screen.css" rel="stylesheet">
<link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">
```

- URL을 위해서 `link` 요소 쓰기

```
<section itemscope itemtype="http://schema.org/BlogPosting">
  <link href="/blog/hello" itemprop="url">
  ...
</section>
```

- 문서의 문자 인코딩 정의

```
<head>
  <meta charset="UTF-8">
  <title>HTML Best Practices</title>
</head>
```

- 레거시 인코딩 포맷 사용하지 않기

```
<meta charset="UTF-8">
```

- 문자 인코딩을 처음으로 선언하기

```
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width" name="viewport">
  ...
</head>
```

- UTF-8 사용하기

```
<meta charset="UTF-8">
```

- CSS를 위한 `type` 속성 생략 -> style 요소의 기본 type은 text/css

```
<style>
  ...
</style>
```

- `style` 요소의 내용을 주석 처리 하지 않기

```
<style>
  ...
</style>
```

- CSS와 JS 태그를 섞지 않기

```
<link href="/css/screen.css" rel="stylesheet">
<script src="/js/jquery.min.js"></script>
<script src="/js/main.js"></script>
```

혹은

```
<script src="/js/jquery.min.js"></script>
<script src="/js/main.js"></script>
<link href="/css/screen.css" rel="stylesheet">
```

**섹션**

- `body` 요소 넣기

```
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

- `hgroup` 요소 잊기

```
<h1>HTML Best Practices</h1>
<p>For writing maintainable and scalable HTML documents.</p>
```

- `address` 요소는 이메일 주소, 소셜 네트워크 계정, 주소, 전화번호 등 직접 연락할 수 있는 항목에서만 사용하기

```
<h1>HTML Best Practices</h1>
<p>For writing maintainable and scalable HTML documents.</p>
```

**그룹 콘텐츠**

- `pre` 요소에서 새 줄로 시작하지 않기, 첫 번째 줄바꿈은 무시되지만, 두 번재 줄바꿈부터는 렌더링 됨

```
<pre>&lt;!DOCTYPE html&gt;
</pre>
```

- `blockquote` 요소에 적절한 요소 쓰기

```
<blockquote>
  <p>For writing maintainable and scalable HTML documents.</p>
</blockquote>
```

- `blockquote` 요소 안에 직접 포함하지 않기

```
<blockquote>
  <p>For writing maintainable and scalable HTML documents.</p>
</blockquote>

<p>— HTML Best Practices</p>
```

- 한 줄에 한 리스트 아이템 쓰기

```
<ul>
  <li>General</li>
  <li>The root Element</li>
  <li>Sections</li>
  ...
</ul>
```

- `ol` 요소에 `type` 속성 쓰기

```
<body>
  <ol type="I">
    <li>General</li>
    <li>The root Element</li>
    <li>Sections</li>
    ...
  </ol>
</body>
```

- 다이얼로그를 위해 `dl` 쓰지 않기

```
<p>Costello: Look, you gotta first baseman?</p>
<p>Abbott: Certainly.</p>
<p>Costello: Who’s playing first?</p>
<p>Abbott: That’s right.</p>
<p>Costello becomes exasperated.</p>
<p>Costello: When you pay off the first baseman every month, who gets the money?</p>
<p>Abbott: Every dollar of it.</p>
```

- `figcaption` 요소를 `figure` 요소의 첫째 또는 마지막 자식 요소로 쓰기

```
<figure>
  <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
  <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
  <figcaption>“HTML Best Practices” Cover Art</figcaption>
</figure>
```

- `main` 요소 쓰기

```
<main>
  ...
</main>
```

- `div` 요소를 가능한 많이 없애기

```
<section>
  ...
</section>
```

**Text-level 시맨틱**

- 그룹 가능한 동일 링크 분리하지 않기

```
<a href="https://whatwg.org/">
  <h1>WHATWG</h1>

  <p>A community maintaining and evolving HTML since 2004.</p>
</a>
```

- 리소스를 다운하고자 할 대 `download` 속성 사용하기

```
<a download href="/downloads/offline.zip">offline version</a>
```

- 필요하다면 `rel`, `hreflang`, `type` 속성 사용하기

```
<a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>
```

- 링크 텍스트는 연결된 리소스의 레이블이어야 하기 때문에 명확하게 해야 함

```
<p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>
```

- 경고나 주의를 위해 `em`을 사용하지 않기

```
<strong>Caution!</strong>
```

- `s`, `i`, `b`, `u` 요소를 가능한 없애기

```
<span class="icon-search" aria-hidden="true"></span>
```

- `q` 요소에 따옴표 넣지 않기

```
<q>For writing maintainable and scalable HTML documents</q>
```

혹은

```
“For writing maintainable and scalable HTML documents”
```

- `abbr` 요소에 `title` 속성 쓰기

```
<abbr title="HTML Best Practices">HBP</abbr>
```

- `ruby` 요소를 자세히 마크업

```
<ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>
```

- 기계가 읽을 수 없는 `time` 요소에 `datetime` 속성 추가하기

```
<time datetime="2014-12-19">Dec 19, 2014</time>
```

- `class` 속성 접두어로 `language-`를 넣어 code 언어로 정의

```
<code class="language-html">&lt;!DOCTYPE html&gt;</code>
```

- `kbd` 요소를 가능한 단순하게 하기

```
<kbd>Ctrl+F5</kbd>
```

- `span` 요소를 가능한 많이 제거하기

```
HTML <em>Best</em> Practices
```

- `br` 요소를 사용하여 줄바꿈하는 것이 좋음

```
<p>HTML<br>
Best<br>
Practices</p>
```

- `br` 요소를 내용 라인 구분을 위해 사용하기

```
<p><label>Rule name: <input name="rule-name" type="text"></label></p>
<p><label>Rule description:<br>
<textarea name="rule-description"></textarea></label></p>
```

**에디트**

- `ins`와 `del` 요소로 다른 요소를 뛰어 넘지 않기

```
<p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

<del><p>Don’t trust!</p></del>
```

**Embedded 내용**

- `picture` 요소의 폴백으로 `img` 요소 제공

```
<picture>
  <source srcset="/img/logo.webp" type="image/webp">
  <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
  <source srcset="/img/logo.jp2" type="image/jp2">
  <img src="/img/logo.jpg">
</picture>
```

- `img` 요소에 `alt` 속성 추가 (`alt` 속성은 이미지를 처리할 수 없거나 불러오지 못하였을 때 도움)

```
<img alt="HTML Best Practices" src="/img/logo.png">
```

- 가능한 경우 `alt` 속성 비워두기

```
<img alt="" src="/img/icon/help.png"> Help
```

- 가능한 경우 `alt` 속성 생략하기
- spec에서 `alt` 속성은 특수한 케이스가 아니라면 필수 속성이므로 빈값으로 넣어주기

```
<img src="captcha.cgi?id=82174" title="CAPTCHA">
(If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)
```

- `iframe` 요소를 비워두기

```
<iframe src="/ads/default.html"></iframe>
```

- `map` 요소 콘텐츠도 마크업하기

```
<map name="toc">
  <p>
    <a href="#general">General</a>
    <area alt="General" coords="0, 0, 40, 40" href="#General"> |
    <a href="#the_root_element">The root element</a>
    <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
    <a href="#sections">Sections</a>
    <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
  </p>
</map>
```

- `audio`나 `video` 요소를 위한 폴백 콘텐츠 제공

```
<video>
  <source src="/mov/theme.mp4" type="video/mp4">
  <source src="/mov/theme.ogv" type="video/ogg">
  ...
  <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
</video>
```

**테이블 데이터**

- 한 줄에 한 셀만 작성

```
<tr>
  <td>General</td>
  <td>The root Element</td>
  <td>Sections</td>
</tr>
```

- `th` 요소를 헤더 셀로 사용하기

```
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Empty</th>
      <th>Tag omission</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>pre</code></th>
      <td>No</td>
      <td>Neither tag is omissible</td>
    </tr>
    <tr>
      <th><code>img</code></th>
      <td>Yes</td>
      <td>No end tag</td>
    </tr>
  </tbody>
</table>
```

**폼**

- 폼 컨트롤을 `label` 요소로 감싸기

```
<p><label>Query: <input name="q" type="text"></label></p>
```

- 가능한 경우 `for` 속성 생략하기

```
<label>Query: <input name="q" type="text"></label>
```

- `input` 요소에 적절한 `type` 속성 사용하기

```
<label>Search keyword: <input name="q" type="search"></label>
```

- `input type="submit"`에 `value` 속성 넣기

```
<input type="submit" value="Search">
```

- `input` 요소에 `pattern` 속성이 있는 경우 `title` 속성 추가하기

```
<input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">
```

- 레이블하기 위해 `placeholder` 속성 쓰지 않기

```
<label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>
```

- 한 줄에 한 `option` 요소만 사용하기

```
<datalist id="toc">
  <option label="General">
  <option label="The root element">
  <option label="Sections">
</datalist>
```

- `progress` 요소에 `max` 속성 추가하기

```
<progress max="100" value="50"> 50%</progress>
```

- `meter` 요소에 `min`, `max` 속성 추가하기

```
<meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>
```

- `legend` 요소를 `fieldset` 요소의 첫 번째 자식으로 사용하기

```
<fieldset>
  <legend>About "General"</legend>
  <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
  ...
</fieldset>
```

**스크립트**

- JS를 위한 `tyle` 속성 생략

```
<script>
  ...
</script>
```

- `script` 요소의 내용 주석처리 하지 않기

```
<script>
  ...
</script>
```

- 스크립트가 삽입된 `script` 요소 사용하지 않기

```
<script async defer src="https://example.com/widget.js"></script>
```

**기타**

- 일관된 들여쓰기

```
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

- 내부 링크에 절대 경로 사용하기

```
<link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
...
<p>You can find more at <a href="/contact.html">contact page</a>.</p>
```

- 외부 리소스에 프로토콜 관련 URL 사용하지 않기

```
<script src="https://example.com/js/library.js">
```
