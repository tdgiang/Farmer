
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Catalogy from './Catalogy';
import QuyTrinh from './QuyTrinh/TestMultiModal';

const RootStack = createStackNavigator(
    {
        Catalogy:Catalogy,
        QuyTrinh:QuyTrinh
    },
    {
        initialRouteName: 'Catalogy',
    }

);

export default createAppContainer(RootStack);



