import {
  curry
} from 'ramda';
import {
  Maybe,
  IO
} from 'ramda-fantasy';

function $(el) {
  return document.querySelectorAll(el) || null;
}

function getDom(el) {
  return IO.of(Maybe($(el)));
}

function cgetDom(el) {
  return () => getDom(el);
}

const setHtml = curry((el, html) => {
  return IO(() => {
    el.innerHTML = html;
  });
});

export {
  getDom,
  cgetDom,
  setHtml
};
