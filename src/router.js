
import { createStackNavigator,createAppContainer } from 'react-navigation';
import SearchComponent from './SearchComponent';
import Jobs from './jobs';
import Job from './Job';
const Tabs = createStackNavigator({
        SearchComponent:  {screen: SearchComponent},
        Jobs: { screen: Jobs },
        Job: { screen: Job }
  });

  const Container = createAppContainer(Tabs);

 export default Container;
