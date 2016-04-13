import {
  Maybe,
  IO
} from 'ramda-fantasy';

function $(el) {
  return IO.of(Maybe(document.querySelectorAll(el)))
}

function c$(el) {
  return () => $(el);
}
