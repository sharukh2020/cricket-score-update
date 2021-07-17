import React from 'react'
import classes from './ScorePage.module.css'
import {Link} from "react-router-dom"
import Axios from 'axios'

class ScorePage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      cricketData:[]
    }
  }
  componentDidMount(){
     setInterval(() => {
      Axios.get('https://5e3a33558d7e1300149cd8d8.mockapi.io/cricketscore')
      .then((response)=>{
        this.setState({cricketData:[...response.data]})
        console.log(response.data[0])
      })
    }, 3000);
   
  }
      render(){
        const TeamB=this.state.cricketData.map((item,pos)=>{
          return(
            <div className={classes.TeamB} key={item.id}>
                 <span>IND</span>
                 <span>{`${item.score}/${item.wickets}`}</span>
                 <span>{`(${item.overs})`}</span>
            </div>
          )
        })
        return(
          <div className={classes.MainContainer}>
              <div>
                <Link to="/">
                   <button>ScorePage</button>
                </Link>
                <Link to="/score-update-page">
                   <button>ScoreUpdatePage</button>
                </Link>
              </div>
              <div className={classes.TeamA}>
                 <span>ENG</span>
                 <span>160/7</span>
                 <span>(20)</span>
              </div>
              {TeamB}    
          </div>
        )
      }
}

export default ScorePage