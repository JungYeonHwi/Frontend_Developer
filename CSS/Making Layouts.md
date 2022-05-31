# 2. Making Layouts

<목차>

(1) [All about Floats](#1-html-best-practiceshttpsgithubcomhail2uhtml-best-practices)

(2) [Positioning Types: How Do They Differ?]

(3) [The Box Model]

(4) [The CSS Display Property]

---

### (1) [All about Floats](https://css-tricks.com/all-about-floats/)

**What is “Float”?**

- float는 CSS 위치 지정 속성
- 인쇄 레이아웃에서 이미지는 필요에 따라 텍스트가 이미지를 감싸도록 페이지에 설정
- 일반적으로 그리고 적절하게 "text wrap"이라고 불림
- 페이지 레이아웃 프로그램에서 텍스트가 들어 있는 상자는 텍스트 줄 바꿈을 따르도록 지시하거나 무시하도록 지시 가능
- 텍스트 줄 바꿈을 무시하면 단어가 이미지 위에 존재하지도 않은 것처럼 흐를 수 있음
- 이것이 해당 이미지가 페이지 흐름의 일부이거나 그렇지 않은 경우의 차이
- 웹 디자인에서 CSS float 속성이 적용된 페이지 요소는 텍스트가 그 주위에 흐르는 인쇄 레이아웃의 이미지와 같음
- float 요소는 웹 페이지 흐름의 일부
- 이것은 절대적인 위치를 사용하는 페이지 요소와 확연한 차이
- 인쇄 레이아웃의 텍스트 상자에 페이지 랩을 무시하라는 메시지가 표시될 때와 같이 절대적으로 배치된 페이지 요소는 웹 페이지의 흐름에서 제거
- 절대적으로 배치된 페이지 요소는 다른 요소의 위치에 영향을 미치지 않으며, 다른 요소는 서로 접촉하든 그렇지 않든 영향을 미치지 않음
- CSS를 사용하여 요소에 float를 설정하는 것은 다음과 같음

```
#sidebar {
  float: right;
}
```

- float 속성에는 네 가지 유효한 값 존재
  - Left과 Right는 각각 해당 방향으로 요소를 구성
  - None은 (기본값)은 요소가 float하지 않도록 하고 해당 요소의 상위 요소에서 가정하는 상속을 보장
