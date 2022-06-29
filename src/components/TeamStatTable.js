import React from 'react'
import TeamStatSingle from './TeamStatSingle'
import TeamStatTableHead from './TeamStatTableHead'

const TeamStatTable = ({players, metadata, team, playersAdditional, isShort, revealAgent}) => {
    // console.log({playersAdditional})
    players?.sort((a,b) => b.stats.score - a.stats.score);
    return (
    <>
    <table className="valorant-table valorant-table--1">
   <TeamStatTableHead team={team} isShort={isShort}/>
   <tbody >
       {players?.map((player)=>{
           return <TeamStatSingle playersAdditional={playersAdditional} roundsPlayed={metadata.rounds_played} player={player} key={player.puuid} isShort={isShort} revealAgent={revealAgent} />
       })}      
   </tbody>
</table>
        
    </>
  )
}

export default TeamStatTable