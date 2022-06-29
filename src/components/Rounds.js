import React from 'react'

const Rounds = ({rounds}) => {
  // console.log(rounds)
  return (
    <div className='rounds'>
      {rounds?.map((round, i)=>{
      let end_type;
      switch (round.end_type) {
        case "Eliminated":
          end_type="elimination";
          break;
        
        case "Bomb defused":
          end_type="diffuse";
          break;

        case "Round timer expired":
          end_type="time";
          break;
          
          default:
            end_type="elimination";
            break;
      }
      let winning_team = (round.winning_team==="Blue")?"win":"loss"
      return(<div className='round' style={{width:`calc(100vw/${rounds.length})`}}>
        <img className='round_win' src={`https://trackercdn.com/cdn/tracker.gg/valorant/icons/${end_type}${winning_team}1.png`}/>
        <span className='round_num'>{i+1}</span>
      </div>)
    })}
    </div>
  )
}

export default Rounds