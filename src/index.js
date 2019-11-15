import * as serviceWorker from './serviceWorker';
import Data from "./data";
import {renderTree} from "./render";

renderTree(Data);

serviceWorker.unregister();
