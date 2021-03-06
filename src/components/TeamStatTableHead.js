import React from 'react'

const TeamStatTableHead = ({team, isShort}) => {
  return (
    <thead className={team}>
      <tr >
         <th>
            Team {team=="blue"?"A":"B"}
         </th>
         <th >
            <div data-v-6847177c="" tabIndex="0" className="dropdown">
               <div data-v-6847177c="" className="flex rank">
                  Match Rank
               </div>               
            </div>
         </th>
         <th data-tooltip-description="Average Combat Score"style={{width:`${isShort?'10%':'5%'}`}}>ACS</th>         
         <th data-tooltip-description="Kills" style={{width:`${isShort?'10%':'5%'}`}}>K</th>
         <th data-tooltip-description="Deaths" style={{width:`${isShort?'10%':'5%'}`}}>D</th>
         <th data-tooltip-description="Assists" style={{width:`${isShort?'10%':'5%'}`}}>A</th>         
         {isShort?<></>:<>
         <th style={{width:`${isShort?'10%':'6%'}`}} data-tooltip-description="Difference between Kills and Deaths">+/-</th>
         <th style={{width:`${isShort?'10%':'6%'}`}} data-tooltip-description="Kill/Death Ratio">K/D</th>
         <th style={{width:`${isShort?'10%':'6%'}`}} data-tooltip-description="Average Damage per Round">ADR</th>
         <th style={{width:`${isShort?'10%':'6%'}`}} data-tooltip-description="Headshot Ratio">HS%</th>
         <th style={{width:`${isShort?'10%':'6%'}`}} data-tooltip-description="First Kills/Bloods">FK</th>
         <th style={{width:`${isShort?'10%':'6%'}`}} data-tooltip-description="First Deaths">FD</th>
         <th style={{width:`${isShort?'10%':'6%'}`}} data-tooltip-description="Multikills (3K+)">MK</th>
         <th style={{width:`${isShort?'10%':'6%'}`}} data-tooltip-description="Economy Rating">Econ</th>
         </>}         
      </tr>
   </thead>
  )
}

export default TeamStatTableHead