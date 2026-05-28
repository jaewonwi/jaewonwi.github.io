import { profile } from "../data/profile.js";
import { skills } from "../data/skills.js";
import { projects } from "../data/projects.js";
import { education } from "../data/education.js";
import { credentials } from "../data/credentials.js";
import { work } from "../data/work.js";
import {
  renderAbout,
  renderContact,
  renderCredentials,
  renderEducation,
  renderHero,
  renderProjects,
  renderSkills,
  renderWork
} from "./render.js";
import { initProjectModal } from "./modal.js";
import { initTheme } from "./theme.js";
import { initProjectFilters } from "./filters.js";

const appData = {
  profile,
  skills,
  projects,
  education,
  credentials,
  work
};

renderHero(appData.profile);
renderAbout(appData.profile);
renderSkills(appData.skills);
renderWork(appData.work);
renderProjects(appData.projects);
renderEducation(appData.education);
renderCredentials(appData.credentials);
renderContact(appData.profile);

initTheme();
initProjectFilters(appData.projects);
initProjectModal(appData.projects);

if (!work.length) {
  document.querySelector("[data-work-nav]")?.remove();
}
