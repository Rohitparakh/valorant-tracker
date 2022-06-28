import React from 'react'
import MatchHeader from '../components/MatchHeader';
import TeamStatTable from '../components/TeamStatTable';

const Overview = ({headerData, match, players}) => {
  return (
    <>
        <MatchHeader data={headerData}/>
        <div className="overview">
            <div className='overview_table'>
                <TeamStatTable metadata={match.data?.metadata} playersAdditional={players} players={match.data?.players.blue} team="blue" isShort={true} />
                <TeamStatTable metadata={match.data?.metadata} playersAdditional={players} players={match.data?.players.red} team="red" isShort={true} />
            </div>
            <div>

            </div>
        </div>    
    </>
  )
}

export default Overview