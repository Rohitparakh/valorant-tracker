import React from 'react'

const MMR = ({data}) => {
  return (
    data.data.map((val,i)=>{
        if(i<=4) return;
        // console.log(val)
        return(
            <div className={`singleMMR ${val.mmr_change_to_last_game>0?"team-won":"team-lost"}`} key={val.date_raw}>
             <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><img src={`https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/${val.currenttier}.png`} className="rank"/>
                <p>{val.currenttierpatched}</p>
                </div>
                <p className={`rr match__rr ${val.mmr_change_to_last_game>0?"green":"red"}`} > {val.mmr_change_to_last_game>0?`+${val.mmr_change_to_last_game}`:val.mmr_change_to_last_game} RR</p>
                <p>Current RR: {val.ranking_in_tier} /100</p>
                <p className="match__time"> {val.date}</p>
                <p>ELO: {val.elo}</p>
            </div>
//             <div data-v-7c8e0719="" className="match match--won" data-v-e8741648="">
//    <div className="match__row">
//       <div className="match__portrait"><img data-v-7c8e0719="" src="https://titles.trackercdn.com/valorant-api/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png"/></div>
//       <div className="match__details">
//          <div className="match__title"><span data-v-7c8e0719="" className="match__name">Icebox</span> <span data-v-7c8e0719="" className="match__time">{val.date}</span></div>
//          <div className="match__subtitle"><img data-v-7c8e0719="" src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/modes/normal.png" className="match__mode-icon"/>
//             Competitive
//          </div>
//       </div>
//       <div className="match__results">
//          <div data-v-7c8e0719="" className="match__rating"><img data-v-7c8e0719="" src={`https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/${val.currenttier}.png`} className="rank"/></div>
//          <div data-v-7c8e0719="" className="match__performance">
//             <div data-v-7c8e0719="" className="match__score stat"><span data-v-7c8e0719="" className="stat__value"><span data-v-7c8e0719="" className="score--won">13</span> <span data-v-7c8e0719="" className="score--separator"> : </span> <span data-v-7c8e0719="" className="score--lost">5</span></span></div>
//             <div data-v-7c8e0719="" className="match__badge">
//                <div data-v-7c8e0719="" className="badge">7th</div>
//             </div>
//          </div>
//       </div>
//       <div className="match__row-stats">
//          <div data-v-7c8e0719="" className="stat">
//             <div data-v-7c8e0719="" className="label">K / D / A</div>
//             <div data-v-7c8e0719="" className="value">11 / 14 / 4</div>
//          </div>
//          <div data-v-7c8e0719="" className="stat">
//             <div data-v-7c8e0719="" className="label">K/D</div>
//             <div data-v-7c8e0719="" className="value value--lost">0.8</div>
//          </div>
//          <div data-v-7c8e0719="" className="stat">
//             <div data-v-7c8e0719="" className="label">HS%</div>
//             <div data-v-7c8e0719="" className="value">17</div>
//          </div>
//          <div data-v-7c8e0719="" className="stat">
//             <div data-v-7c8e0719="" className="label">ADR</div>
//             <div data-v-7c8e0719="" className="value">129</div>
//          </div>
//          <div data-v-7c8e0719="" className="stat collapse">
//             <div data-v-7c8e0719="" className="label">ACS</div>
//             <div data-v-7c8e0719="" className="value">179</div>
//          </div>
//       </div>
//       <a href="/valorant/match/27ca8163-8968-4c59-bffe-cfa697745ab1?handle=rishxhub%23god" className="match__link"></a>
//    </div>
// </div>
        )
    })
  )
}

export default MMR

// import React from 'react'

// const LastFive = ({data, username, tag}) => {
//    function compare( a, b ) {
//       if ( a.stats.score > b.stats.score ){
//         return -1;
//       }
//       if ( a.stats.score < b.stats.score ){
//         return 1;
//       }
//       return 0;
//     }

//     function ordinal_suffix_of(i) {
//       var j = i % 10,
//           k = i % 100;
//       if (j == 1 && k != 11) {
//           return i + "st";
//       }
//       if (j == 2 && k != 12) {
//           return i + "nd";
//       }
//       if (j == 3 && k != 13) {
//           return i + "rd";
//       }
//       return i + "th";
//   }
  

    
//   return (
//       <div className="row__holder">
//     {data.data.map((val,i)=>{
    
