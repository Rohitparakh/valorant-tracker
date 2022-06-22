import React from 'react'
import TeamStatSingle from './TeamStatSingle'
import TeamStatTableHead from './TeamStatTableHead'

const TeamStatTable = ({players, metadata, team}) => {
//   console.log(metadata)
    return (
    <>
    <table className="valorant-table valorant-table--1">
   <TeamStatTableHead team={team}/>
   <tbody >
       {players?.map((player)=>{
           return <TeamStatSingle roundsPlayed={metadata.rounds_played} player={player} key={player.puuid}/>
       })}      
   </tbody>
</table>
        
    </>
  )
}

export default TeamStatTable