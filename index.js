/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import AppTest from './Test/App';
import Main from './Components/App';

import Home from './Components/Main/Home/Home';

import Tabnavigator from './Components/Main/Tabnavigator';

import TestMultiModal from './Components/Main/Catalogy/QuyTrinh/TestMultiModal';
import AppCatalogy from './Components/Main/Catalogy/AppCatalogy';

import Login from './Components/Authentication/Login';
import Authentication from './Components/Authentication/Authentication';
import ChangeInfor from  './Components/ChangeInfo/ChangeInfo';
import Kho from './Components/Main/Kho/Kho';

import TestShape from './Components/Main/Catalogy/QuyTrinh/TestShape';

AppRegistry.registerComponent(appName, () => Main);
