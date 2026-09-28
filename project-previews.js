(() => {
  const section = document.querySelector('#projects');
  if (!section) return;
  const rows = [...section.querySelectorAll('.project')];
  const stage = section.querySelector('.project-stage');
  const stageImage = stage.querySelector('img');
  const dialog = document.querySelector('.preview-dialog');
  const hover = matchMedia('(min-width: 900px) and (hover: hover)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = null;
  let opener;
  let hideTimer;
  let dismissed = false;
  let closeAnimation;

  function imageFallback(image) {
    const message = document.createElement('span');
    message.className = 'preview-unavailable';
    message.textContent = 'Preview unavailable. You can still visit the project.';
    message.hidden = true;
    image.after(message);
    const unavailable = () => { image.style.display = 'none'; message.hidden = false; };
    image.addEventListener('error', unavailable);
    image.addEventListener('load', () => { image.style.display = ''; message.hidden = true; });
    if (image.getAttribute('src') && image.complete && !image.naturalWidth) unavailable();
  }
  document.querySelectorAll('.project-stage img, .preview-dialog img').forEach(imageFallback);

  function positionStage() {
    if (stage.hidden || !current) return;
    const row = current.getBoundingClientRect();
    const text = current.querySelector('p').getBoundingClientRect();
    const box = stage.getBoundingClientRect();
    const edge = 14, gap = 16;
    let x = text.right + gap;
    let y = row.top;
    if (x + box.width > innerWidth - edge) {
      x = Math.min(innerWidth - box.width - edge, row.right - box.width / 2);
      // If there is no side margin, keep the hovered row readable by placing the image above/below it.
      y = row.bottom + gap;
      if (y + box.height > innerHeight - edge && row.top > box.height + gap + edge) y = row.top - box.height - gap;
    }
    stage.style.left = `${Math.max(edge, x)}px`;
    stage.style.top = `${Math.max(edge, Math.min(innerHeight - box.height - edge, y))}px`;
  }

  function select(row) {
    clearTimeout(hideTimer);
    current = row;
    const image = row.querySelector('.project-visual img');
    stageImage.width = image.width;
    stageImage.height = image.height;
    stageImage.alt = image.alt;
    if (stageImage.getAttribute('src') !== image.getAttribute('src')) stageImage.src = image.getAttribute('src');
    const name = row.querySelector('h3 a').textContent;
    stage.querySelector('.stage-name').textContent = name;
    stage.querySelector('.stage-caption').textContent = row.dataset.caption;
    stage.querySelector('button').setAttribute('aria-label', `Enlarge ${name} preview`);
    stage.hidden = !hover.matches || dismissed || dialog.open;
    positionStage();
  }
  stageImage.addEventListener('load', positionStage);
  stageImage.addEventListener('error', positionStage);

  function open(row, trigger) {
    current = row;
    opener = trigger;
    const image = row.querySelector('.project-visual img');
    const enlarged = dialog.querySelector('.dialog-image');
    dialog.querySelector('#preview-title').textContent = row.querySelector('h3 a').textContent;
    enlarged.width = image.width;
    enlarged.height = image.height;
    enlarged.src = image.getAttribute('src');
    enlarged.alt = image.alt;
    dialog.querySelector('.dialog-caption').textContent = row.dataset.caption;
    dialog.querySelector('.dialog-extra').hidden = !row.dataset.extra;
    const projectLink = row.querySelector('h3 a');
    const visitLink = dialog.querySelector('.dialog-visit');
    const githubLink = dialog.querySelector('.dialog-github');
    visitLink.href = projectLink.href;
    githubLink.href = row.dataset.github;
    visitLink.hidden = visitLink.href === githubLink.href;
    stage.hidden = true;
    dialog.showModal();
    dialog.scrollTop = 0;
    dialog.querySelector('.preview-close').focus();
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!stage.matches(':hover') && !stage.contains(document.activeElement) && !current?.matches(':hover') && !current?.contains(document.activeElement)) stage.hidden = true;
    }, 180);
  }

  function close() {
    if (!dialog.open || closeAnimation) return;
    if (hover.matches || reducedMotion.matches) {
      dialog.close();
      return;
    }
    // Keep the native dialog open while its content and backdrop fade away.
    const style = getComputedStyle(dialog);
    dialog.classList.add('is-closing');
    closeAnimation = dialog.animate([
      { opacity: style.opacity, transform: style.transform },
      { opacity: 0, transform: 'translateY(16px)' }
    ], { duration: 160, easing: 'ease-in', fill: 'forwards' });
    closeAnimation.finished.then(() => dialog.close());
  }

  for (const row of rows) {
    row.addEventListener('pointerenter', event => {
      if (event.pointerType === 'touch') return;
      dismissed = false;
      select(row);
    });
    row.addEventListener('pointerleave', scheduleHide);
    row.addEventListener('focusin', () => { dismissed = false; select(row); });
    row.querySelector('h3 a').addEventListener('click', event => {
      if (hover.matches || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      open(row, event.currentTarget);
    });
  }
  function updateTitleLinks() {
    for (const row of rows) {
      const link = row.querySelector('h3 a');
      if (hover.matches) {
        link.removeAttribute('aria-haspopup');
        link.removeAttribute('aria-controls');
      } else {
        link.setAttribute('aria-haspopup', 'dialog');
        link.setAttribute('aria-controls', dialog.id);
      }
    }
  }
  section.addEventListener('focusout', scheduleHide);
  stage.addEventListener('pointerenter', () => clearTimeout(hideTimer));
  stage.addEventListener('pointerleave', scheduleHide);
  stage.querySelector('button').addEventListener('click', event => open(current, event.currentTarget));
  dialog.querySelector('.preview-close').addEventListener('click', close);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) close();
  });
  dialog.addEventListener('close', () => {
    closeAnimation?.cancel();
    closeAnimation = null;
    dialog.classList.remove('is-closing');
    if (stage.contains(opener)) { dismissed = false; select(current); }
    opener?.focus({ preventScroll: true });
    if (!stage.contains(opener)) { dismissed = true; stage.hidden = true; }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !dialog.open) { dismissed = true; stage.hidden = true; }
  });
  addEventListener('scroll', () => {
    const focused = current?.contains(document.activeElement) || stage.contains(document.activeElement);
    const row = current?.getBoundingClientRect();
    // Focusing an off-screen title scrolls it into view after focusin fires.
    stage.hidden = !(hover.matches && focused && !dismissed && !dialog.open && row?.bottom > 0 && row.top < innerHeight);
    if (!stage.hidden) positionStage();
  }, { passive: true });
  addEventListener('resize', () => { stage.hidden = true; });
  hover.addEventListener('change', () => { stage.hidden = true; updateTitleLinks(); });
  updateTitleLinks();
  if (location.hash === '#projects' && document.fonts) {
    document.fonts.ready.then(() => section.scrollIntoView({ behavior: 'instant' }));
  }
})();
