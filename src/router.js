
import { createStackNavigator,createAppContainer } from 'react-navigation';
import SearchComponent from './SearchComponent';

const Tabs = createStackNavigator({
        SearchComponent:  {screen: SearchComponent},
  });

  const Container = createAppContainer(Tabs);

 export default Container;
