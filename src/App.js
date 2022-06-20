import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Account from './components/Account';
import MMR from './components/MMR';
import Input from './components/Input';
import LastFive from './components/LastFive';
import Loader from './components/Loader';

function App() {
  const [username, setUsername] = useState("rishxhub");
  const [user, setUser] = useState(username);
  const [tag, setTag] = useState("god");
  const [tagline, setTagline] = useState(tag);
  const [region, setRegion]= useState("ap");
  const [mmr, setMmr]= useState({});
  const [lastFive, setLastFive]= useState({});
  const [account, setAccount]= useState({});
  const [loading, setLoading]= useState(false);
  const baseURL="https://api.henrikdev.xyz";
  let accountAPI = `${baseURL}/valorant/v1/account/${user}/${tagline}`;
  let rankedAPI= `${baseURL}/valorant/v1/mmr-history/${region}/${user}/${tagline}`;
  let lastFiveAPI = `${baseURL}/valorant/v3/matches/${region}/${user}/${tagline}`;

  // const matchAPI = `${baseURL}/valorant/v2/match/:matchid`;

  const getRequest=async (path)=>{
    const result = axios.get(path).then(response=>{
      var result = response.data;
      // console.log('Processing Request');
      return result;
    },
    (error) => {
        console.log(error);
    }
    )

    return result
  }

  const getData=async()=>{
    console.log("gerdata")
    setLoading(true);
    setUser(username);
    setTagline(tag);
    
   
  }

  const fetchData=async ()=>{
    setLoading(true)
    const mmr = await getRequest(rankedAPI);
    console.log(mmr);
    setMmr(mmr);

    const lastFive = await getRequest(lastFiveAPI);
    console.log(lastFive);
    setLastFive(lastFive);

    const account = await getRequest(accountAPI);
    // console.log(account);
    setAccount(account);
    setLoading(false)

  }
  
  useEffect(()=>{
    accountAPI = `${baseURL}/valorant/v1/account/${user}/${tagline}`;
    rankedAPI= `${baseURL}/valorant/v1/mmr-history/${region}/${user}/${tagline}`;
    lastFiveAPI = `${baseURL}/valorant/v3/matches/${region}/${user}/${tagline}`;
    getData();
    fetchData();
  },[user,tagline])
  return (
    <div className="App">
      <Input username={username} setUsername={setUsername} tag={tag} setTag={setTag} getData={getData}/>
      {(account.status===200 && !loading)?<Account data={account.data} rr={mmr.data[0].ranking_in_tier} rank={mmr?.data[0].currenttierpatched}/>:<></>}
      {(lastFive.status===200 && !loading)?<LastFive mmr={mmr.data.slice(0,5)} data={lastFive} username={user} tag={tagline}/>:<></>}
      {(mmr.status===200 && !loading)?<MMR data={mmr} username={user} tag={tagline}/>:<></>}      
      {loading?<Loader/> :<></>}
    </div>
    
    
  );
}

export default App;
