import React from 'react'
import classes from './ScorePageUpdate.module.css'
import Axios from 'axios'

class ScoreUpdatePage extends React.Component{
    cricketScoreUpdate=(e)=>{
        e.preventDefault()
        let updatedData={
            id:'1',
            score:e.target.score.value,
            wickets:e.target.wickets.value,
            overs:e.target.overs.value
        }
        e.target.score.value=''
        e.target.wickets.value=''
        e.target.overs.value=''
        Axios.put('https://5e3a33558d7e1300149cd8d8.mockapi.io/cricketscore/1',updatedData)
        .then(()=>{
            alert("Score Updated")
        })

    }
    render(){
        return(
            <div className={classes.ScoreUpdatePage}>
             <div className={classes.FormContainer}>
              <form id="form" onSubmit={(e)=>{this.cricketScoreUpdate(e)}}>
                <div>
                    <input type="text" name="score" placeholder="Score"/>
                </div>
                <div>
                    <input type="text" name="wickets" placeholder="Wickets"/>
                </div>
                <div>
                    <input type="text" name="overs" placeholder="Overs"/>
                </div>
                <input type="submit" value="Update"/>
              </form>
             </div>
            </div>
        )
    }
}

export default ScoreUpdatePage