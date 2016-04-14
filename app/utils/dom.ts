import {
  Maybe,
  IO
} from 'ramda-fantasy';

function $(el) {
  const els = document.querySelectorAll(el);
  return els && els.length ? els : null;
}

export function getDom(el) {
  return IO.of(Maybe($(el)));
}

export function cgetDom(el) {
  return () => getDom(el);
}
