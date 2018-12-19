
import { createStackNavigator,createAppContainer } from 'react-navigation';
import SearchComponent from './SearchComponent';
import Jobs from './jobs';
const Tabs = createStackNavigator({
        SearchComponent:  {screen: SearchComponent},
        Jobs: { screen: Jobs }
  });

  const Container = createAppContainer(Tabs);

 export default Container;
