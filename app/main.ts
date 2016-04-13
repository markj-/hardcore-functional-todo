import Rx from 'rxjs';
import {
  curry,
  compose,
  map
} from 'ramda';
import {
  Maybe,
  IO
} from 'ramda-fantasy';

function log(value) {
  console.log(value);
  return value;
}

function $(el) {
  const els = document.querySelectorAll(el);
  return els && els.length ? els : null;
}

function getDom(el) {
  return IO.of(Maybe($(el)));
}

function cgetDom(el) {
  return () => getDom(el);
}

const listen = curry((event: string, element: HTMLElement) => {
  return Rx.Observable.fromEvent(element, event);
});
