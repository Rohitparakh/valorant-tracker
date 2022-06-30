import React from 'react'
import { Link } from 'react-router-dom'

const AgentReveal = ({agent, match, agentAdditional, team}) => {
    // console.log(agent)
console.log(team)
  return (
   <>
    <div class="overview__agent">
   <div class="agent-details agent-details--2">
      <div class="agent-details__summary" style={{"--team-background-color":`${team==="blue"?"#00554d":"#52222f"}`, "--team-color":`${team==="blue"?"#00eab1":"#ff294e"}`, "--agent-hero-url":`url(https\:\/\/trackercdn\.com\/cdn\/tracker\.gg\/valorant\/db\/agents\/${agent.character.toLowerCase()}_portrait\.png)`}}>
         <div class="agent-details__summary-header">
            <img src={agent.assets.agent.small} alt={agent.character} class="agent-portrait"/> 
            <span class="trn-ign agent-details__ign">
               <span class="trn-ign__username">
               {agent.name}
               </span> <span class="trn-ign__discriminator">
               #{agent.tag}
               </span>
            </span>
            <Link to={`/?user=${agent.name}&tag=${agent.tag}`} class="trn-button view-profile">View Profile</Link>
         </div>
         <div class="agent-details__summary-content">
            <div class="agent-details__summary-stats">
               <div class="stat"><span class="stat__label">Avg. Score</span> <span class="stat__value">{(agent.stats.score/match.data.metadata.rounds_played).toFixed(0)}</span></div>
               <div class="stat"><span class="stat__label">K/D/A</span> <span class="stat__value">{agent.stats.kills} <span class="text-disabled">/</span> {agent.stats.deaths} <span class="text-disabled">/</span> {agent.stats.assists}</span></div>
            </div>
            <div class="agent-details__summary-medals">
               <h3>Medals Earned</h3>
               <div class="agent-details__summary-medals-grid">
                  
               {(agentAdditional.MK>0)?(<div class="medal"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/medal-3k.png" alt="Three-kills" title="Three-kills"/>{agentAdditional.MK}</div>):(<></>)}

                  <div class="medal"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/medal-kills.png" alt="Kills per Round" title="Kills per Round"/>
                     {(agent.stats.kills/match.data.metadata.rounds_played).toFixed(1)}
                  </div>
                  <div class="medal medal--gold"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/medal-round-damage.png" alt="Damage per Round" title="Damage per Round"/>
                     {(agent.damage_made/match.data.metadata.rounds_played).toFixed(1)}
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="agent-details__timeline">
         <div class="round-timeline trn-grid trn-grid--vertical trn-grid--small">
         
            <div class="round-timeline__rounds">
               <div class="round lost round--selectable">
                  <div class="kills"></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">1</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">2</div>
               </div>
            
               <div class="round won round--selectable">
                  <div class="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"></div>
                  <div class="number">3</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">4</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">5</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">6</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">7</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">8</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">9</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">10</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">11</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">12</div>
               </div>
               <div class="round switch multi-death">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon">
                     <path d="M0 176a16 16 0 0016 16h138.7a16 16 0 0011.3-27.3l-60-60c39.3-39 92.6-62 150-62A213.6 213.6 0 01469.3 256a21.3 21.3 0 1042.7 0C512 114.8 397.2 0 256 0A255 255 0 0075.6 74.3L27.3 26A16 16 0 000 37.3zm512 160a16 16 0 00-16-16H357.3a16 16 0 00-11.3 27.3l60 60c-39.3 39-92.6 62-150 62A213.6 213.6 0 0142.7 256 21.3 21.3 0 100 256c0 141.2 114.8 256 256 256a255 255 0 00180.4-74.3l48.3 48.3a16 16 0 0027.3-11.3zm0 0"></path>
                  </svg>
               </div>
               <div class="round won round--selectable">
                  <div class="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"></div>
                  <div class="number">13</div>
               </div>
            
               <div class="round won round--selectable">
                  <div class="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">14</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">15</div>
               </div>
            
               <div class="round won round--selectable">
                  <div class="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"></div>
                  <div class="number">16</div>
               </div>
            
               <div class="round lost round--selectable">
                  <div class="kills"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-kill-icon.png" alt="Kill" class="icon"/></div>
                  <div class="result"></div>
                  <div class="deaths multi-death"><img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/one-death-icon.png" alt="Death" class="icon"/></div>
                  <div class="number">17</div>
               </div>
            
            </div>
         </div>
      </div>
      <div class="agent-details__objective">
         <div class="agent-details__objective-header">
            <h4>All Rounds</h4>
            <span class="text-muted">Select a round above to view its details.</span>
         </div>
         <div class="agent-details__objective-graphs agent-details__objective-graphs--reversed">
            <div  class="objective-stats-graph agent-details__objective-graph">
               <div  class="objective-stats-graph__header">
                  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                     <path d="M13.5 1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5S11.2 0 12 0s1.5.7 1.5 1.5zM12 21c-.8 0-1.5.7-1.5 1.5S11.2 24 12 24s1.5-.7 1.5-1.5S12.8 21 12 21zm10.5-10.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S24 12.8 24 12s-.7-1.5-1.5-1.5zm-21 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S3 12.8 3 12s-.7-1.5-1.5-1.5zm3.2-3.7C5.3 6 6 5.3 6.8 4.7L3.9 1.8c-.2-.2-.4-.3-.7-.3H1.5v1.7c0 .3.1.5.3.7l2.9 2.9zm0 10.4l-2.9 2.9c-.2.2-.3.4-.3.7v1.7h1.7c.3 0 .5-.1.7-.3l2.9-2.9c-.8-.6-1.5-1.3-2.1-2.1zM20.8 1.5c-.3 0-.5.1-.7.3l-2.9 2.9c.8.6 1.5 1.3 2.1 2.1l2.9-2.9c.2-.2.3-.4.3-.7V1.5h-1.7zm-1.5 15.7c-.6.8-1.3 1.5-2.1 2.1l2.9 2.9c.2.2.4.3.7.3h1.7v-1.7c0-.3-.1-.5-.3-.7l-2.9-2.9zM19 12c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zm-5.9 0s2.2-1.1 3.8-1.1c-.2-.7-.5-1.3-.9-1.9l-1.8.8L15 8c-.5-.4-1.1-.7-1.7-.8-.3.8-.8 2.8-1.3 3.6-.5-.8-1-2.8-1.3-3.6-.6.1-1.2.4-1.7.8l.8 1.8L8 9c-.4.5-.7 1.2-.9 1.8 1.6.1 3.8 1.1 3.8 1.1S8.7 13 7.1 13c.2.8.5 1.4.9 2l1.8-.8L9 16c.5.4 1.1.7 1.7.8.3-.8.8-2.8 1.3-3.6.5.8 1 2.8 1.3 3.6.6-.2 1.2-.4 1.7-.8l-.8-1.8 1.8.8c.4-.5.7-1.2.9-1.8-1.6-.1-3.8-1.2-3.8-1.2z"></path>
                  </svg>
                  <div  class="label">Attack</div>
               </div>
               <div  class="objective-stats-graph__stats">
                  <div  class="stat-label">Kills</div>
                  <div  class="stat-value">
                     <div  class="stat-value__graph">
                        <div  class="stat-value__graph-fill" style={{backgroundColor: 'rgba(22, 229, 180, 0.5)', borderColor: 'rgb(22, 229, 180)', width: '100%'}}></div>
                        <div  class="stat-value__graph-value">11</div>
                     </div>
                  </div>
                  <div  class="stat-label">Deaths</div>
                  <div  class="stat-value">
                     <div  class="stat-value__graph">
                        <div  class="stat-value__graph-fill" style={{backgroundColor:' rgba(255, 70, 85, 0.5)', borderColor: 'rgb(255, 70, 85)', width:' 27.2727%'}}></div>
                        <div  class="stat-value__graph-value">3</div>
                     </div>
                  </div>
                  <div  class="stat-label">Assists</div>
                  <div  class="stat-value">
                     <div  class="stat-value__graph">
                        <div  class="stat-value__graph-fill" style={{backgroundColor: 'rgba(254, 204, 38, 0.5)', borderColor: 'rgb(254, 204, 38)', width: '0%'}}></div>
                        <div  class="stat-value__graph-value">0</div>
                     </div>
                  </div>
                  <div  class="stat-label">K/D</div>
                  <div  class="stat-value">
                     3.7
                  </div>
                  <div  class="stat-label">Damage</div>
                  <div  class="stat-value">
                     1589
                  </div>
               </div>
            </div>
            <div  class="objective-stats-graph agent-details__objective-graph">
               <div  class="objective-stats-graph__header">
                  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                     <path d="M12 8.8c-.8.8-1.7 1.6-2.5 2.4-.4.5-.4 1.2 0 1.7.7.8 1.6 1.6 2.4 2.4.9-.9 1.7-1.6 2.4-2.4.4-.5.4-1.2 0-1.7-.6-.9-1.5-1.6-2.3-2.4z"></path>
                     <path d="M21.3 9.6c0-.9-.5-1.6-1.1-2.3-.7-.8-1.4-1.6-2.3-2.6V8c-1-.4-2-2.4-2.5-4.7-.1-.7-.5-1.3-1-1.7L12.7 0v4.6c0 .5-.2 1-.7 1.3-.5-.3-.7-.7-.7-1.3V0L9.5 1.6c-.5.4-.8 1-1 1.7C8.1 5.6 7 7.6 6.1 8V4.7c-.9 1-1.6 1.8-2.3 2.6-.6.7-1.1 1.3-1.1 2.3v4.8c0 .7.3 1.4.8 2 .4.4.7.8 1.1 1.3.5.5 1.5 1.7 1.5 1.7V16c1.4 1.4 2.2 2.9 2.4 4.8.1.7.2 1.2.9 1.8.7.6 1.9 1.6 1.9 1.6v-4.6c0-.5.2-.9.7-1.2.5.3.7.7.7 1.2v4.6s1.2-1 1.9-1.6c.7-.6.8-1 .9-1.8.2-1.8 1-3.4 2.4-4.8v3.4s1-1.2 1.5-1.7c.4-.4.7-.8 1.1-1.3.5-.5.8-1.2.8-2 .1-1.6.1-3.2 0-4.8zm-5.7 4.5c-1 1-3.3 3.3-3.6 3.5-.2-.2-2.6-2.5-3.6-3.5-1.2-1.2-1.3-3 0-4.3 1.1-1.1 3.4-3.3 3.6-3.4.2.1 2.5 2.4 3.6 3.4 1.2 1.3 1.2 3.1 0 4.3z"></path>
                  </svg>
                  <div  class="label">Defense</div>
               </div>
               <div  class="objective-stats-graph__stats">
                  <div  class="stat-label">Kills</div>
                  <div  class="stat-value">
                     <div  class="stat-value__graph">
                        <div  class="stat-value__graph-fill" style={{backgroundColor: 'rgba(22, 229, 180, 0.5)', borderColor: 'rgb(22, 229, 180)', width: '25%'}}></div>
                        <div  class="stat-value__graph-value">3</div>
                     </div>
                  </div>
                  <div  class="stat-label">Deaths</div>
                  <div  class="stat-value">
                     <div  class="stat-value__graph">
                        <div  class="stat-value__graph-fill" style={{backgroundColor: 'rgba(255, 70, 85, 0.5)',borderColor: 'rgb(255, 70, 85)', width: '100%'}}></div>
                        <div  class="stat-value__graph-value">12</div>
                     </div>
                  </div>
                  <div  class="stat-label">Assists</div>
                  <div  class="stat-value">
                     <div  class="stat-value__graph">
                        <div  class="stat-value__graph-fill" style={{backgroundColor: 'rgba(254, 204, 38, 0.5)', borderColor: 'rgb(254, 204, 38)', width:' 16.6667%'}}></div>
                        <div  class="stat-value__graph-value">2</div>
                     </div>
                  </div>
                  <div  class="stat-label">K/D</div>
                  <div  class="stat-value">
                     0.3
                  </div>
                  <div  class="stat-label">Damage</div>
                  <div  class="stat-value">
                     1299
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="agent-details__damage">
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
                  <td class="opponent">
                     vs.
                     <div class="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png"/></div>
                     <span class="trn-ign">
                        <span class="trn-ign__username">
                        facklovkaapet
                        </span> <span class="trn-ign__discriminator">
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
                  <td class="opponent">
                     vs.
                     <div class="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png"/></div>
                     <span class="trn-ign">
                        <span class="trn-ign__username">
                        CZEROxJAKEYT
                        </span> <span class="trn-ign__discriminator">
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
                  <td class="opponent">
                     vs.
                     <div class="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png"/></div>
                     <span class="trn-ign">
                        <span class="trn-ign__username">
                        rohitJod
                        </span> <span class="trn-ign__discriminator">
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
                  <td class="opponent">
                     vs.
                     <div class="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png"/></div>
                     <span class="trn-ign">
                        <span class="trn-ign__username">
                        ater
                        </span> <span class="trn-ign__discriminator">
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
                  <td class="opponent">
                     vs.
                     <div class="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png"/></div>
                     <span class="trn-ign">
                        <span class="trn-ign__username">
                        BewdaSwami
                        </span> <span class="trn-ign__discriminator">
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
                  <td class="opponent">
                     vs.
                     <div class="agent-icon"><img src="https://titles.trackercdn.com/valorant-api/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png"/></div>
                     <span class="trn-ign">
                        <span class="trn-ign__username">
                        Kyringe
                        </span> <span class="trn-ign__discriminator">
                        #lund
                        </span>
                     </span>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="agent-details__weapons">
         <h4>Weapon Breakdown</h4>
         <table class="agent-details__weapons-list">
            <tbody>
               <tr class="agent-details__weapons-item">
                  <td style={{width: '20%'}}><span class="label">Assault Rifles</span> <span class="value">Vandal</span></td>
                  <td class="collapse" style={{width: '50%'}}><img src="https://titles.trackercdn.com/valorant-api/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/shop/newimage.png" class="weapon-image"/></td>
                  <td class="stat" style={{width: '15%'}}><span class="label">Kills</span> <span class="value">6</span></td>
                  <td class="stat" style={{width: '15%'}}><span class="label">Damage</span> <span class="value">1264</span></td>
               </tr>
               <tr class="agent-details__weapons-item">
                  <td style={{width: '20%'}}><span class="label">Sniper Rifles</span> <span class="value">Marshal</span></td>
                  <td class="collapse" style={{width: '50%'}}><img src="https://titles.trackercdn.com/valorant-api/weapons/c4883e50-4494-202c-3ec3-6b8a9284f00b/shop/newimage.png" class="weapon-image"/></td>
                  <td class="stat" style={{width: '15%'}}><span class="label">Kills</span> <span class="value">2</span></td>
                  <td class="stat" style={{width: '15%'}}><span class="label">Damage</span> <span class="value">544</span></td>
               </tr>
               <tr class="agent-details__weapons-item">
                  <td style={{width: '20%'}}><span class="label">Melee</span> <span class="value"></span></td>
                  <td class="collapse" style={{width: '50%'}}><img class="weapon-image"/></td>
                  <td class="stat" style={{width: '15%'}}><span class="label">Kills</span> <span class="value">3</span></td>
                  <td class="stat" style={{width: '15%'}}><span class="label">Damage</span> <span class="value">490</span></td>
               </tr>
               <tr class="agent-details__weapons-item">
                  <td style={{width: '20%'}}><span class="label">Sidearms</span> <span class="value">Ghost</span></td>
                  <td class="collapse" style={{width: '50%'}}><img src="https://titles.trackercdn.com/valorant-api/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/shop/newimage.png" class="weapon-image"/></td>
                  <td class="stat" style={{width: '15%'}}><span class="label">Kills</span> <span class="value">3</span></td>
                  <td class="stat" style={{width: '15%'}}><span class="label">Damage</span> <span class="value">409</span></td>
               </tr>
            </tbody>
         </table>
      </div>
    
   </div>
</div>
</>
  )
}

export default AgentReveal