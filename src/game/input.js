let queued = false;
let available = false;

function onKeyDown(event) {
  if (event.code !== "Space") {
    return;
  }
  event.preventDefault();
  if (event.repeat) {
    return;
  }
  queued = true;
}

function onPointerDown() {
  queued = true;
}

export function init() {
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("pointerdown", onPointerDown);
}

export function poll() {
  available = queued;
  queued = false;
}

export function consumeAction() {
  if (available) {
    available = false;
    return true;
  }
  return false;
}