//     let playerData=val.players.all_players.find((player)=>player.name===username && player.tag===tag);
//     let allPlayers=val.players.all_players.sort(compare);
//     let playerPosition=allPlayers.findIndex(x => x.name ===username);
//     playerPosition++;
//     console.log(val)
//     val.players.all_players.sort( function( a , b){
//       if(a > b) return 1;
//       if(a < b) return -1;
//       return 0;
//   });
  
//     let team,current_win, win;
//     if(val.metadata.mode!=="Deathmatch"){
//       team = playerData.team;
//       team=team.toLowerCase()
//       current_win = val.teams[`${team}`];
//       win = current_win.has_won;
//    }

//    let ADR = playerData.damage_made / val.metadata.rounds_played;
//    // console.log(playerData.stats.headshots/(playerData.stats.headshots+playerData.stats.bodyshots+playerData.stats.legshots)*100)
//    let HS = playerData.stats.headshots / (playerData.stats.headshots + playerData.stats.bodyshots + playerData.stats.legshots) *100;
//    console.log(HS===NaN)
//         return(
//             <div key={val.metadata.matchid} className={win?"match team-won":"match team-lost"}>
//    <div className="match__row">
//       <div className="match__portrait">
//           <img data-v-7c8e0719="" src={playerData.assets.agent.small}/></div>
//       <div className="match__details">
//          <div className="match__title"><span data-v-7c8e0719="" className="match__name">{val.metadata.map}</span> <p data-v-7c8e0719="" className="match__time">{val.metadata.game_start_patched}</p></div>
//          <div className="match__subtitle">
//              <img data-v-7c8e0719="" src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/modes/normal.png" className="match__mode-icon"/>
//             {val.metadata.mode}
//          </div>
//       </div>
//       <div className="match__results">
//          <div data-v-7c8e0719="" className="match__rating">
//              <img data-v-7c8e0719="" src={`https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/${playerData.currenttier}.png`} className="rank"/></div>
//         <div data-v-7c8e0719="" className="match__performance">
//         {(val.metadata.mode!=="Deathmatch")?( 
//             <div data-v-7c8e0719="" className="match__score stat"><span data-v-7c8e0719="" className="stat__value"><span data-v-7c8e0719="" className="score--won">{current_win.rounds_won}</span> <span data-v-7c8e0719="" className="score--separator"> : </span> <span data-v-7c8e0719="" className="score--lost">{current_win.rounds_lost}</span></span></div>
//             ):null}
//             <div data-v-7c8e0719="" className="match__badge">
//                <div data-v-7c8e0719="" className="badge">{ordinal_suffix_of(playerPosition)}</div>
//             </div>
//          </div>
//       </div>
//       <div className="match__row-stats">
//          <div data-v-7c8e0719="" className="stat">
//             <div data-v-7c8e0719="" className="label">K / D / A</div>
//             <div data-v-7c8e0719="" className="value">{playerData.stats.kills} / {playerData.stats.deaths} / {playerData.stats.assists}</div>
//          </div>
//          <div data-v-7c8e0719="" className="stat">
//             <div data-v-7c8e0719="" className="label">K/D</div>
//             <div data-v-7c8e0719="" className="value value--won">{(playerData.stats.kills/playerData.stats.deaths).toFixed(2)}</div>
//          </div>
//          <div data-v-7c8e0719="" className="stat">
//             <div data-v-7c8e0719="" className="label">HS%</div>
//             <div data-v-7c8e0719="" className="value">{HS.toFixed(0)}</div>
//          </div>
//         {(val.metadata.mode!=="Deathmatch")?( 
//          <div data-v-7c8e0719="" className="stat">
//             <div data-v-7c8e0719="" className="label">ADR</div>
//             <div data-v-7c8e0719="" className="value">{ADR.toFixed(0)}</div>
//          </div>
//         ):null}
//          <div data-v-7c8e0719="" className="stat collapse">
//             <div data-v-7c8e0719="" className="label">ACS</div>
//             <div data-v-7c8e0719="" className="value">{(playerData.stats.score/val.metadata.rounds_played).toFixed(0)}</div>
//          </div>
//       </div>
//       <a href="/valorant/match/f4dc1e04-f4de-406f-9414-2144b885c862?handle=rohitJod%234324" className="match__link"></a>
//    </div>
// </div>

//         )
//     })}  </div>)
// }

// export default LastFive