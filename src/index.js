import './reset.scss';
import './public/style.scss';
// import Key from './components/Key';
// import Row from './components/Row';
import { KEYS } from './constant/keys';
import KeysContainer from './components/KeysContainer';
import Textarea from './components/Textarea';

const text = new Textarea();
const keyboard = new KeysContainer(KEYS);
document.body.append(text.unit, keyboard.unit);
