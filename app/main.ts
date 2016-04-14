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

const getTodoText = compose(map(map(prop('value'))), map(map(head)), cgetDom('.todo-input'));

const addTodo = compose(map(log), IO.runIO, getTodoText);

const main = compose(map(subscribe(addTodo, log)), IO.runIO, buttonClickStream);

main();
