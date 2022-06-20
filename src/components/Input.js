import React from 'react'

const Input = ({username, setUsername, tag, setTag, getData}) => {
  return (
<div className="login-page">
  <div className="form">
      <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="text" placeholder="tagline" value={tag} onChange={(e)=>setTag(e.target.value)}/>
      <button onClick={()=>getData()}>Get Data</button>
  </div>
</div>  )
}

export default Input