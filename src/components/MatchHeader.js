import React from 'react'

const MatchHeader = ({data}) => {
    // console.log(data)
    let duration = data.gameLength;
    let startTime = new Date(data.gameStart);
    let dsc, dmn;
    const getDuration =()=>{
        var durationTotalSeconds = parseInt(Math.floor(duration / 1000), 10);
        var durationTotalMinutes = parseInt(Math.floor(durationTotalSeconds / 60), 10);

        dsc = parseInt(durationTotalSeconds % 60, 10);
        dmn = parseInt(durationTotalMinutes % 60, 10);
    }    

    getDuration();

    

  return (
    <div className="metadata match__header" style={{'--map-image-url':`url(${data.mapImage})`}}>
   <div className="metadata__playlist" 
   >
      <img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/modes/normal.png" alt="Competitive" className="metadata__playlist-icon" height="48"/> 
      <div className="metadata__playlist-text"><span className="metadata__playlist-map">{data.mapName}</span> <span className="metadata__playlist-mode">{data.mode}</span></div>
   </div>
   <div className="metadata__score">
      <div className="team team--blue"><span className="team__value">{data.blueWon}</span> <p className="team__label">Team A</p></div>
      <div className="separator">:</div>
      <div className="team team--red"><span className="team__value">{data.redWon}</span> <p className="team__label">Team B</p></div>
   </div>
   <div className="metadata__time"><p className="metadata__time-duration">{dmn}mn {dsc}s</p> <p className="metadata__time-timestamp">06/21/22, 09:18 PM</p></div>
</div>
  )
}

export default MatchHeader