import Rx from 'rxjs';
import {
  curry
} from 'ramda';

const listen = curry((event: string, element: HTMLElement) => {
  return Rx.Observable.fromEvent(element, event);
});

const subscribe = curry((success, error, stream) => {
  stream.subscribe(success, error);
});

export {
  listen,
  subscribe
};
