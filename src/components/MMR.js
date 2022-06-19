import React from 'react'

const MMR = ({data}) => {
  return (
    data.data.map((val)=>{
        return(
            <div class="singleMMR" style={{borderColor:val.mmr_change_to_last_game>0?"green":"red"}} key={val.date_raw}>
                <p>Current Tier: {val.currenttierpatched}</p>
                <p>Current RR: {val.ranking_in_tier}</p>
                <p>Change in RR: {val.mmr_change_to_last_game>0?`+${val.mmr_change_to_last_game}`:val.mmr_change_to_last_game}</p>
                <p>Date: {val.date}</p>
                <p>ELO: {val.elo}</p>
            </div>
        )
    })
  )
}

export default MMR