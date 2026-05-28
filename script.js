const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const projects = {
  reservation: {
    title: "예약 관리 API",
    period: "2025",
    overview: [
      "예약 생성, 변경, 취소, 관리자 조회를 지원하는 백엔드 API 예시 프로젝트입니다.",
      "동시 예약 요청과 목록 조회 성능을 고려해 도메인 흐름과 데이터 조회 구조를 설계했습니다."
    ],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "QueryDSL", "MySQL", "Docker"],
    implementation: [
      "예약, 사용자, 매장, 시간 슬롯 도메인을 분리하고 예약 상태 변경 흐름을 구현했습니다.",
      "관리자 조회 화면에 필요한 검색 조건을 QueryDSL 기반 동적 쿼리로 구성했습니다.",
      "예약 취소와 변경 과정에서 상태 전이를 명확히 분리해 예외 케이스를 줄였습니다."
    ],
    erdImage: "",
    erd: [
      ["User", "id, email, role"],
      ["Reservation", "id, status, reserved_at"],
      ["Schedule", "id, date, capacity"]
    ],
    architectureImage: "",
    architecture: [
      ["Client", "예약 요청"],
      ["API Server", "검증 및 상태 변경"],
      ["Database", "예약/일정 저장"],
      ["Admin", "조건별 조회"]
    ],
    problem: [
      "관리자 예약 목록 조회에서 연관 엔티티를 반복 조회하며 N+1 쿼리가 발생했습니다.",
      "조회 전용 API를 별도로 분리하고 필요한 필드만 DTO로 가져오도록 쿼리를 재구성했습니다.",
      "불필요한 엔티티 로딩을 줄여 목록 조회 시 쿼리 수와 응답 지연을 낮췄습니다."
    ],
    retrospective: [
      "조회 API는 도메인 모델을 그대로 노출하기보다 화면 요구사항에 맞춘 읽기 모델을 두는 편이 유지보수에 유리하다는 점을 배웠습니다.",
      "성능 문제는 체감으로 판단하지 않고 로그와 실행 쿼리를 확인하며 좁혀가는 과정이 중요했습니다."
    ]
  },
  notification: {
    title: "실시간 알림 서버",
    period: "2025",
    overview: [
      "사용자 이벤트를 기반으로 알림을 저장하고 실시간으로 전달하는 서버 예시 프로젝트입니다.",
      "연결이 끊긴 사용자가 다시 접속했을 때 놓친 알림을 확인할 수 있는 흐름을 구성했습니다."
    ],
    tech: ["Spring Boot", "Redis", "SSE", "MySQL", "GitHub Actions"],
    implementation: [
      "이벤트 발생 시 알림 데이터를 저장하고 수신자별 읽음 상태를 관리했습니다.",
      "SSE 연결을 통해 신규 알림을 전달하고, 재연결 시 마지막 이벤트 이후의 알림을 조회하도록 구성했습니다.",
      "장애 상황을 문서화하고 재시도 기준을 정리했습니다."
    ],
    erdImage: "",
    erd: [
      ["User", "id, email"],
      ["Notification", "id, type, message"],
      ["ReadStatus", "user_id, notification_id, read_at"]
    ],
    architectureImage: "",
    architecture: [
      ["Event", "도메인 이벤트"],
      ["Notification API", "알림 생성"],
      ["Redis", "연결/캐시"],
      ["SSE Client", "실시간 수신"]
    ],
    problem: [
      "브라우저 새로고침이나 네트워크 변화로 SSE 연결이 끊기면 일부 알림이 누락될 수 있었습니다.",
      "알림을 먼저 저장한 뒤 전달하고, 재연결 시 읽지 않은 알림을 다시 조회하는 방식으로 흐름을 변경했습니다.",
      "실시간 전달 실패가 데이터 유실로 이어지지 않도록 저장과 전달 책임을 분리했습니다."
    ],
    retrospective: [
      "실시간 기능은 연결 유지보다 데이터 복구 가능성이 더 중요할 수 있다는 점을 배웠습니다.",
      "장애 케이스를 먼저 정리하면 구현 우선순위가 더 명확해졌습니다."
    ]
  },
  learning: {
    title: "학습 관리 플랫폼",
    period: "2024",
    overview: [
      "강의, 과제, 수강 현황을 관리하는 교육 서비스 백엔드 예시 프로젝트입니다.",
      "관리자 검색 API와 반복 배포 과정을 중심으로 구현 경험을 정리했습니다."
    ],
    tech: ["Java", "Spring Boot", "QueryDSL", "MySQL", "Docker", "GitHub Actions"],
    implementation: [
      "강의, 과제, 제출, 수강 상태 도메인을 기준으로 API를 구성했습니다.",
      "관리자 페이지의 다중 조건 검색을 QueryDSL로 구현했습니다.",
      "Docker와 GitHub Actions를 사용해 빌드 및 배포 과정을 자동화했습니다."
    ],
    erdImage: "",
    erd: [
      ["Course", "id, title, teacher_id"],
      ["Assignment", "id, course_id, due_date"],
      ["Submission", "id, assignment_id, status"]
    ],
    architectureImage: "",
    architecture: [
      ["GitHub", "소스 관리"],
      ["Actions", "빌드/테스트"],
      ["Docker", "이미지 생성"],
      ["Server", "컨테이너 실행"]
    ],
    problem: [
      "수동 배포 과정에서 누락되는 단계가 생겨 같은 문제가 반복되었습니다.",
      "빌드, 테스트, 이미지 생성, 서버 반영 순서를 GitHub Actions 워크플로로 정리했습니다.",
      "반복 작업을 줄이고 배포 과정에서 확인해야 할 지점을 명확히 만들었습니다."
    ],
    retrospective: [
      "배포 자동화는 속도뿐 아니라 실수를 줄이는 장치라는 점을 체감했습니다.",
      "팀원이 같은 방식으로 실행할 수 있도록 절차를 코드와 문서로 남기는 습관이 중요했습니다."
    ]
  }
};

