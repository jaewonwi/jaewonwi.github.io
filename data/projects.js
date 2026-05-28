export const projects = [
  {
    title: "꼬말꼬말",
    category: "Infra",
    summary: "언어장애 아동을 위한 놀이형 언어치료 애플리케이션",
    thumbnail: "./assets/images/projects/kkomal/thumbnail.png",
    heroImage: "./assets/images/projects/kkomal/hero.png",
    screenshots: [
      {
        src: "./assets/images/projects/kkomal/page1.png",
        alt: "꼬말꼬말 메인 페이지",
        caption: "메인 페이지"
      },
      {
        src: "./assets/images/projects/kkomal/page2.png",
        alt: "개구리 집 혀 스트레칭 페이지",
        caption: "개구리 집 - 혀 스트레칭"
      },
      {
        src: "./assets/images/projects/kkomal/page3.png",
        alt: "고래 집 단모음 체계 학습 및 발화 페이지",
        caption: "고래 집 - 단모음 체계 학습 및 발화"
      },
      {
        src: "./assets/images/projects/kkomal/page4.png",
        alt: "곰 집 음절 및 음소별 단어 발화 빙고 페이지",
        caption: "곰 집 - 음절, 음소별 단어 발화 빙고"
      },
      {
        src: "./assets/images/projects/kkomal/page5.png",
        alt: "병아리 집 단어 결합 및 문장 발화 연습 페이지",
        caption: "병아리 집 - 단어 결합 및 문장 발화 연습"
      },
      {
        src: "./assets/images/projects/kkomal/page6.png",
        alt: "관리자 페이지 아이 정보 및 학습 현황 관리",
        caption: "관리자 페이지 - 아이 정보 및 학습 현황 관리"
      }
    ],
    architecture: {
      src: "./assets/images/projects/kkomal/architecture.png",
      alt: "꼬말꼬말 아키텍처",
      caption: "AWS EC2, Nginx, Docker, Jenkins, MySQL, S3 기반 배포 구조"
    },
    erd: {
      src: "./assets/images/projects/kkomal/erd.png",
      alt: "꼬말꼬말 ERD",
      caption: "아이, 보호자, 치료사, 게임, 학습 기록 중심의 관계형 데이터베이스 구조"
    },
    role: "Infra 100% | Backend 25%",
    team: "6명 (FE 3명, BE 2명, Infra 1명)",
    period: "2024.04.08 - 2024.05.17",
    techStack: ["Spring WebFlux", "R2DBC", "Spring Security", "JWT", "MySQL", "AWS S3", "Docker", "Jenkins", "Nginx", "Gerrit"],
    highlights: [
      "언어치료 게임 완료 후 발화 데이터 저장 API 구현",
      "아이/관리자 권한별 기능 제공",
      "Nginx 기반 Proxy Server 구성",
      "AWS S3를 활용한 이미지 스토리지 적용",
      "Docker와 Jenkins 기반 CI/CD 파이프라인 구축"
    ],
    details: {
      problem: "언어장애 아동이 반복적인 치료 훈련을 부담 없이 지속할 수 있도록 실제 치료법에 게이미피케이션을 결합한 서비스가 필요했습니다.",
      solution: "아이와 관리자를 구분한 기능을 제공하고, 언어치료사의 요구사항을 반영해 센터에서 교보재로 활용할 수 있는 놀이형 언어 훈련 서비스를 구현했습니다.",
      contribution: "인프라 담당으로 배포 환경과 CI/CD 파이프라인을 구축했고, 백엔드 일부 기능으로 사용자 데이터 관련 API와 발화 데이터 저장 흐름 구현에 참여했습니다."
    },
    links: {
      github: "",
      demo: ""
    }
  },
  {
    title: "서당독",
    category: "Backend",
    summary: "문해력 증진을 위한 맞춤형 뉴스 추천 및 활용 서비스",
    thumbnail: "./assets/images/projects/seodangdog/thumbnail.png",
    heroImage: "./assets/images/projects/seodangdog/hero.png",
    screenshots: [
      {
        src: "./assets/images/projects/seodangdog/page1.png",
        alt: "서당독 메인 페이지",
        caption: "메인 페이지 - 맞춤형 뉴스 추천"
      },
      {
        src: "./assets/images/projects/seodangdog/page2.png",
        alt: "서당독 핫토픽 페이지",
        caption: "핫토픽 - 많이 본 뉴스와 많이 푼 뉴스 순위"
      },
      {
        src: "./assets/images/projects/seodangdog/page3.png",
        alt: "서당독 뉴스 상세보기 페이지",
        caption: "뉴스 상세보기 - 읽기, 문해력 퀴즈, 요약"
      },
      {
        src: "./assets/images/projects/seodangdog/page4.png",
        alt: "서당독 나만의 단어장 페이지",
        caption: "나만의 단어장"
      },
      {
        src: "./assets/images/projects/seodangdog/page5.png",
        alt: "서당독 단어 퀴즈 페이지",
        caption: "단어 퀴즈"
      },
      {
        src: "./assets/images/projects/seodangdog/page6.png",
        alt: "서당독 내 정보 페이지",
        caption: "내 정보 - 뉴스 기록, 관심 키워드, 문해력"
      }
    ],
    architecture: {
      src: "./assets/images/projects/seodangdog/architecture.png",
      alt: "서당독 아키텍처",
      caption: "Spring Boot, FastAPI, MySQL, MongoDB 기반 뉴스 추천 서비스 구조"
    },
    erd: {
      src: "./assets/images/projects/seodangdog/erd.png",
      alt: "서당독 ERD",
      caption: "사용자, 뉴스, 키워드, 단어장, 퀴즈 중심의 데이터베이스 구조"
    },
    role: "Backend 50%",
    team: "6명 (FE 1명, BE 2명, ML 2명, Infra 1명)",
    period: "2024.02.19 - 2024.04.05",
    techStack: ["Spring Boot", "Spring Data JPA", "QueryDSL", "MySQL", "MongoDB", "Spring Data MongoDB", "OpenAPI"],
    highlights: [
      "사용자 관심 키워드와 활동 내역 기반 맞춤 뉴스 추천",
      "뉴스 상세보기, 읽기 기록, 문제풀이, 요약 관련 REST API 개발",
      "표준국어대사전과 네이버 검색 OpenAPI 기반 통합 단어 검색 구현",
      "뉴스, 사용자, 키워드 관계를 고려한 MySQL/MongoDB 데이터 모델링",
      "사용자 활동별 관심 키워드 가중치 관리 로직 개선"
    ],
    techDecisions: [
      {
        name: "Spring Data JPA",
        reason: "관계형 데이터의 복잡한 연관관계를 객체지향적으로 다루고 도메인 모델을 명확히 표현하기 위해 사용했습니다."
      },
      {
        name: "QueryDSL",
        reason: "관심 키워드, 사용자 활동, 통계 조건에 따른 동적 쿼리를 타입 안정성 있게 작성하기 위해 사용했습니다."
      },
      {
        name: "Spring Data MongoDB",
        reason: "크롤링된 뉴스 원본 데이터를 MongoDB Repository 기반으로 간편하게 조회하고 관리하기 위해 사용했습니다."
      },
      {
        name: "MySQL",
        reason: "사용자, 관심 키워드, 문제풀이 기록처럼 정합성이 중요한 데이터를 관계형 구조로 관리하기 위해 사용했습니다."
      },
      {
        name: "MongoDB",
        reason: "뉴스 원문처럼 구조가 유동적이고 대량으로 적재되는 데이터를 BSON 형태로 빠르게 저장하기 위해 사용했습니다."
      },
      {
        name: "OpenAPI",
        reason: "표준국어대사전과 네이버 검색 데이터를 통합해 단어 검색과 학습 기능을 제공하기 위해 사용했습니다."
      }
    ],
    details: {
      problem: "사용자에게 뉴스는 많지만, 문해력 학습에 바로 활용할 수 있는 맞춤형 뉴스와 문제 풀이 경험은 부족했습니다.",
      solution: "사용자 관심 키워드와 서비스 이용 내역을 바탕으로 뉴스를 추천하고, GPT 기반 문해력 문제와 단어 학습 기능을 함께 제공하는 서비스를 구현했습니다.",
      contribution: "백엔드 개발자로 ERD 설계, 뉴스 상세보기 API, 사용자 데이터 및 통계 API, 관심 키워드 API, OpenAPI 기반 단어장 기능을 담당했습니다.",
      troubleshooting: "뉴스 클릭과 새로고침에 따라 관심 키워드 가중치 격차가 과도하게 커지는 문제를 발견해 단순 증감 방식에서 사용자 행동별 곱셈/나눗셈 가중치로 세분화했습니다. 또한 OpenAPI의 깊은 JSON 응답은 Entity가 아닌 DTO로 매핑하고 @JsonIgnoreProperties를 적용해 불필요한 테이블 생성을 막았으며, 추천 뉴스 조회 지연은 미리보기 데이터를 MySQL에 함께 저장해 MongoDB 중복 조회를 줄이는 방식으로 개선했습니다."
    },
    outcomes: [
      "MySQL과 MongoDB를 함께 사용하며 RDBMS/NoSQL 데이터 모델링 차이를 학습했습니다.",
      "QueryDSL 기반 동적 쿼리 작성으로 코드 가독성과 유지보수성을 높였습니다.",
      "표준국어대사전, 네이버 검색 OpenAPI 응답 구조를 분석하고 통합 단어 검색 기능으로 연결했습니다."
    ],
    links: {
      github: "",
      demo: ""
    }
  },
  {
    title: "움직여Zoo!",
    category: "Backend",
    summary: "WebRTC와 모션인식을 활용한 실시간 멀티 레이싱 게임",
    thumbnail: "./assets/images/projects/movezoo/thumbnail.png",
    heroImage: "./assets/images/projects/movezoo/hero.png",
    screenshots: [
      {
        src: "./assets/images/projects/movezoo/page1.jpg",
        alt: "움직여Zoo 메인 페이지",
        caption: "메인 페이지"
      },
      {
        src: "./assets/images/projects/movezoo/page2.jpg",
        alt: "움직여Zoo 상점 페이지",
        caption: "상점"
      },
      {
        src: "./assets/images/projects/movezoo/page3.jpg",
        alt: "움직여Zoo 싱글플레이 랭킹 페이지",
        caption: "싱글플레이 랭킹"
      },
      {
        src: "./assets/images/projects/movezoo/page4.jpg",
        alt: "움직여Zoo 싱글플레이 게임 화면",
        caption: "싱글플레이 게임 화면"
      },
      {
        src: "./assets/images/projects/movezoo/page5.jpg",
        alt: "움직여Zoo 멀티플레이 방 목록",
        caption: "멀티플레이 방 목록"
      },
      {
        src: "./assets/images/projects/movezoo/page6.jpg",
        alt: "움직여Zoo 멀티플레이 대기방",
        caption: "멀티플레이 대기방"
      },
      {
        src: "./assets/images/projects/movezoo/page7.jpg",
        alt: "움직여Zoo 멀티플레이 게임 화면",
        caption: "멀티플레이 게임 화면"
      },
      {
        src: "./assets/images/projects/movezoo/page8.jpg",
        alt: "움직여Zoo 멀티플레이 결과 화면",
        caption: "멀티플레이 결과 화면"
      }
    ],
    architecture: {
      src: "./assets/images/projects/movezoo/architecture.png",
      alt: "움직여Zoo 아키텍처",
      caption: "Spring Boot, Redis, WebRTC 기반 실시간 멀티플레이 게임 구조"
    },
    erd: {
      src: "./assets/images/projects/movezoo/erd.png",
      alt: "움직여Zoo ERD",
      caption: "사용자, 아이템, 친구, 랭킹, 게임 기록 중심의 관계형 데이터베이스 구조"
    },
    role: "Backend 50% | Team Lead",
    team: "6명 (FE 4명, BE 2명)",
    period: "2024.01.08 - 2024.02.16",
    techStack: ["Spring Boot", "Spring Security", "JPA", "OAuth 2.0", "MySQL", "Redis", "JavaScript", "WebRTC", "Blender"],
    highlights: [
      "웹캠 기반 사용자 움직임 인식과 캐릭터 조작",
      "WebRTC 기반 실시간 멀티플레이 레이싱 게임",
      "Spring Security 기반 회원 인증/인가 필터 로직 구현",
      "OAuth 2.0 기반 구글 로그인 구현",
      "Redis를 활용한 대기방 및 랭킹 데이터 조회 속도 개선"
    ],
    techDecisions: [
      {
        name: "Spring Security",
        reason: "클라이언트 요청에 대한 인증과 인가 처리를 필터 단계에서 제어하기 위해 사용했습니다."
      },
      {
        name: "JPA",
        reason: "객체와 관계형 데이터베이스 사이의 패러다임 불일치를 줄이고 도메인 중심으로 데이터를 다루기 위해 사용했습니다."
      },
      {
        name: "OAuth 2.0",
        reason: "구글 간편 로그인을 제공해 별도의 회원가입 부담 없이 서비스를 이용할 수 있도록 사용했습니다."
      },
      {
        name: "Redis",
        reason: "대기방 정보와 랭킹처럼 자주 조회되는 데이터를 빠르게 제공하기 위해 사용했습니다."
      },
      {
        name: "JavaScript",
        reason: "별도 설치 없이 접근 가능한 웹 기반 게임 경험을 구현하기 위해 사용했습니다."
      },
      {
        name: "Blender",
        reason: "캐릭터 움직임을 3D처럼 보이게 하기 위한 에셋 제작과 프레임 분할에 활용했습니다."
      }
    ],
    details: {
      problem: "사용자가 별도 장비 없이 웹캠만으로 몸을 움직여 게임을 즐기고, 다른 사용자와 실시간으로 경쟁할 수 있는 웹 게임 경험을 만들고자 했습니다.",
      solution: "TensorFlow 기반 Face Detection, Hand Pose Detection으로 동작을 인식하고, WebRTC 양방향 통신을 통해 실시간 멀티플레이 레이싱 게임을 구현했습니다.",
      contribution: "팀장으로 일정과 진행 상황을 관리했고, 백엔드 담당으로 ERD 설계, 회원 인증/인가, OAuth 로그인, Redis 서버 구축, 일부 게임 맵과 캐릭터 구현을 담당했습니다.",
      troubleshooting: "Spring Security와 OAuth 2.0 로그인 이후 백엔드에서 직접 redirect를 처리하려던 방식이 실패해, CustomHandler에서 응답 코드와 값을 전달하고 프론트엔드가 redirect를 수행하는 방식으로 변경해 로그인 흐름을 안정화했습니다."
    },
    outcomes: [
      "Spring Security 필터 커스터마이징을 통해 인증/인가 흐름과 토큰 검증 방식을 학습했습니다.",
      "JPA를 적용하며 객체지향적인 데이터 접근 방식과 ORM 개념을 익혔습니다.",
      "WBS와 Jira를 활용해 팀 일정과 작업 흐름을 관리했습니다."
    ],
    links: {
      github: "",
      demo: ""
    }
  },
];
