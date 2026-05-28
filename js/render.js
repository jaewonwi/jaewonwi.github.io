const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const tagList = (items) =>
  items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");

const firstProjectImage = (project) =>
  project.thumbnail || project.heroImage || project.screenshots?.[0]?.src || "";

export function renderHero(profile) {
  document.querySelector("#home").innerHTML = `
    <div class="hero__content">
      <div class="hero__avatar" aria-hidden="true">
        <img src="${profile.image}" alt="" onerror="this.hidden = true; this.nextElementSibling.hidden = false;" />
        <span hidden>JW</span>
      </div>
      <div class="hero__copy">
        <p class="eyebrow">Hi, I'm <span data-typewriter></span></p>
        <h2>${escapeHtml(profile.name)}</h2>
        <p class="hero__headline">${escapeHtml(profile.headline)}</p>
        <div class="action-row">
          <a class="button button--primary" href="${profile.links.resume}" target="_blank" rel="noreferrer">Resume</a>
          <a class="button" href="#projects">Projects</a>
          <a class="button button--ghost" href="${profile.links.github}" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  `;

  startTypewriter(profile.introRoles);
}

export function renderAbout(profile) {
  document.querySelector("#about").innerHTML = `
    <div class="section__inner">
      <div class="section__header">
        <p class="eyebrow">About</p>
        <h2>#정확성 #안정성 #소통</h2>
      </div>
      <article class="terminal-card">
        <div class="terminal-card__bar">
          <span></span><span></span><span></span>
          <strong>about.sh</strong>
        </div>
        <div class="terminal-card__body">
          ${profile.about
            .map((line) => `<p><span>$</span> ${escapeHtml(line)}</p>`)
            .join("")}
        </div>
      </article>
    </div>
  `;
}

export function renderSkills(skillGroups) {
  document.querySelector("#skills").innerHTML = `
    <div class="section__inner">
      <div class="section__header">
        <p class="eyebrow">Skills</p>
        <h2>보유 기술</h2>
      </div>
      <div class="skill-grid">
        ${skillGroups
          .map(
            (group) => `
              <article class="card skill-card">
                <h3>${escapeHtml(group.group)}</h3>
                <div class="tag-row">${tagList(group.items)}</div>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderWork(workItems) {
  const section = document.querySelector("#work");
  if (!workItems.length) {
    section.hidden = true;
    return;
  }

  section.hidden = false;
  section.innerHTML = `
    <div class="section__inner">
      <div class="section__header">
        <p class="eyebrow">Work</p>
        <h2>경험으로 증명한 실행력</h2>
      </div>
      <div class="timeline">
        ${workItems
          .map(
            (item) => `
              <article class="card timeline-card">
                <div>
                  <h3>${escapeHtml(item.company)}</h3>
                  <p>${escapeHtml(item.role)} · ${escapeHtml(item.location)}</p>
                </div>
                <span>${escapeHtml(item.period)}</span>
                <p>${escapeHtml(item.summary)}</p>
                <ul>${item.achievements.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>
                <div class="tag-row">${tagList(item.techStack)}</div>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderProjects(projects) {
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  document.querySelector("#projects").innerHTML = `
    <div class="section__inner">
      <div class="section__header section__header--center">
        <p class="eyebrow">Projects</p>
        <h2>대표 프로젝트</h2>
      </div>
      <div class="filter-row" aria-label="Project filters">
        ${categories
          .map(
            (category, index) => `
              <button class="filter-button ${index === 0 ? "is-active" : ""}" type="button" data-filter="${escapeHtml(category)}">
                ${escapeHtml(category)}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="project-grid">
        ${projects
          .map(
            (project, index) => {
              const image = firstProjectImage(project);

              return `
              <article class="card project-card" data-project-index="${index}" data-category="${escapeHtml(project.category)}" tabindex="0">
                <div class="project-card__visual">
                  ${
                    image
                      ? `<img src="${escapeHtml(image)}" alt="${escapeHtml(project.title)} thumbnail" />`
                      : `<span>${escapeHtml(project.category)}</span>`
                  }
                </div>
                <div class="project-card__body">
                  <p>${escapeHtml(project.period)}</p>
                  <h3>${escapeHtml(project.title)}</h3>
                  <span>${escapeHtml(project.role)}</span>
                  <p>${escapeHtml(project.summary)}</p>
                  <div class="tag-row">${tagList(project.techStack.slice(0, 4))}</div>
                </div>
              </article>
            `;
            }
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderEducation(items) {
  document.querySelector("#education").innerHTML = `
    <div class="section__inner">
      <div class="section__header section__header--center">
        <p class="eyebrow">Education</p>
        <h2>교육 및 활동</h2>
      </div>
      <div class="accordion">
        ${items
          .map(
            (item, index) => `
              <details class="accordion-item" ${index === 0 ? "open" : ""}>
                <summary>
                  <span>
                    <strong>${escapeHtml(item.school)}</strong>
                    <small>${escapeHtml(item.program)}</small>
                  </span>
                  <em>${escapeHtml(item.period)}</em>
                </summary>
                <p>${escapeHtml(item.description)}</p>
              </details>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderCredentials(credentials) {
  const groups = [
    {
      title: "Certifications",
      eyebrow: "자격증",
      items: credentials.certifications
    },
    {
      title: "Awards",
      eyebrow: "수상",
      items: credentials.awards
    }
  ];

  document.querySelector("#credentials").innerHTML = `
    <div class="section__inner">
      <div class="section__header section__header--center">
        <p class="eyebrow">Credentials</p>
        <h2>자격증 및 수상 이력</h2>
      </div>
      <div class="credential-grid">
        ${groups
          .map(
            (group) => `
              <article class="card credential-card">
                <span>${escapeHtml(group.eyebrow)}</span>
                <h3>${escapeHtml(group.title)}</h3>
                <ul class="credential-list">
                  ${group.items
                    .map(
                      (item) => `
                        <li>
                          <strong>${escapeHtml(item.name)}</strong>
                          <em>${escapeHtml(item.date)}</em>
                        </li>
                      `
                    )
                    .join("")}
                </ul>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderContact(profile) {
  document.querySelector("#contact").innerHTML = `
    <div class="section__inner">
      <div class="section__header section__header--center">
        <p class="eyebrow">Contact</p>
        <h2>Contact Me</h2>
      </div>
      <div class="contact-grid">
        <a class="card contact-card" href="${profile.links.email}">
          <span>Email</span>
          <strong>${escapeHtml(profile.contact.email)}</strong>
        </a>
        <a class="card contact-card" href="${profile.links.github}" target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <strong>${escapeHtml(profile.links.github.replace("https://", ""))}</strong>
        </a>
        <a class="card contact-card" href="${profile.links.resume}" target="_blank" rel="noreferrer">
          <span>Resume</span>
          <strong>PDF 보기</strong>
        </a>
      </div>
    </div>
  `;
}

function startTypewriter(words) {
  const target = document.querySelector("[data-typewriter]");
  if (!target || !words.length) return;

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const word = words[wordIndex];
    target.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex < word.length) {
      charIndex += 1;
    } else if (deleting && charIndex > 0) {
      charIndex -= 1;
    } else if (!deleting) {
      deleting = true;
      setTimeout(tick, 1300);
      return;
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(tick, deleting ? 35 : 75);
  };

  tick();
}
