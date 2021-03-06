import React from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import axios from 'axios';
export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      jobs: []
    };
  }

  render() {
    return (  
      <View style={styles.main}>
        <Text style={styles.description}>
          Job Search
        </Text>
        <View style={styles.flowRight}>
        <TextInput
          underlineColorAndroid={'transparent'}
          style={styles.searchInput}
          placeholder='Search'
          onChangeText={(searchString) =>  this.setState(()=>({
            searchString: searchString
          }))}  />
      </View>

      <Button style={styles.button}
      title = "Search"
      onPress={() =>{

      axios.get("https://jobs.github.com/positions.json")
      .then((res)=> {
        let x = 0;
        let job = [];
        for(x = 0; x < res.data.length; x++){
          if(this.state.searchString != "Search"){
            var busqueda = this.state.searchString;
            if(res.data[x].title.includes(busqueda)){
              job.push(res.data[x]);
            }
          }
        }
        console.log(res.data.length);
        this.setState(() => ({jobs: job}));
        console.log(this.state.jobs.length);
        this.props.navigation.navigate('Jobs', {jobs: this.state.jobs}); 
      })
      .catch(err => console.log(err.message)); //eslint-disable-lint
    } 
    }

    
      title="Button"
      />

      </View>
    )
  }
}




const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    color: '#656565',
    marginTop: 50,
  },
  flowRight: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 8,
  },

  button: {
    margin: 20,
    width: 400,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

