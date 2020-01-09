import far from './far';
import fas from './fas';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add.apply(library, fas.concat(far));
