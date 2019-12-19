import {Header} from './containers/header/header';
import {Main} from './containers/main/main';
import {Footer} from './containers/footer/footer';
import {disableButton} from './containers/main/main-controller';
import './app.css';

app.append(Header());
app.append(Main());
app.append(Footer());
disableButton();
