import {
  Maybe,
  IO
} from 'ramda-fantasy';

function log(value) {
  console.log(value);
  return value;
}

function $(el) {
  return IO.of(Maybe(document.querySelectorAll(el)))
}

function c$(el) {
  return () => $(el);
}
