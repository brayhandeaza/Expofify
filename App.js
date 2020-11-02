import React, { Fragment }  from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'

// Views && Components
import Footer from './src/components/Footer'
import Player from './src/components/Player'
import Home from './src/views/Home'
import Search from './src/views/Search'
import Library from './src/views/Library'
import Premium from './src/views/Premium'
import PlayerView from './src/views/Player'

// Redux
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import ReduxDevTools from 'remote-redux-devtools';
import reducers from './src/redux/reducers/index'


const store = createStore(reducers)

function App() {
  return (
    <Fragment >
      <Provider store={store}>
        <Router store={store}>
          <Scene store={store} tabs hideTabBar key="root">
            <Scene modal key='footer' component={Footer} hideNavBar/>
            <Scene modal key='play' component={Player} hideNavBar/>
            <Scene key='Home' component={Home}  hideNavBar gesturesEnable={false} initial />
            <Scene key='Search' component={Search} hideNavBar gesturesEnable={false}/>
            <Scene key='Library' component={Library} hideNavBar gesturesEnable={false}/>
            <Scene key='Premium' component={Premium} hideNavBar gesturesEnable={false}/>
            <Scene modal direction="vertical" key='player' component={PlayerView} hideNavBar />
          </Scene>
        </Router>
        <Player/>
        <Footer/> 
      </Provider>
    </Fragment>
  )
}


export default App
