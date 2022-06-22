import React from 'react'

const TeamStatSingle = ({player, roundsPlayed, playersAdditional}) => {
    let MK = playersAdditional[player.puuid]?.MK || 0;
  return (
    <tr >
         <td >
            <a href={`/?user=${player.name}&tag=${player.tag}`} className="">
               <div className="flex agent">
                  <div className="agent-icon"><img src={player.assets.agent.small}/></div>
                   
                  <span data-v-5e03e686="" className="trn-ign">
                     <span data-v-5e03e686="" className="trn-ign__username">
                     {player.name}
                     </span> <span data-v-5e03e686="" className="trn-ign__discriminator">
                     #{player.tag}
                     </span> 
                  </span>
               </div>
            </a>
         </td>
         <td >
            <div className="flex rank"><img src={`https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/${player.currenttier}.png`} title={player.currenttier_patched}/></div>
         </td>
         {/* let ADR = playerData.damage_made / val.metadata.rounds_played;    */}
         <td >{(player.stats.score/roundsPlayed).toFixed(0)}</td>
         <td >{player.stats.kills}</td>
         <td >{player.stats.deaths}</td>
         <td >{player.stats.assists}</td>
         <td className={player.stats.kills==player.stats.deaths?"neutral":(player.stats.kills>player.stats.deaths?"positive":"negative")}>{player.stats.kills>player.stats.deaths?"+":""}{player.stats.kills - player.stats.deaths}</td>
         <td >{(player.stats.kills / player.stats.deaths).toFixed(1)}</td>
         <td >{(player.damage_made / roundsPlayed).toFixed(1)}</td>
         <td >{(player.stats.headshots / (player.stats.headshots + player.stats.bodyshots + player.stats.legshots) *100).toFixed(0)}</td>
         <td >0</td>
         <td >0</td>
         <td >{MK}</td>
         <td >{(player.damage_made / (player.economy.spent.overall/1000)).toFixed(0)}</td>
      </tr>
  )
}

export default TeamStatSingle