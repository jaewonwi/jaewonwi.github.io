const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const firstProjectImage = (project) =>
  project.heroImage || project.thumbnail || project.screenshots?.[0]?.src || "";

const hasItems = (items) => Array.isArray(items) && items.length > 0;

const validImages = (images) =>
  Array.isArray(images) ? images.filter((image) => image?.src) : [];

const renderScreenshotGallery = (screenshots) => {
  const images = validImages(screenshots);
  if (!images.length) return "";

  return `
    <div class="modal__section">
      <h3>프로젝트 이미지</h3>
      <div class="modal-gallery">
        ${images
          .map(
            (image) => `
              <figure class="modal-gallery__item">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || image.caption || "프로젝트 화면")}" loading="lazy" onerror="this.closest('figure').hidden = true;" />
                ${image.caption ? `<figcaption>${escapeHtml(image.caption)}</figcaption>` : ""}
              </figure>
            `
          )
          .join("")}
      </div>
    </div>
  `;
};

const renderImageSection = (title, image) => {
  if (!image?.src) return "";

  return `
    <div class="modal__section">
      <h3>${escapeHtml(title)}</h3>
      <figure class="modal-image-panel">
        <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || title)}" loading="lazy" onerror="this.closest('figure').hidden = true;" />
        ${image.caption ? `<figcaption>${escapeHtml(image.caption)}</figcaption>` : ""}
      </figure>
    </div>
  `;
};

const renderTextListSection = (title, items) => {
  if (!hasItems(items)) return "";

  return `
    <div class="modal__section">
      <h3>${escapeHtml(title)}</h3>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
  `;
};

const renderTechDecisions = (items) => {
  if (!hasItems(items)) return "";

  return `
    <div class="modal__section">
      <h3>사용 기술 및 선정 이유</h3>
      <ul>
        ${items
          .map((item) =>
            typeof item === "string"
              ? `<li>${escapeHtml(item)}</li>`
              : `<li><strong>${escapeHtml(item.name)}</strong> - ${escapeHtml(item.reason)}</li>`
          )
          .join("")}
      </ul>
    </div>
  `;
};

export function initProjectModal(projects) {
  const root = document.querySelector("#modal-root");

  const closeModal = () => {
    root.innerHTML = "";
    document.body.classList.remove("is-modal-open");
  };

  const openModal = (project) => {
    const heroImage = firstProjectImage(project);

    root.innerHTML = `
      <div class="modal-backdrop" data-close-modal>
        <article class="modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <button class="icon-button modal__close" type="button" data-close-modal aria-label="Close project detail">×</button>
          <header class="modal__hero">
            ${
              heroImage
                ? `<img class="modal__hero-image" src="${escapeHtml(heroImage)}" alt="" onerror="this.hidden = true;" />`
                : ""
            }
            <div class="modal__hero-content">
              <p class="eyebrow">${escapeHtml(project.category)}</p>
              <h2 id="project-modal-title">${escapeHtml(project.title)}</h2>
              <p class="modal__summary">${escapeHtml(project.summary)}</p>
              <div class="modal__meta">
                <div>
                  <span>Period</span>
                  <strong>${escapeHtml(project.period)}</strong>
                </div>
                ${
                  project.team
                    ? `<div>
                        <span>Team</span>
                        <strong>${escapeHtml(project.team)}</strong>
                      </div>`
                    : ""
                }
                <div>
                  <span>Role</span>
                  <strong>${escapeHtml(project.role)}</strong>
                </div>
              </div>
              <div class="tag-row">
                ${project.techStack.map((tech) => `<span class="tag">${escapeHtml(tech)}</span>`).join("")}
              </div>
              <div class="action-row">
                ${
                  project.links.github
                    ? `<a class="button button--primary" href="${project.links.github}" target="_blank" rel="noreferrer">
                        <img src="./assets/icons/github.svg" alt="" aria-hidden="true" />
                        <span>GitHub</span>
                      </a>`
                    : ""
                }
                ${
                  project.links.demo
                    ? `<a class="button" href="${project.links.demo}" target="_blank" rel="noreferrer">Demo</a>`
                    : ""
                }
              </div>
            </div>
          </header>
          <div class="modal__body">
            ${
              project.details?.problem || project.details?.solution
                ? `<div class="modal__section">
                    <h3>프로젝트 소개</h3>
                    ${project.details?.problem ? `<p>${escapeHtml(project.details.problem)}</p>` : ""}
                    ${project.details?.solution ? `<p>${escapeHtml(project.details.solution)}</p>` : ""}
                  </div>`
                : ""
            }
            ${renderScreenshotGallery(project.screenshots)}
            ${
              project.details?.contribution
                ? `<div class="modal__section">
                    <h3>담당 역할</h3>
                    <p>${escapeHtml(project.details.contribution)}</p>
                  </div>`
                : ""
            }
            ${
              hasItems(project.highlights)
                ? `<div class="modal__section">
                    <h3>구현 내용</h3>
                    <ul>${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                  </div>`
                : ""
            }
            ${renderTechDecisions(project.techDecisions)}
            ${renderImageSection("아키텍처", project.architecture)}
            ${renderImageSection("ERD", project.erd)}
            ${
              project.details?.troubleshooting
                ? `<div class="modal__section">
                    <h3>트러블 슈팅</h3>
                    <p>${escapeHtml(project.details.troubleshooting)}</p>
                  </div>`
                : ""
            }
            ${renderTextListSection("성과 및 회고", project.outcomes)}
          </div>
        </article>
      </div>
    `;
    document.body.classList.add("is-modal-open");
    root.querySelector(".modal__close")?.focus();
  };

  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-index]");
    if (card) {
      openModal(projects[Number(card.dataset.projectIndex)]);
      return;
    }

    if (event.target.matches("[data-close-modal]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    const card = event.target.closest?.("[data-project-index]");
    if (card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openModal(projects[Number(card.dataset.projectIndex)]);
    }

    if (event.key === "Escape") {
      closeModal();
    }
  });
}
