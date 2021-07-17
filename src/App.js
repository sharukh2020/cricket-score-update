import React from 'react'
import ScorePage from './ScorePage';
import ScoreUpdatePage from './ScorePageUpdate';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Link} from "react-router-dom"
import classes from './App.module.css'

class App extends React.Component{ 
 render(){
   return(
     <BrowserRouter>
       <div className={classes.Topbar}>
          <Link to="/">
              <button>ScorePage</button>
          </Link>
          <Link to="/score-update-page">
              <button>ScoreUpdatePage</button>
          </Link>
        </div>
       <Switch>
         <Route path="/score-update-page" component={ScoreUpdatePage} />
         <Route path="/" component={ScorePage}/>
       </Switch>
     </BrowserRouter>
   )
 }
}

export default App
