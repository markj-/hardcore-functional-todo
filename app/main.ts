import {
  compose,
  map,
  head,
  prop
} from 'ramda';
import {
  IO
} from 'ramda-fantasy';
import log from 'utils/log';
import {
  cgetDom
} from 'utils/dom';
import {
  subscribe,
  listen
} from 'utils/streams';

const buttonClickStream = compose(map(map(listen('click'))), map(map(head)), cgetDom('button'));

const getTodoHtml = (todo: string) => `<li>${todo}</li>`;

const getTodoInput = compose(map(map(head)), cgetDom('.todo-input'));

const getTodo = compose(map(map(getTodoHtml)), map(map(prop('value'))), getTodoInput);

const addTodo = compose(map(log), IO.runIO, getTodo);

const main = compose(map(map(subscribe(addTodo, log))), buttonClickStream);

main().runIO();
