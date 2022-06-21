# 1. GraphQL

<목차>

(1) [Introduction to GraphQL](#1-introduction-to-graphqlhttpsgraphqlorglearn)

(2) [Learn Responsive Design]

(3) [Introduction To Responsive Web Design]

---

### (1) [Introduction to GraphQL](https://graphql.org/learn/)

**Introduction to GraphQL**

- GraphQL은 API용 쿼리 언어이며 데이터에 대해 정의한 유형 시스템을 사용하여 쿼리를 실행하기 위한 서버 측 런타임
- GraphQL은 특정 데이터베이스나 스토리지 엔진에 연결되지 않으며 대신 기존 코드와 데이터로 뒷받침
- GraphQL 서비스는 해당 유형의 유형과 필드를 정의한 다음 각 유형의 각 필드에 대한 기능을 제공하여 생성
- 예를 들어 로그인한 사용자(me)와 해당 사용자의 이름 을 알려주는 GraphQL 서비스는 다음과 같음

```
type Query {
  me: User
}

type User {
  id: ID
  name: String
}
```

- 각 유형의 각 필드에 대한 기능

```
function Query_me(request) {
  return request.auth.user;
}

function User_name(user) {
  return user.getName();
}
```

- GraphQL 서비스가 실행된 후(일반적으로 웹 서비스의 URL에서), GraphQL 쿼리를 수신하여 유효성을 검사하고 실행 가능
- 서비스는 먼저 쿼리가 정의된 유형과 필드만 참조하는지 확인한 다음 제공된 함수를 실행하여 결과를 생성
- 예를 들어 쿼리는 다음과 같음

```
{
  me {
    name
  }
}
```

- 다음 JSON 결과를 생성 가능

```
{
  "me": {
    "name": "Luke Skywalker"
  }
}
```

**Queries and Mutations**

- 필드

  - GraphQL은 객체의 특정 필드를 요청하는 것

  ```
  # query
  {
  hero {
  name
  }
  }

  # result
  {
  "data": {
  "hero": {
      "name": "R2-D2"
  }
  }
  }
  ```

  - 쿼리가 결과와 정확히 같은 모양을 하고 있음을 즉시 확인 가능 하고 이것은 GraphQL에 필수적
  - 항상 예상한 대로 돌아가고 서버는 클라이언트가 요구하는 필드를 정확히 알고 있기 때문
  - 필드는 name을 String 형태로 반환, 이 경우 스타워즈의 주인공 이름 "R2-D2"
  - 이전 예에서 우리는 문자열을 반환한 영웅의 이름을 요청했지만 필드는 객체를 참조 가능
  - 이 경우 해당 개체에 대한 필드 의 하위 선택 을 만들 수 있음
  - GraphQL 쿼리는 관련 객체와 해당 필드를 순회할 수 있으므로 클라이언트가 고전적인 REST 아키텍처에서 필요로 하는 것처럼 여러 번 왕복하는 대신 한 번의 요청으로 많은 관련 데이터를 가져올 수 있음

    ```
    {
    hero {
    name
    # Queries can have comments!
    friends {
        name
    }
    }
    }

    {
    "data": {
    "hero": {
        "name": "R2-D2",
        "friends": [
        {
            "name": "Luke Skywalker"
        },
        {
            "name": "Han Solo"
        },
        {
            "name": "Leia Organa"
        }
        ]
    }
    }
    }
    ```

  - 이 예에서 friends 필드는 배열의 item을 반환
  - GraphQL 쿼리는 단일 항목 또는 항목 목록 모두에 대해 동일하게 보이지만 스키마에 표시된 내용을 기반으로 예상되는 항목을 알고 있음

- Arguments

  - 우리가 할 수 있는 유일한 것이 객체와 해당 필드를 순회하는 것이라면 GraphQL은 이미 데이터 가져오기에 매우 유용한 언어가 될 것
  - 그러나 필드에 인수를 전달하는 기능을 추가할 수도 있음

  ```
  {
  human(id: "1000") {
    name
    height
   }
  }

  {
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 1.72
    }
   }
  }
  ```

  - REST와 같은 시스템에서는 단일 인수 세트(요청의 쿼리 매개변수 및 URL 세그먼트)만 전달 가능
  - 그러나 GraphQL에서는 모든 필드와 중첩 객체가 고유한 인수 집합을 얻을 수 있으므로 GraphQL을 여러 API 가져오기를 완전히 대체 가능
  - 모든 클라이언트에서 개별적으로가 아니라 서버에서 한 번만 데이터 변환을 구현하기 위해 인수를 스칼라 필드에 전달 가능

  ```
  {
  human(id: "1000") {
    name
    height(unit: FOOT)
   }
  }

  {
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 5.6430448
    }
   }
  }
  ```

  - 인수는 다양한 유형이 될 수 있음
  - METER위의 예에서는 유한한 옵션 집합(이 경우 길이 단위 또는 ) 중 하나를 나타내는 열거형을 사용
  - GraphQL은 기본 유형 세트와 함께 제공되지만 GraphQL 서버는 전송 형식으로 직렬화할 수 있는 한 자체 사용자 정의 유형을 선언 가능
