import React from 'react'

const TeamStatTableHead = ({team}) => {
  return (
    <thead className={team}>
      <tr >
         <th style={{width:'20%'}}>
            Team {team=="blue"?"A":"B"}
         </th>
         <th style={{width: '12%'}}>
            <div data-v-6847177c="" tabIndex="0" className="dropdown">
               <div data-v-6847177c="" className="flex rank">
                  Match Rank
               </div>
               <ul data-v-6847177c="" className="dropdown__items">
                  <li data-v-6847177c="" className="dropdown__item">
                       <span data-v-6847177c="" className="dropdown__item-label">Match Rank</span>
                  </li>
                  <li data-v-6847177c="" className="dropdown__item">
                       <span data-v-6847177c="" className="dropdown__item-label">Current Rank</span>
                  </li>
               </ul>
            </div>
         </th>
         <th data-tooltip-description="Average Combat Score">ACS</th>
         <th data-tooltip-description="Kills">K</th>
         <th data-tooltip-description="Deaths">D</th>
         <th data-tooltip-description="Assists">A</th>
         <th data-tooltip-description="Difference between Kills and Deaths">+/-</th>
         <th data-tooltip-description="Kill/Death Ratio">K/D</th>
         <th data-tooltip-description="Average Damage per Round">ADR</th>
         <th data-tooltip-description="Headshot Ratio">HS%</th>
         <th data-tooltip-description="First Kills/Bloods">FK</th>
         <th data-tooltip-description="First Deaths">FD</th>
         <th data-tooltip-description="Multikills (3K+)">MK</th>
         <th data-tooltip-description="Economy Rating">Econ</th>
      </tr>
   </thead>
  )
}

export default TeamStatTableHead