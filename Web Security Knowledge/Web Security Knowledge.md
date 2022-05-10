# 1. Web Security Knowledge

<목차>

(1) [Why HTTPS Matters](#1-why-https-mattershttpswwww3schoolscomcsscssintroasp)

(2) [Wikipedia - OWASP](#2-wikipedia---owasphttpsenwikipediaorgwikiowasp)

(3) [HTML Tutorial for Beginners: HTML Crash Course](#3-html-tutorial-for-beginners-html-crash-coursehttpswwwyoutubecomwatchvqz0agyrrlhu)

(4) [How does the Internet work?](#4-build-15-javascript-projects---vanilla-javascripthttpswwwyoutubecomwatchv3phxvlpokf4)

---

### (1) [Why HTTPS Matters](https://web.dev/why-https-matters/)

**HTTPS protects the integrity of your website**

- HTTPS는 웹 사이트의 무결성을 보호
- HTTPS는 침입자가 웹 사이트와 사용자의 브라우저 간의 통신을 변조하는 것을 방지
- 침입자에는 의도적으로 악의적인 공격자와 페이지에 광고를 주입하는 ISP 또는 호텔과 같이 합법적이지만 침입적인 회사가 포함
- 침입자는 보호되지 않은 통신을 이용하여 사용자를 속여 중요한 정보를 포기하게 하거나 악성 프로그램을 설치하게 하거나 자신의 광고를 리소스에 삽입
- 예를 들어 일부 타사에서는 사용자 경험을 손상시키고 보안 취약성을 발생시키는 광고를 웹 사이트에 주입
- 침입자는 웹 사이트와 사용자 사이를 이동하는 모든 보호되지 않은 리소스를 공격
- 이미지, 쿠키, 스크립트, HTML 등 모두 악용 가능
- 침입은 사용자 컴퓨터, Wi-Fi 핫스팟 또는 손상된 ISP를 포함하여 네트워크의 어느 지점에서나 발생

**HTTPS protects the privacy and security of your users**

- HTTPS로 사용자의 개인 정보 보호 및 보안 보호
- HTTPS는 침입자가 웹 사이트와 사용자 간의 통신을 수동적으로 청취할 수 없도록 함
- HTTPS에 대한 일반적인 오해 중 하나는 HTTPS가 필요한 웹 사이트는 민감한 통신을 처리하는 웹 사이트뿐이라는 것임
- 보호되지 않는 모든 HTTP 요청은 잠재적으로 사용자의 동작 및 ID에 대한 정보를 표시할 수 있음
- 보호되지 않은 웹 사이트 중 하나를 한 번 방문하면 문제가 없어 보일 수 있지만 일부 침입자는 사용자의 전체 검색 활동을 보고 사용자의 동작과 의도를 추론하고 사용자의 ID의 익명성을 해제
- 예를 들어, 직원들은 보호되지 않은 의료 기사를 읽는 것만으로 부주의하게 민감한 건강 상태를 고용주에게 공개 가능

**HTTPS is the future of the web**

- getUserMedia()로 사진을 찍거나 오디오를 녹음하거나, 서비스 직원과 오프라인 앱 경험을 가능하게 하거나, 진보적인 웹 앱을 구축하는 것과 같은 강력하고 새로운 웹 플랫폼 기능은 실행하기 전에 사용자의 명시적인 권한이 필요
- Geolocation API와 같은 많은 오래된 API도 실행 권한이 필요하도록 업데이트되고 있음
- HTTPS는 이러한 새로운 기능과 업데이트된 API 모두에 대한 권한 워크플로우의 핵심 구성요소

### (2) [Wikipedia - OWASP](https://en.wikipedia.org/wiki/OWASP)

- Open Web Application Security Project(OWASP)는 웹 애플리케이션 보안 분야에서 자유롭게 이용할 수 있는 문서, 방법론, 문서, 도구 및 기술을 생산하는 온라인 커뮤니티
- OWASP(Open Web Application Security Project)는 무료 및 개방형 리소스를 제공
- 그것은 OWASP 재단이라고 불리는 비영리 단체가 이끌고 있음
- OWASP Top 10 - 2021은 40개 이상의 파트너 기관에서 수집한 포괄적인 데이터를 기반으로 한 최근 연구 결과

**History**

- Mark Curphey는 2001년 9월 9일 OWASP-오픈 웹 애플리케이션 보안 프로젝트를 시작
- Jeff Williams는 2003년 말부터 2011년 9월까지 OWASP의 자원봉사 회장을 역임했고, 2015년 현재 맷 콘다가 이사회 의장을 맡고 있음
- 2004년에 설립된 미국의 501(c)(3) 비영리 단체인 OWASP 재단은 OWASP 인프라와 프로젝트를 지원, 2011년부터 OWASP는 벨기에에서 OWASP Europe VZW라는 이름으로 비영리 단체로 등록되어 있음

**Publications and resources**

- OWASP 상위 10개
  - 2003년에 처음 출판된 "Top Ten"은 정기적으로 업데이트됨
  - 조직이 직면한 가장 중요한 위험 중 일부를 파악하여 애플리케이션 보안에 대한 인식을 높이는 것을 목표로 함
  - MITRE, PCI DSS, DISA-STIG(DISA-STIG) 및 미국 연방무역위원회(FTC)를 포함한 많은 표준, 서적, 도구 및 많은 조직이 상위 10개 프로젝트를 참조
- OWASP 소프트웨어 보증 성숙도 모델
  - SAMM(소프트웨어 보증 성숙도 모델) 프로젝트는 조직이 직면한 특정 비즈니스 위험에 맞게 조정된 애플리케이션 보안 전략을 수립 및 구현할 수 있는 사용 가능한 프레임워크를 구축하는 데 주력
- OWASP 개발 가이드
  - 개발 가이드는 실제 지침을 제공하며 J2EE, ASP를 포함
  - .NET 및 PHP 코드 샘플. 개발 가이드는 SQL 주입에서 피싱, 신용카드 처리, 세션 고정, 사이트 간 요청 위조, 규정 준수 및 개인 정보 보호 문제와 같은 현대의 문제에 이르기까지 광범위한 애플리케이션 레벨 보안 문제를 다룸
- OWASP 테스트 가이드
  - OWASP 테스트 가이드에는 사용자가 자신의 조직에서 구현할 수 있는 "best practice" 침투 테스트 프레임워크와 가장 일반적인 웹 애플리케이션 및 웹 서비스 보안 문제를 테스트하는 기술을 설명하는 "low level" 침투 테스트 가이드가 포함
  - 버전 4는 2014년 9월에 출판되었으며 60명의 의견을 받음
- OWASP 코드 검토 가이드
  - 코드 검토 가이드는 현재 2017년 7월에 출시된 버전 2.0에 있음
- OWASP Application Security Verification Standard(ASVS)
  - 애플리케이션 수준의 보안 검증을 수행하기 위한 표준
- OWASP XML 보안 게이트웨이(XSG) 평가 기준 프로젝트
- OWASP 상위 10대 사고 대응 지침
  - 이 프로젝트는 사고 대응 계획에 대한 사전 예방적 접근 방식을 제공
  - 이 문서의 대상 독자는 보안 엔지니어, 개발자, 감사, 프로그램 관리자, 법 집행 및 법률 위원회에 이르기까지 비즈니스 소유자를 포함
- OWASP ZAP 프로젝트
  - ZAP(Zed Attack Proxy)는 웹 애플리케이션의 취약성을 찾기 위해 사용하기 쉬운 통합 침투 테스트 도구
  - 침투테스트를 처음 하는 개발자, 기능테스터 등 폭넓은 보안경험을 가진 사람들이 사용할 수 있도록 설계됨
- Webgoat
  - OWASP가 안전한 프로그래밍 관행을 위한 지침으로 만든 의도적으로 안전하지 않은 웹 응용 프로그램
  - 일단 다운로드되면, 그 애플리케이션은 학생들에게 코드를 안전하게 작성하는 방법을 가르칠 목적으로 취약점을 이용하는 방법을 지시하는 튜토리얼과 일련의 다른 수업과 함께 제공
- OWASP AppSec 파이프라인
  - 애플리케이션 보안(AppSec) Rugged DevOps Pipeline Project는 애플리케이션 보안 프로그램의 속도와 자동화를 높이는 데 필요한 정보를 찾는 곳
  - AppSec Pipeline은 DevOps와 Lean의 원리를 응용하여 응용 프로그램 보안 프로그램에 적용
- OWASP 웹 애플리케이션에 대한 자동화된 위협
  - 2015년 7월 출판 - OWASP Automated Threats to Web Applications Project는 건축가, 개발자, 테스터 및 다른 사람들에게 결정적인 정보 및 기타 리소스를 제공하여 자격 증명 채우기와 같은 자동화된 위협으로부터 보호하는 것을 목표
  - 이 프로젝트는 OWASP에 의해 정의된 대로 상위 20개의 자동화된 위협을 개략적으로 설명
- OWASP API Security Project
  - API(애플리케이션 프로그래밍 인터페이스)의 고유한 취약점과 보안 위험을 이해하고 완화하기 위한 전략과 솔루션에 초점
  - 최신 API 보안 Top 10 2019를 포함
