# 1. Styled Components

<목차>

(1) [Official Website](#1-official-websitehttpsstyled-componentscom)

(2) [Official Docs](#2-official-docshttpsstyled-componentscomdocs)

(3) [Styled Components Crash Course & Project](#3-styled-components-crash-course--projecthttpsyoutube02zo0hzmwnw)

---

### (1) [Official Website](https://styled-components.com/)

**Installation**

- styled-component를 실행하려면 다음 실행

```
npm install --save styled-components
```

**styled component**

- 애플리케이션 전체에서 사용할 수 있는 간편하고 재사용 가능한 `<Button/>` 구성 요소를 생성
- 먼저, styled component를 가져오고 스타일을 생성

```
import styled from 'styled-components'

const Button = styled.button``
```

- 이제 이 Button 변수는 다른 React 구성 요소처럼 사용할 수 있는 React 구성 요소가 됨
- 이러한 unusual backtick 구문은 tagged template literal(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)이라고 하는 새로운 JavaScript 기능
- 괄호로 함수를 호출하여 tagged template literal에 사용 가능
- `<Button />` 꾸미기

```
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
```

- styled-components를 사용하면 실제 CSS를 JavaScript로 작성 가능
- 즉, media queries, all pseudo-selectors, nesting 등을 포함하여 CSS를 사용하고 사랑하는 모든 기능 사용
- 마지막 단계는 기본 단추가 어떻게 표시되는지 정의하는 것
- 이를 위해 styled-components에서 `{css}`를 가져오고 구성 요소의 소품을 전달하는 템플릿 리터럴에 함수를 보간

```
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
```

- 기본 속성이 설정되면 구성 요소에 CSS를 더 추가하고 이 경우 배경과 색상을 변경

```
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`

render(
  <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container>
);
```

---

### (2) [Official Docs](https://styled-components.com/docs)

---

### (3) [Styled Components Crash Course & Project](https://youtu.be/02zO0hZmwnw)
