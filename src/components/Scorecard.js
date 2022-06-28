import React from 'react'
import MatchHeader from '../components/MatchHeader';
import TeamStatTable from '../components/TeamStatTable';
import Rounds from '../components/Rounds';

const Scorecard = ({headerData, match, players}) => {
  return (
    <>
        <MatchHeader data={headerData}/>
        <Rounds rounds={match.data?.rounds}/>
        <TeamStatTable metadata={match.data?.metadata} playersAdditional={players} players={match.data?.players.blue} team="blue" isShort={false}/>
        <TeamStatTable metadata={match.data?.metadata} playersAdditional={players} players={match.data?.players.red} team="red" isShort={false}/>
    </>
  )
}

export default Scorecard