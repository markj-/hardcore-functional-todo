import {
  liftA2
} from 'pointfree-fantasy';
import {
  compose,
  map,
  head,
  prop
} from 'ramda';
import log from 'utils/log';
import {
  cgetDom,
  setHtml
} from 'utils/dom';
import {
  subscribe,
  listen
} from 'utils/streams';
import runIO from 'utils/run-io';
import getMaybeValue from 'utils/get-maybe-value';

const buttonClickStream = compose(map(map(listen('click'))), map(map(head)), cgetDom('button'));

const getTodoHtml = (todo: string) => `<li>${todo}</li>`;

const getTodoInput = compose(map(map(head)), cgetDom('.todo-input'));

const getTodo = compose(getMaybeValue, runIO, map(map(getTodoHtml)), map(map(prop('value'))), getTodoInput);

const getTodosList = compose(getMaybeValue, runIO, map(map(head)), cgetDom('ul'));

const addTodo = compose(runIO, liftA2(setHtml, getTodosList, getTodo));

const main = compose(map(map(subscribe(addTodo, log))), buttonClickStream);

runIO(main());
