import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Account from './components/Account';
import MMR from './components/MMR';
import Input from './components/Input';


function App() {
  const [username, setUsername] = useState("");
  const [tag, setTag] = useState("");
  const [region, setRegion]= useState("ap");
  const [mmr, setMmr]= useState({});
  const [account, setAccount]= useState({});
  const baseURL="https://api.henrikdev.xyz";

  const accountAPI = `${baseURL}/valorant/v1/account/${username}/${tag}`;

  const rankedAPI= `${baseURL}/valorant/v1/mmr-history/${region}/${username}/${tag}`;

  const lastFiveAPI = `${baseURL}/valorant/v3/matches/${region}/${username}/${tag}`;

  const getRequest=async (path)=>{
    const result = axios.get(path).then(response=>{
      var result = response.data;
      console.log('Processing Request');
      return result;
    },
    (error) => {
        console.log(error);
    }
    )

    return result
  }

  const getData=async()=>{
    const mmr = await getRequest(rankedAPI);
    console.log(mmr)
    setMmr(mmr);

    // const lastFive = getRequest(lastFiveAPI)

    const account = await getRequest(accountAPI)
    console.log(account)
    setAccount(account)
  }
  return (
    <div className="App">
      {/* Username:<input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
      <br/>
      Tag:<input type="text" value={tag} onChange={(e)=>setTag(e.target.value)}></input>
      <button onClick={()=>getData()}>GET</button> */}
      <Input username={username} setUsername={setUsername} tag={tag} setTag={setTag} getData={getData}/>
      {(account.status===200)?<Account data={account.data} rr={mmr.data[0].ranking_in_tier} rank={mmr.data[0].currenttierpatched}/>:<></>}
      {(mmr.status===200)?<MMR data={mmr} />:<></>}
      {/* {MMR.status} */}


    </div>
    
    
  );
}

export default App;
