import React, {useState} from 'react'
import MatchHeader from '../components/MatchHeader';
import TeamStatTable from '../components/TeamStatTable';
import AgentReveal from './AgentReveal';

const Overview = ({headerData, match, players}) => {

    const [revealedAgent, setRevealedAgent] = useState(null);
    const [revealedAgentAdditional, setRevealedAgentAdditional] = useState(null);
    const revealAgent = (id) =>{
        // console.log("reveal agent"+id);
        let agent = match?.data.players.all_players.filter((player)=>{
            return player.puuid === id;
        })
        
        let agentAdditional = Object.fromEntries(Object.entries(players).filter(([key]) => key.includes(id)));

        setRevealedAgent(agent);
        setRevealedAgentAdditional(agentAdditional[id]);
    }
console.log(revealedAgent)
  return (
    <>
        <MatchHeader data={headerData}/>
        <div className="overview">
            <div className='overview_table'>
                <TeamStatTable metadata={match.data?.metadata} playersAdditional={players} players={match.data?.players.blue} team="blue" isShort={true} revealAgent={revealAgent} />
                <TeamStatTable metadata={match.data?.metadata} playersAdditional={players} players={match.data?.players.red} team="red" isShort={true} revealAgent={revealAgent} />
            </div>
            {revealedAgent!==null?<AgentReveal agent={revealedAgent?.[0]} match={match} agentAdditional={revealedAgentAdditional}/>:<></>}
                
        </div>    
    </>
  )
}

export default Overview