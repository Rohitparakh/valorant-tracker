import React from 'react'

const Account = ({data, rank, rr}) => {
  return (
   <div className="profile-card-holder"> 
        <div className="profile-card">
        <div className="profile-card-header">
            <div className="profile-image" style={{backgroundImage:`url(${data.card.small})`}}></div>

            <div className="profile-info">
                <h3 className="profile-name">{data.name}</h3>
                <p className="profile-desc">#{data.tag}</p>
                <h5 class="account-level">{data.account_level}</h5>
            </div>
        </div>

        <div className="profile-card-body">
            <ul className="status">
                <li>
                    <span className="status-text">Comp. Rank: </span>
                    <span className="status-value">{rank}</span>
                </li>
            </ul>
            <ul className="status">
                <li>
                    <span className="status-text">Current RR: </span>
                    <span className="status-value">{rr}/100</span>
                </li>
            </ul>

            {/* <div className="action">
                <button className="btn btn-pink">Follow</button>
                <button className="btn btn-gray-outline">Message</button>
            </div> */}
        </div>
    </div>
</div>
  )
}

export default Account