const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalPeriod = document.querySelector("#modal-period");
const modalTabs = document.querySelectorAll(".modal-tabs button");
let lastFocusedElement = null;

function listMarkup(items) {
  return `<ul class="detail-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderDiagram(items, type, imageSrc = "", imageAlt = "") {
  if (imageSrc) {
    return `
      <div class="diagram">
        <img class="diagram-image" src="${imageSrc}" alt="${imageAlt}">
      </div>
    `;
  }

  const className = type === "architecture" ? "arch-flow" : "erd-grid";
  const itemClassName = type === "architecture" ? "arch-node" : "entity";

  return `
    <div class="diagram">
      <div class="${className}">
        ${items.map(([title, description]) => `
          <div class="${itemClassName}">
            <strong>${title}</strong>
            <span>${description}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function setPanel(id, heading, content) {
  const panel = document.querySelector(`#tab-${id}`);
  if (!panel) return;

  panel.innerHTML = `
    <div class="detail-block">
      <h3>${heading}</h3>
      ${content}
    </div>
  `;
}

function activateTab(tabName) {
  modalTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tabName}`);
  });
}

function openProject(projectKey) {
  const project = projects[projectKey];
  if (!project || !modal) return;

  lastFocusedElement = document.activeElement;
  modalTitle.textContent = project.title;
  modalPeriod.textContent = `Project · ${project.period}`;

  setPanel("overview", "프로젝트 개요", project.overview.map((item) => `<p>${item}</p>`).join(""));
  setPanel("tech", "사용기술", listMarkup(project.tech));
  setPanel("implementation", "담당 역할 및 구현 내용", listMarkup(project.implementation));
  setPanel("erd", "ERD", renderDiagram(project.erd, "erd", project.erdImage, `${project.title} ERD`));
  setPanel("architecture", "아키텍처", renderDiagram(project.architecture, "architecture", project.architectureImage, `${project.title} 아키텍처`));
  setPanel("problem", "구현 중 마주친 문제와 해결 결과", listMarkup(project.problem));
  setPanel("retrospective", "배운점", listMarkup(project.retrospective));

  activateTab("overview");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector("button[data-close-modal]").focus();
}

function closeProjectModal() {
  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProjectModal);
});

modalTabs.forEach((button) => {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && !modal.hidden) {
    closeProjectModal();
  }
});
