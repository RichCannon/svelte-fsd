export const checkIsDarkSchemePreferred = () =>
  window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false;

export const setTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
};