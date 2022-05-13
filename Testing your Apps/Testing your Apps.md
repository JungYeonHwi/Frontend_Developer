# 1. Testing your Apps

<목차>

(1) [A comprehensive dive into software testing.](#1-official-websitehttpsstyled-componentscom)

---

### (1) [A comprehensive dive into software testing.](https://www.softwaretestingmaterial.com/software-testing/)

**What is Software Testing**

- 소프트웨어 테스트는 개발된 소프트웨어가 지정된 요구 사항을 충족하는지 여부를 찾고 품질 좋은 제품을 생산하기 위해 결함이 없는지 확인하기 위해 소프트웨어 애플리케이션의 기능을 평가하는 과정
- 표준 정의, 수동 테스트 및 자동화 테스트와 같은 테스트 유형, 테스트 방법, 테스트 방법 및 블랙박스 테스트 유형 확인하기

**Definition of Software Testing**

- ANSI/IEEE 1059 표준에 따라 소프트웨어 항목을 분석하여 기존 조건과 필요한 조건 간의 차이(즉, 결함)를 탐지하고 소프트웨어 항목의 특징을 평가하는 프로세스

**Why do we need Software Testing?**

- 개발된 소프트웨어가 지정된 요구 사항을 충족하는지 여부를 찾고, 품질 좋은 제품을 생산하기 위해 결함이 없음을 보장하기 위해 결함을 식별하려는 의도를 가지고 소프트웨어 애플리케이션의 기능을 평가하는 것

**What if there is no Software Testing in the Software Development Process**

- 현재 추세대로, 디지털화의 끊임없는 변화와 발전으로 인해, 우리의 삶은 모든 분야에서 향상되고 있음
- 예를 들어, 우리는 은행에 온라인으로 접속하고, 온라인으로 쇼핑을 하고, 온라인으로 음식을 주문하고, 그 외 더 많은 것들을 수행, 우리는 소프트웨어와 시스템에 의존
- 만약 이 시스템들이 결함이 있는 것이라면 모두 하나의 작은 버그가 재정적 손실과 영업권 측면에서 사업에 큰 영향을 미친다는 것을 알고 있음
- 고품질 제품을 제공하려면 소프트웨어 개발 프로세스에서 테스트를 거쳐야 함
- 시험이 정보 기술 분야에서 매우 중요하고 필수적인 부분이 되는 이유 중 일부는 다음과 같음
  - Cost-effectiveness
    - 사실, 어떤 복잡한 시스템에 대해서도 설계 결함을 완전히 배제할 수는 없음
    - 개발자들이 부주의해서가 아니라 시스템의 복잡성이 다루기 어렵기 때문
    - 설계 문제가 발견되지 않으면 결함을 추적하고 수정하기가 더 어려워 질 것이며, 그것을 고치는 것은 더 비싸질 것임
    - 때로는 한 버그를 수정하는 동안 자신도 모르게 다른 버그를 다른 모듈에 도입 가능
    - 개발 초기 단계에서 버그를 식별할 수 있다면 버그를 수정하는 데 훨씬 적은 비용 소모
    - 소프트웨어 개발 라이프사이클의 초기 단계에서 결함을 찾는 것이 중요한 이유
    - 테스트의 이점 중 하나는 비용 효율성
    - 시험을 일찍 시작하여 소프트웨어 개발 수명 주기의 모든 단계에서 도입하는 것이 좋으며, 애플리케이션이 요구 사항에 따라 개발되는지 확인하기 위해 정기적인 시험이 필요
  - Customer Satisfaction
    - 모든 비즈니스에서 궁극적인 목표는 최상의 고객 만족을 제공하는 것
    - 소프트웨어 테스트는 애플리케이션의 사용자 경험을 개선하고 고객에게 만족감 제공
    - 행복한 고객은 기업의 더 많은 수익을 의미
  - Security
    - 이것은 아마도 테스트에서 가장 민감하고 취약한 부분
    - 테스트(침투 테스트 및 보안 테스트)는 제품 보안에 도움
    - 해커는 데이터에 대한 무단 액세스 권한을 얻음
    - 이 해커들은 사용자 정보를 훔쳐서 그들의 이익을 위해 사용
    - 제품이 보안되지 않으면 사용자가 제품을 선호하지 않음
    - 사용자는 항상 신뢰할 수 있는 제품을 찾음
    - 테스트는 제품의 취약성을 제거하는 데 도움
  - Product Quality
    - 소프트웨어 테스트는 요구 사양 문서에 언급된 것처럼 고객에게 양질의 제품을 제공하여 기업의 시장 평판 강화에 도움이 되는 기술
    - 이러한 이유로 인해 소프트웨어 테스트는 소프트웨어 개발 프로세스에서 매우 중요하고 필수적인 부분

**What are the different types of Software Testing?**

- Manual Testing
  - Manual Testing은 소프트웨어를 직접 테스트하여 소프트웨어에 대해 자세히 알아보고 작동 중인 것과 작동하지 않는 것을 찾는 프로세스
  - 여기에는 일반적으로 요구사항 문서에 명시된 모든 기능 확인이 포함되지만, 종종 최종 사용자의 관점에서 소프트웨어를 시험하는 검사자도 포함
  - Manual Testing 계획은 완전히 작성된 테스트 사례에서 시험관이 상세한 단계와 예상 결과를 제공하며, 탐색적 테스트 세션을 조정하는 높은 수준의 가이드까지 다양
  - 시장에는 Manual Testing을 지원하는 정교한 도구가 많이 있지만 간단하고 유연한 시작 방법을 원한다면 테스트 패드를 혹인해야 함
- Automation Testing
  - Automation Testing은 결함을 찾기 위해 자동화 도구를 사용하여 소프트웨어를 테스트하는 프로세스
  - 이 프로세스에서 테스터는 테스트 스크립트를 실행하고 자동화 도구를 사용하여 테스트 결과를 자동으로 생성
  - 기능 테스트를 위한 유명한 자동화 테스트 도구로는 Selenium과 Katalon Studiork 존재
  - Selenium은 더 이상 웹 애플리케이션 테스터들에게 낯선 이름이 아님
  - 크로스 브라우저 테스트와 같은 강력한 기능을 제공하지만, 자동화에 처음 참여하거나 프로그래밍 경험이 제한된 사용자에게는 배우기 어려움
  - 이러한 이유로 대부분의 QA 신입사원 및 Manual Testing는 Katalon Studio에서 시작
  - Selenium의 기본 기능을 제공하면서도 간단한 UI, 내장 키워드, 녹음/재생 기능을 활용하여 테스트 케이스를 쉽게 만들고 스크립트 모드(자바와 그루비 지원)와 함께 프로그래밍 기술을 습득 가능

**Testing Methods**

- Static Testing
  - 소프트웨어 테스트에서의 검증이라고도 함
  - 확인은 문서와 파일을 확인하는 정적 방법
  - 검증은 우리가 제품을 제작하고 있는지, 즉 우리가 가지고 있는 요구 사항을 검증하고 그에 따라 제품을 개발하고 있는지 여부를 확인하는 과정
  - 여기와 관련된 활동은 Inspections, Reviews, Walkthroughs
- Dynamic Testing
  - 소프트웨어 테스트의 유효성 검사라고도 함
  - 검증은 실제 제품을 테스트하는 동적 프로세스
  - 검증은 우리가 올바른 제품을 만들고 있는지 여부, 즉 우리가 개발한 제품이 맞는지 아닌지를 검증하는 과정
  - 이와 관련된 활동은 소프트웨어 애플리케이션(데스크탑 애플리케이션, 웹 애플리케이션, 모바일 애플리케이션) 테스트

**Testing Approaches**

- White Box Testing
  - 유리 상자, 투명 상자, 구조 시험이이라고도 함
  - White Box Testing은 응용 프로그램의 내부 코드 구조를 기반
  - White Box Testing에서는 시스템의 내부 관점뿐만 아니라 프로그래밍 기술이 테스트 케이스를 설계하는 데 사용
  - 이 테스트는 일반적으로 장치 수준에서 수행
- Black Box Testing
  - 행동/규격 기반/입출력 테스트라고도 함
  - Black Box Testing은 테스터가 내부 코드 구조를 살피지 않고 테스트 대상 소프트웨어의 기능을 평가하는 소프트웨어 테스트 방식
- Grey Box Testing
  - White Box와 Black Box Testing의 조합
  - 이러한 유형의 테스트에서 작업하는 테스터는 설계 문서에 대한 액세스 권한이 있어야 함
  - 이는 이 프로세스에서 더 나은 테스트 사례를 만드는 데 도움
- 사용자가 Black Box, White Box, Grey Box Tester에 관계없이 사용할 수 없음
- 소프트웨어 공학에서의 소프트웨어 테스트로 인한 프로젝트의 성공은 큰 역할

**Testing Levels**

- Unit Testing
  - 소스 코드의 개별 모듈이 정상적으로 동작하고 있는지, 즉 개발자가 개발자의 환경에서 어플리케이션의 각 유닛을 개별적으로 테스트하는 것을 목적
  - AKA 모듈 테스트 또는 구성 요소 테스트
- Integration Testing
  - 몇 개의 유닛 테스트 모듈 간의 연결 또는 데이터 전송을 테스트하는 프로세스
  - 그것은 AKA I&T Testing 또는 String Testing
  - 그것은 하향식 접근법, 상향식 접근법, 그리고 샌드위치 접근법(상향식 및 상향식의 조합)으로 세분
- System Testing
  - 블랙박스 테스트
  - 완전히 통합된 애플리케이션을 테스트하는 것을 end to end scenario 테스트라고도 함
  - 소프트웨어가 의도한 모든 대상 시스템에서 작동하는지 확인\
  - 응용 프로그램의 모든 입력에 대한 철저한 테스트를 수행하여 원하는 출력을 확인
  - 응용 프로그램에 대한 사용자 경험 테스트
- Acceptance Testing : 소프트웨어 제공 및 지급을 받을 수 있도록 고객 승인 획득 합격 검사의 유형은 알파, 베타 및 감마 검정

**Types of Black Box Testing**

- Functionality Testing
  - 간단히 말해서, 시스템이 실제로 수행하는 것은 Functionality Testing
  - 소프트웨어 응용 프로그램의 각 기능이 요구 사항 문서에 지정된 대로 작동하는지 확인
  - 실제 출력이 예상 출력과 일치하는지 확인하기 위해 적절한 입력을 제공하여 모든 기능을 테스트
  - 그것은 블랙박스 테스트의 범위에 속하며 테스터는 애플리케이션의 소스 코드에 대해 걱정할 필요가 없음
- Non-functionality Testing
  - 간단히 말해서, 시스템이 얼마나 잘 수행하느냐는 Non-functionality Testing
  - 비기능 테스트란 소프트웨어의 성능, 부하, 스트레스, 확장성, 보안, 호환성 등 다양한 측면
  - 주요 초점은 시스템이 요청에 응답하는 속도에 대한 사용자 환경을 개선하는 것
- 테스트 유형은 100가지가 넘음

**Testing Artifacts**

- Testing Artifacts는 소프트웨어 프로젝트의 이해 관계자에게 제공되는 결과물
- SDLC를 따르는 소프트웨어 프로젝트는 고객에게 제공하기 전에 여러 단계를 거침
- 이 과정에서 모든 단계에서 몇 가지 성과물이 있을 것이고, 성과물 중 일부는 시험 단계가 시작되기 전에 제공되고 일부는 시험 단계 중에 제공되며 나머지는 시험 단계가 완료된 후에 제공
- 테스트 결과물 중 일부
  - Test plan
  - Test case
  - Traceability matrix
  - Test script
  - Test suite
  - Release Note
  - Test data or Test Fixture
  - Test harness

**Principles of Software Testing**

- 프로젝트를 테스트하는 동안 중요한 역할을 하는 몇 가지 원칙으로 구성
- Testing shows the presence of defects
- Exhaustive testing is impossible
- Early testing
- Defect clustering
- Pesticide paradox
- Testing is context-dependent
- Absence of error – a fallacy
