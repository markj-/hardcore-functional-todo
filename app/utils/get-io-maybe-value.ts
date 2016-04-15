import {
  compose
} from 'ramda';
import runIO from 'utils/run-io';
import getMaybeValue from 'utils/get-maybe-value';

export default compose(getMaybeValue, runIO);
