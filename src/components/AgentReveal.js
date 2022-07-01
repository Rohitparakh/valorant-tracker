import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const AgentReveal = ({agent, match, agentAdditional, team}) => {
    console.log(match)
    // console.log(agent.puuid)
    let playerDeath=[{}];
    const [playerDeaths, setPlayerDeaths] = useState({})
    const [loading,setLoading] = useState(true)
    const [multiDeath, setmultiDeath] = useState(false)
   

    useEffect(()=>{
       if(loading===false){
            playerDeath.map((death,i)=>{
                console.log(death?.[agent.puuid])
                if(death?.[agent.puuid]>=2){
                    setmultiDeath(true);
                    return
                }
        
            })
        }
    },[loading])
    // console.log(playerDeaths)
// console.log(team)
  return (
   <>
    <div className="overview__agent">
   <div className="agent-details agent-details--2">
      <div className="agent-details__summary" style={{"--team-background-color":`${team==="blue"?"#00554d":"#52222f"}`, "--team-color":`${team==="blue"?"#00eab1":"#ff294e"}`, "--agent-hero-url":`url(https\:\/\/trackercdn\.com\/cdn\/tracker\.gg\/valorant\/db\/agents\/${agent.character.toLowerCase()}_portrait\.png)`}}>
         <div className="agent-details__summary-header">
            <img src={agent.assets.agent.small} alt={agent.character} className="agent-portrait"/> 
            <span className="trn-ign agent-details__ign">
               <span className="trn-ign__username">
               {agent.name}
               </span> <span className="trn-ign__discriminator">
               #{agent.tag}
               </span>
            </span>
            <Link to={`/?user=${agent.name}&tag=${agent.tag}`} className="trn-button view-profile">View Profile</Link>
         </div>
         <div className="agent-details__summary-content">
            <div className="agent-details__summary-stats">
               <div className="stat"><span className="stat__label">Avg. Score</span> <span className="stat__value">{(agent.stats.score/match.data.metadata.rounds_played).toFixed(0)}</span></div>
               <div className="stat"><span className="stat__label">K/D/A</span> <span className="stat__value">{agent.stats.kills} <span className="text-disabled">/</span> {agent.stats.deaths} <span className="text-disabled">/</span> {agent.stats.assists}</span></div>
            </div>
            <div className="agent-details__summary-medals">
               <h3>Medals Earned</h3>
               <div className="agent-details__summary-medals-grid">
                  
               {(agentAdditional.MK>0)?(<div className="medal"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/medal-3k.png" alt="Three-kills" title="Three-kills"/>{agentAdditional.MK}</div>):(<></>)}

                  <div className="medal"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/medal-kills.png" alt="Kills per Round" title="Kills per Round"/>
                     {(agent.stats.kills/match.data.metadata.rounds_played).toFixed(1)}
                  </div>
                  <div className="medal medal--gold"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/medal-round-damage.png" alt="Damage per Round" title="Damage per Round"/>
                     {(agent.damage_made/match.data.metadata.rounds_played).toFixed(1)}
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="agent-details__timeline">
         <div className="round-timeline trn-grid trn-grid--vertical trn-grid--small">
         
            <div className="round-timeline__rounds">
                {match.data.rounds.map((round,i)=>{
                //    console.log(multiDeath)
                    let win = round.winning_team.toLowerCase()===team?"won":"lost";
                    let player = round.player_stats.filter((player)=>{
                        return player.player_puuid === agent.puuid
                    })
                    player=player[0];

                    let killsHtml="";
                    for (let index = 0; index < player.kills; index++) {
                        killsHtml+="<img src='https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png' alt='Kill' class='icon'/>"
                    }

                    round.player_stats.map((player)=>{
                        let roundDeaths={};
                        player.kill_events?.map((kill_event)=>{
                            roundDeaths={[kill_event.victim_puuid]:[kill_event.victim_puuid]+1 || 1}
                            let pd = playerDeath[i]?.[kill_event.victim_puuid] || 0;
                            pd=pd+1;
                            // console.log(pd)
                            playerDeath[i]={
                                ...playerDeath[i],
                                [kill_event.victim_puuid]: pd
                            }
                            // playerDeath[i][kill_event.victim_puuid] = playerDeath[i][kill_event.victim_puuid]+1;
                            // setPlayerDeaths(deaths=>({
                            //     ...deaths,
                            //     [i]:{
                            //         ...deaths[i],
                            //         [kill_event.victim_puuid]: 1
                            //     }
                            // }));
                    

                        })
                    })
                    // let playerDeathRound=playerDeaths[i];
                    if (i+1==match.data.metadata.rounds_played){
                        // setPlayerDeaths(playerDeath)
                        // console.log(match.data.metadata.rounds_played)
                        
                    }

                    let deathsHtml="";
                    for (let index = 0; index < playerDeath[i][agent.puuid]; index++) {
                        deathsHtml+="<img src='https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png' alt='Death' class='icon'/>"
                    }
                    // console.log(playerDeath[i]?.[agent.puuid])
                    if(i+1===match.data.metadata.rounds_played){
                        // console.log(i+1)/
                        // console.log(match.data.metadata.rounds_played)
                    }
                   

                    return(<><div className={`round ${win}  ${multiDeath?'multi-death':''} round--selectable`} key={i}>
                    <div className="kills" dangerouslySetInnerHTML={{__html:killsHtml}}>
                    </div>
                    <div className="result"></div>
                    <div className={`deaths ${multiDeath?'multi-death':''}`} dangerouslySetInnerHTML={{__html:deathsHtml}}></div>
                    <div className="number">{i+1}</div>
                    </div>
                    {i===11? <div className={`round switch  ${multiDeath?'multi-death':''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon">
                       <path d="M0 176a16 16 0 0016 16h138.7a16 16 0 0011.3-27.3l-60-60c39.3-39 92.6-62 150-62A213.6 213.6 0 01469.3 256a21.3 21.3 0 1042.7 0C512 114.8 397.2 0 256 0A255 255 0 0075.6 74.3L27.3 26A16 16 0 000 37.3zm512 160a16 16 0 00-16-16H357.3a16 16 0 00-11.3 27.3l60 60c-39.3 39-92.6 62-150 62A213.6 213.6 0 0142.7 256 21.3 21.3 0 100 256c0 141.2 114.8 256 256 256a255 255 0 00180.4-74.3l48.3 48.3a16 16 0 0027.3-11.3zm0 0"></path>
                    </svg>
                 </div>:null}
                 </>
                    )     
                })}
               {/* <div className="round lost round--selectable">
                  <div className="kills"></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">1</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">2</div>
               </div>
            
               <div className="round won round--selectable">
                  <div className="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"></div>
                  <div className="number">3</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">4</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">5</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">6</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">7</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">8</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">9</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">10</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">11</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">12</div>
               </div>
               <div className="round switch multi-death">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon">
                     <path d="M0 176a16 16 0 0016 16h138.7a16 16 0 0011.3-27.3l-60-60c39.3-39 92.6-62 150-62A213.6 213.6 0 01469.3 256a21.3 21.3 0 1042.7 0C512 114.8 397.2 0 256 0A255 255 0 0075.6 74.3L27.3 26A16 16 0 000 37.3zm512 160a16 16 0 00-16-16H357.3a16 16 0 00-11.3 27.3l60 60c-39.3 39-92.6 62-150 62A213.6 213.6 0 0142.7 256 21.3 21.3 0 100 256c0 141.2 114.8 256 256 256a255 255 0 00180.4-74.3l48.3 48.3a16 16 0 0027.3-11.3zm0 0"></path>
                  </svg>
               </div>
               <div className="round won round--selectable">
                  <div className="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"></div>
                  <div className="number">13</div>
               </div>
            
               <div className="round won round--selectable">
                  <div className="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">14</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">15</div>
               </div>
            
               <div className="round won round--selectable">
                  <div className="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"></div>
                  <div className="number">16</div>
               </div>
            
               <div className="round lost round--selectable">
                  <div className="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" className="icon"/></div>
                  <div className="result"></div>
                  <div className="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" className="icon"/></div>
                  <div className="number">17</div>
               </div>
             */}
            </div>
         </div>
      </div>
      {/* <div className="agent-details__objective">
         <div className="agent-details__objective-header">
            <h4>All Rounds</h4>
            <span className="text-muted">Select a round above to view its details.</span>
         </div>
         <div className="agent-details__objective-graphs agent-details__objective-graphs--reversed">
            <div  className="objective-stats-graph agent-details__objective-graph">
               <div  className="objective-stats-graph__header">
                  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                     <path d="M13.5 1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5S11.2 0 12 0s1.5.7 1.5 1.5zM12 21c-.8 0-1.5.7-1.5 1.5S11.2 24 12 24s1.5-.7 1.5-1.5S12.8 21 12 21zm10.5-10.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S24 12.8 24 12s-.7-1.5-1.5-1.5zm-21 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S3 12.8 3 12s-.7-1.5-1.5-1.5zm3.2-3.7C5.3 6 6 5.3 6.8 4.7L3.9 1.8c-.2-.2-.4-.3-.7-.3H1.5v1.7c0 .3.1.5.3.7l2.9 2.9zm0 10.4l-2.9 2.9c-.2.2-.3.4-.3.7v1.7h1.7c.3 0 .5-.1.7-.3l2.9-2.9c-.8-.6-1.5-1.3-2.1-2.1zM20.8 1.5c-.3 0-.5.1-.7.3l-2.9 2.9c.8.6 1.5 1.3 2.1 2.1l2.9-2.9c.2-.2.3-.4.3-.7V1.5h-1.7zm-1.5 15.7c-.6.8-1.3 1.5-2.1 2.1l2.9 2.9c.2.2.4.3.7.3h1.7v-1.7c0-.3-.1-.5-.3-.7l-2.9-2.9zM19 12c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zm-5.9 0s2.2-1.1 3.8-1.1c-.2-.7-.5-1.3-.9-1.9l-1.8.8L15 8c-.5-.4-1.1-.7-1.7-.8-.3.8-.8 2.8-1.3 3.6-.5-.8-1-2.8-1.3-3.6-.6.1-1.2.4-1.7.8l.8 1.8L8 9c-.4.5-.7 1.2-.9 1.8 1.6.1 3.8 1.1 3.8 1.1S8.7 13 7.1 13c.2.8.5 1.4.9 2l1.8-.8L9 16c.5.4 1.1.7 1.7.8.3-.8.8-2.8 1.3-3.6.5.8 1 2.8 1.3 3.6.6-.2 1.2-.4 1.7-.8l-.8-1.8 1.8.8c.4-.5.7-1.2.9-1.8-1.6-.1-3.8-1.2-3.8-1.2z"></path>
                  </svg>
                  <div  className="label">Attack</div>
               </div>
               <div  className="objective-stats-graph__stats">
                  <div  className="stat-label">Kills</div>
                  <div  className="stat-value">
                     <div  className="stat-value__graph">
                        <div  className="stat-value__graph-fill" style={{backgroundColor: 'rgba(22, 229, 180, 0.5)', borderColor: 'rgb(22, 229, 180)', width: '100%'}}></div>
                        <div  className="stat-value__graph-value">11</div>
                     </div>
                  </div>
                  <div  className="stat-label">Deaths</div>
                  <div  className="stat-value">
                     <div  className="stat-value__graph">
                        <div  className="stat-value__graph-fill" style={{backgroundColor:' rgba(255, 70, 85, 0.5)', borderColor: 'rgb(255, 70, 85)', width:' 27.2727%'}}></div>
                        <div  className="stat-value__graph-value">3</div>
                     </div>
                  </div>
                  <div  className="stat-label">Assists</div>
                  <div  className="stat-value">
                     <div  className="stat-value__graph">
                        <div  className="stat-value__graph-fill" style={{backgroundColor: 'rgba(254, 204, 38, 0.5)', borderColor: 'rgb(254, 204, 38)', width: '0%'}}></div>
                        <div  className="stat-value__graph-value">0</div>
                     </div>
                  </div>
                  <div  className="stat-label">K/D</div>
                  <div  className="stat-value">
                     3.7
                  </div>
                  <div  className="stat-label">Damage</div>
                  <div  className="stat-value">
                     1589
                  </div>
               </div>
            </div>
            <div  className="objective-stats-graph agent-details__objective-graph">
               <div  className="objective-stats-graph__header">
                  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                     <path d="M12 8.8c-.8.8-1.7 1.6-2.5 2.4-.4.5-.4 1.2 0 1.7.7.8 1.6 1.6 2.4 2.4.9-.9 1.7-1.6 2.4-2.4.4-.5.4-1.2 0-1.7-.6-.9-1.5-1.6-2.3-2.4z"></path>
                     <path d="M21.3 9.6c0-.9-.5-1.6-1.1-2.3-.7-.8-1.4-1.6-2.3-2.6V8c-1-.4-2-2.4-2.5-4.7-.1-.7-.5-1.3-1-1.7L12.7 0v4.6c0 .5-.2 1-.7 1.3-.5-.3-.7-.7-.7-1.3V0L9.5 1.6c-.5.4-.8 1-1 1.7C8.1 5.6 7 7.6 6.1 8V4.7c-.9 1-1.6 1.8-2.3 2.6-.6.7-1.1 1.3-1.1 2.3v4.8c0 .7.3 1.4.8 2 .4.4.7.8 1.1 1.3.5.5 1.5 1.7 1.5 1.7V16c1.4 1.4 2.2 2.9 2.4 4.8.1.7.2 1.2.9 1.8.7.6 1.9 1.6 1.9 1.6v-4.6c0-.5.2-.9.7-1.2.5.3.7.7.7 1.2v4.6s1.2-1 1.9-1.6c.7-.6.8-1 .9-1.8.2-1.8 1-3.4 2.4-4.8v3.4s1-1.2 1.5-1.7c.4-.4.7-.8 1.1-1.3.5-.5.8-1.2.8-2 .1-1.6.1-3.2 0-4.8zm-5.7 4.5c-1 1-3.3 3.3-3.6 3.5-.2-.2-2.6-2.5-3.6-3.5-1.2-1.2-1.3-3 0-4.3 1.1-1.1 3.4-3.3 3.6-3.4.2.1 2.5 2.4 3.6 3.4 1.2 1.3 1.2 3.1 0 4.3z"></path>
                  </svg>
                  <div  className="label">Defense</div>
               </div>
               <div  className="objective-stats-graph__stats">
                  <div  className="stat-label">Kills</div>
                  <div  className="stat-value">
                     <div  className="stat-value__graph">
                        <div  className="stat-value__graph-fill" style={{backgroundColor: 'rgba(22, 229, 180, 0.5)', borderColor: 'rgb(22, 229, 180)', width: '25%'}}></div>
                        <div  className="stat-value__graph-value">3</div>
                     </div>
                  </div>
                  <div  className="stat-label">Deaths</div>
                  <div  className="stat-value">
                     <div  className="stat-value__graph">
                        <div  className="stat-value__graph-fill" style={{backgroundColor: 'rgba(255, 70, 85, 0.5)',borderColor: 'rgb(255, 70, 85)', width: '100%'}}></div>
                        <div  className="stat-value__graph-value">12</div>
                     </div>
                  </div>
                  <div  className="stat-label">Assists</div>
                  <div  className="stat-value">
                     <div  className="stat-value__graph">
                        <div  className="stat-value__graph-fill" style={{backgroundColor: 'rgba(254, 204, 38, 0.5)', borderColor: 'rgb(254, 204, 38)', width:' 16.6667%'}}></div>
                        <div  className="stat-value__graph-value">2</div>
                     </div>
                  </div>
                  <div  className="stat-label">K/D</div>
                  <div  className="stat-value">
                     0.3
                  </div>
                  <div  className="stat-label">Damage</div>
                  <div  className="stat-value">
                     1299
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="agent-details__damage">
         <table>
            <thead>
               <tr>
                  <th>Kills</th>
                  <th>Deaths</th>
                  <th>Damage Dealt</th>
                  <th>Damage Received</th>
                  <th>Opponent</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>2</td>
                  <td>5</td>
                  <td>504</td>
                  <td>753</td>
                  <td className="opponent">
                     vs.
                     <div className="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png"/></div>
                     <span className="trn-ign">
                        <span className="trn-ign__username">
                        facklovkaapet
                        </span> <span className="trn-ign__discriminator">
                        #bruh
                        </span>
                     </span>
                  </td>
               </tr>
               <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>303</td>
                  <td>261</td>
                  <td className="opponent">
                     vs.
                     <div className="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png"/></div>
                     <span className="trn-ign">
                        <span className="trn-ign__username">
                        CZEROxJAKEYT
                        </span> <span className="trn-ign__discriminator">
                        #0611
                        </span>
                     </span>
                  </td>
               </tr>
               <tr>
                  <td>4</td>
                  <td>2</td>
                  <td>576</td>
                  <td>569</td>
                  <td className="opponent">
                     vs.
                     <div className="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png"/></div>
                     <span className="trn-ign">
                        <span className="trn-ign__username">
                        rohitJod
                        </span> <span className="trn-ign__discriminator">
                        #4324
                        </span>
                     </span>
                  </td>
               </tr>
               <tr>
                  <td>3</td>
                  <td>4</td>
                  <td>629</td>
                  <td>863</td>
                  <td className="opponent">
                     vs.
                     <div className="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png"/></div>
                     <span className="trn-ign">
                        <span className="trn-ign__username">
                        ater
                        </span> <span className="trn-ign__discriminator">
                        #4423
                        </span>
                     </span>
                  </td>
               </tr>
               <tr>
                  <td>4</td>
                  <td>2</td>
                  <td>876</td>
                  <td>114</td>
                  <td className="opponent">
                     vs.
                     <div className="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png"/></div>
                     <span className="trn-ign">
                        <span className="trn-ign__username">
                        BewdaSwami
                        </span> <span className="trn-ign__discriminator">
                        #7800
                        </span>
                     </span>
                  </td>
               </tr>
               <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>15</td>
                  <td>0</td>
                  <td className="opponent">
                     vs.
                     <div className="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png"/></div>
                     <span className="trn-ign">
                        <span className="trn-ign__username">
                        Kyringe
                        </span> <span className="trn-ign__discriminator">
                        #lund
                        </span>
                     </span>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
      <div className="agent-details__weapons">
         <h4>Weapon Breakdown</h4>
         <table className="agent-details__weapons-list">
            <tbody>
               <tr className="agent-details__weapons-item">
                  <td style={{width: '20%'}}><span className="label">Assault Rifles</span> <span className="value">Vandal</span></td>
                  <td className="collapse" style={{width: '50%'}}><img src="https://titles.trackercdn.com/valorant-api/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/shop/newimage.png" className="weapon-image"/></td>
                  <td className="stat" style={{width: '15%'}}><span className="label">Kills</span> <span className="value">6</span></td>
                  <td className="stat" style={{width: '15%'}}><span className="label">Damage</span> <span className="value">1264</span></td>
               </tr>
               <tr className="agent-details__weapons-item">
                  <td style={{width: '20%'}}><span className="label">Sniper Rifles</span> <span className="value">Marshal</span></td>
                  <td className="collapse" style={{width: '50%'}}><img src="https://titles.trackercdn.com/valorant-api/weapons/c4883e50-4494-202c-3ec3-6b8a9284f00b/shop/newimage.png" className="weapon-image"/></td>
                  <td className="stat" style={{width: '15%'}}><span className="label">Kills</span> <span className="value">2</span></td>
                  <td className="stat" style={{width: '15%'}}><span className="label">Damage</span> <span className="value">544</span></td>
               </tr>
               <tr className="agent-details__weapons-item">
                  <td style={{width: '20%'}}><span className="label">Melee</span> <span className="value"></span></td>
                  <td className="collapse" style={{width: '50%'}}><img className="weapon-image"/></td>
                  <td className="stat" style={{width: '15%'}}><span className="label">Kills</span> <span className="value">3</span></td>
                  <td className="stat" style={{width: '15%'}}><span className="label">Damage</span> <span className="value">490</span></td>
               </tr>
               <tr className="agent-details__weapons-item">
                  <td style={{width: '20%'}}><span className="label">Sidearms</span> <span className="value">Ghost</span></td>
                  <td className="collapse" style={{width: '50%'}}><img src="https://titles.trackercdn.com/valorant-api/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/shop/newimage.png" className="weapon-image"/></td>
                  <td className="stat" style={{width: '15%'}}><span className="label">Kills</span> <span className="value">3</span></td>
                  <td className="stat" style={{width: '15%'}}><span className="label">Damage</span> <span className="value">409</span></td>
               </tr>
            </tbody>
         </table>
      </div> */}
    
   </div>
</div>
</>
  )
}

export default AgentReveal