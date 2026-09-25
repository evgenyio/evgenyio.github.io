// Inline icons for the player. All use currentColor.
const svg = (body, extra = '') =>
  `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ${extra}>${body}</svg>`;

export const icons = {
  play: svg('<path fill="currentColor" d="M8 5.2v13.6a1.1 1.1 0 0 0 1.68.93l10.4-6.8a1.1 1.1 0 0 0 0-1.86L9.68 4.27A1.1 1.1 0 0 0 8 5.2Z"/>'),
  pause: svg('<rect fill="currentColor" x="6" y="4.5" width="4.2" height="15" rx="1.4"/><rect fill="currentColor" x="13.8" y="4.5" width="4.2" height="15" rx="1.4"/>'),
  prev: svg('<rect fill="currentColor" x="4.5" y="5" width="2.6" height="14" rx="1.3"/><path fill="currentColor" d="M19.5 6.1v11.8a1.1 1.1 0 0 1-1.73.9l-8.2-5.9a1.1 1.1 0 0 1 0-1.8l8.2-5.9a1.1 1.1 0 0 1 1.73.9Z"/>'),
  next: svg('<rect fill="currentColor" x="16.9" y="5" width="2.6" height="14" rx="1.3"/><path fill="currentColor" d="M4.5 6.1v11.8a1.1 1.1 0 0 0 1.73.9l8.2-5.9a1.1 1.1 0 0 0 0-1.8l-8.2-5.9a1.1 1.1 0 0 0-1.73.9Z"/>'),
  list: svg('<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M9 6.5h11M9 12h11M9 17.5h11"/><circle fill="currentColor" cx="4.5" cy="6.5" r="1.3"/><circle fill="currentColor" cx="4.5" cy="12" r="1.3"/><circle fill="currentColor" cx="4.5" cy="17.5" r="1.3"/>'),
  stack: svg('<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 8.5 12 4l8 4.5-8 4.5-8-4.5Z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m4 12.5 8 4.5 8-4.5M4 16.5 12 21l8-4.5"/>'),
  chevronDown: svg('<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="m6 9.5 6 6 6-6"/>'),
  chevronUp: svg('<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="m6 14.5 6-6 6 6"/>'),
  close: svg('<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>'),
  arrowDown: svg('<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m-6-6 6 6 6-6"/>'),
  eye: svg('<path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="3"/>'),
  eyeOff: svg('<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 4l16 16M9.9 5.8A9.7 9.7 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3 3.8M6.2 7.4A16.3 16.3 0 0 0 2.5 12S6 18.5 12 18.5a9.6 9.6 0 0 0 4.4-1.1M9.9 9.9a3 3 0 0 0 4.2 4.2"/>'),
  check: svg('<path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/>'),
};

export function setIcon(button, name) {
  if (button.dataset.icon === name) return;
  button.dataset.icon = name;
  button.innerHTML = icons[name];
}
