import React from 'react'
import { useNavigate } from 'react-router-dom';

const TeamStatSingle = ({player, roundsPlayed, playersAdditional, isShort, revealAgent}) => {
    let MK = playersAdditional[player.puuid]?.MK || 0;
    let FD = playersAdditional[player.puuid]?.FD || 0;
    let FK = playersAdditional[player.puuid]?.FK || 0;
    const navigate = useNavigate();

    const agentClick = ()=>{
       if(isShort){
          revealAgent(player.puuid);
       } else {
         navigate(`/?user=${player.name}&tag=${player.tag}`);

       }
    }

  return (
    <tr >
         <td >
               <div className="flex agent" onClick={()=>agentClick()}>
                  <div className="agent-icon"><img src={player.assets.agent.small}/></div>
                   
                  <span data-v-5e03e686="" className="trn-ign">
                     <span data-v-5e03e686="" className="trn-ign__username">
                     {player.name}
                     </span> <span data-v-5e03e686="" className="trn-ign__discriminator">
                     #{player.tag}
                     </span> 
                  </span>
               </div>
         </td>
         <td >
            <div className="flex rank"><img src={`https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/${player.currenttier}.png`} title={player.currenttier_patched}/></div>
         </td>
         {/* let ADR = playerData.damage_made / val.metadata.rounds_played;    */}
         <td >{(player.stats.score/roundsPlayed).toFixed(0)}</td>
         <td >{player.stats.kills}</td>
         <td >{player.stats.deaths}</td>
         <td >{player.stats.assists}</td>
         {isShort?<></>:<>
         <td className={player.stats.kills==player.stats.deaths?"neutral":(player.stats.kills>player.stats.deaths?"positive":"negative")}>{player.stats.kills>player.stats.deaths?"+":""}{player.stats.kills - player.stats.deaths}</td>
         <td >{(player.stats.kills / player.stats.deaths).toFixed(1)}</td>
         <td >{(player.damage_made / roundsPlayed).toFixed(1)}</td>
         <td >{(player.stats.headshots / (player.stats.headshots + player.stats.bodyshots + player.stats.legshots) *100).toFixed(0)}</td>
         <td >{FK}</td>
         <td >{FD}</td>
         <td >{MK}</td>
         <td >{(player.damage_made / (player.economy.spent.overall/1000)).toFixed(0)}</td>
         </>}         
      </tr>
  )
}

export default TeamStatSingle