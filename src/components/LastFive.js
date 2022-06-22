import React from 'react'
import { useNavigate } from "react-router-dom";

const LastFive = ({data, mmr, username, tag}) => {
   // console.log(data)
   const navigate = useNavigate();
   function compare( a, b ) {
      if ( a.stats.score > b.stats.score ){
        return -1;
      }
      if ( a.stats.score < b.stats.score ){
        return 1;
      }
      return 0;
    }

    function ordinal_suffix_of(i) {
      var j = i % 10,
          k = i % 100;
      if (j == 1 && k != 11) {
          return i + "st";
      }
      if (j == 2 && k != 12) {
          return i + "nd";
      }
      if (j == 3 && k != 13) {
          return i + "rd";
      }
      return i + "th";
  }
  

    
  return (
      <div className="row__holder" >
    {data.data.map((val,i)=>{
    
    let playerData=val.players.all_players.find((player)=>player.name===username && player.tag===tag);
    let allPlayers=val.players.all_players.sort(compare);
    let playerPosition=allPlayers.findIndex(x => x.name ===username);
    playerPosition++;
   //  console.log(val)
    val.players.all_players.sort( function( a , b){
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
  });
  
    let team,current_win, win;
    if(val.metadata.mode!=="Deathmatch"){
      team = playerData.team;
      team=team.toLowerCase()
      current_win = val.teams[`${team}`];
      win = current_win.has_won;
   }
   var date = new Date((val.metadata.game_start) * 1000);
   var hr = date.getHours();
   var mn = date.getMinutes();
   // Seconds part from the timestamp
   var dd = date.getDate();
   var mm = date.getMonth();
   var yyyy = date.getFullYear();
   
   let ADR = playerData.damage_made / val.metadata.rounds_played;   
   let ACS = (playerData.stats.score/val.metadata.rounds_played).toFixed(0);
   let HS = playerData.stats.headshots / (playerData.stats.headshots + playerData.stats.bodyshots + playerData.stats.legshots) *100;
        return(
            <div onClick={()=>navigate(`/match/${val.metadata.matchid}`)} key={val.metadata.matchid} className={win?"match team-won":"match team-lost"}>
   <div className="match__row">
      <div className="match__portrait">
          <img data-v-7c8e0719="" src={playerData.assets.agent.small}/></div>
          {(val.metadata.mode!=="Deathmatch")?<div className={`match__rr ${mmr[i].mmr_change_to_last_game>0?"green":"red"}`}>{mmr[i].mmr_change_to_last_game>0?`+${mmr[i].mmr_change_to_last_game}`:`${mmr[i].mmr_change_to_last_game}`} RR</div>:null}
      <div className="match__details">
         <div className="match__title"><span data-v-7c8e0719="" className="match__name">{val.metadata.map}</span> <p data-v-7c8e0719="" className="match__time">{`${dd}/${mm}/${yyyy} ${hr}:${mn}`}</p></div>
         <div className="match__subtitle">
             <img data-v-7c8e0719="" src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/modes/normal.png" className="match__mode-icon"/>
            {val.metadata.mode}
         </div>
      </div>
      <div className="match__results">
         <div data-v-7c8e0719="" className="match__rating">
             <img data-v-7c8e0719="" src={`https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/${playerData.currenttier}.png`} className="rank"/></div>
        <div data-v-7c8e0719="" className="match__performance">
        {(val.metadata.mode!=="Deathmatch")?( 
            <div data-v-7c8e0719="" className="match__score stat"><span data-v-7c8e0719="" className="stat__value"><span data-v-7c8e0719="" className="score--won">{current_win.rounds_won}</span> <span data-v-7c8e0719="" className="score--separator"> : </span> <span data-v-7c8e0719="" className="score--lost">{current_win.rounds_lost}</span></span></div>
            ):null}
            <div data-v-7c8e0719="" className="match__badge">
               <div data-v-7c8e0719="" className="badge">{ordinal_suffix_of(playerPosition)}</div>
            </div>
         </div>
      </div>
      <div className="match__row-stats">
         <div data-v-7c8e0719="" className="stat">
            <div data-v-7c8e0719="" className="label">K / D / A</div>
            <div data-v-7c8e0719="" className="value">{playerData.stats.kills} / {playerData.stats.deaths} / {playerData.stats.assists}</div>
         </div>
         <div data-v-7c8e0719="" className="stat">
            <div data-v-7c8e0719="" className="label">K/D</div>
            <div data-v-7c8e0719="" className="value value--won">{(playerData.stats.kills/playerData.stats.deaths).toFixed(2)}</div>
         </div>
         <div data-v-7c8e0719="" className="stat">
            <div data-v-7c8e0719="" className="label">HS%</div>
            <div data-v-7c8e0719="" className="value">{HS.toFixed(0)}</div>
         </div>
        {(val.metadata.mode!=="Deathmatch")?( 
         <div data-v-7c8e0719="" className="stat">
            <div data-v-7c8e0719="" className="label">ADR</div>
            <div data-v-7c8e0719="" className="value">{ADR.toFixed(0)}</div>
         </div>
        ):null}
         <div data-v-7c8e0719="" className="stat collapse">
            <div data-v-7c8e0719="" className="label">ACS</div>
            <div data-v-7c8e0719="" className="value">{ACS}</div>
         </div>
      </div>
      <a href="/valorant/match/f4dc1e04-f4de-406f-9414-2144b885c862?handle=rohitJod%234324" className="match__link"></a>
   </div>
</div>

        )
    })}  </div>)
}

export default LastFive