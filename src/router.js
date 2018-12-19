
import { createStackNavigator } from 'react-navigation';
import SearchComponent from './SearchComponent';

const Tabs = createStackNavigator({
        SearchComponent:  {screen: SearchComponent},
  });


 export default Tabs;
