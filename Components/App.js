
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Feedback from './FeedBack/FeedBack';

const RootStack = createStackNavigator(
    {

        Main: Main,
        Authentication: Authentication,
        ChangeInfo: ChangeInfo,
        FeedBack: Feedback
    },
    {
        initialRouteName: 'Main',
    }

);

export default createAppContainer(RootStack);



