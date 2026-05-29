const STORAGE_KEY = "portfolio-theme";

export function initTheme() {
  const button = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme ||  "light";

  setTheme(initialTheme);

  button?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  });
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const icon = document.querySelector(".theme-toggle span");
  if (icon) {
    icon.textContent = theme === "dark" ? "☀" : "☾";
  }
}
