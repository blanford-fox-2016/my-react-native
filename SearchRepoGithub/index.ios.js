// import App from './app';
// export default App;

import React, {Component} from 'react'
import  {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'
import App from './app/containers/App'
import configureStore from './app/store'

const store  = configureStore()

class SearchRepoGithub extends Component {
  render() {
    return(
      <Provider store={store}>
      <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('SearchRepoGithub', () => SearchRepoGithub);
