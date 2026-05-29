# jaewonwi.github.io

GitHub Pages로 배포하는 정적 개발자 포트폴리오입니다.

## Structure

```text
.
├── index.html
├── assets/
│   ├── favicon/
│   ├── images/
│   │   ├── icons/
│   │   └── projects/
│   └── resume/
├── css/
├── data/
└── js/
```

## Local Preview

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 열면 확인할 수 있습니다.

## Content Updates

- 기본 프로필과 연락처: `data/profile.js`
- 기술 스택: `data/skills.js`
- 프로젝트 카드와 모달 상세: `data/projects.js`
- 교육 이력: `data/education.js`
- 자격증과 수상: `data/credentials.js`
- 향후 경력/인턴/프리랜스 이력: `data/work.js`

`data/work.js`가 비어 있으면 Work 메뉴와 섹션은 자동으로 숨겨집니다.
