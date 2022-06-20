import { useEffect, useState } from 'react';
import axios from 'axios';
import Account from './../components/Account';
import MMR from './../components/MMR';
import Input from './../components/Input';
import LastFive from './../components/LastFive';
import Loader from './../components/Loader';

function Homepage() {
  const [username, setUsername] = useState("rishx");
  const [user, setUser] = useState(username);
  const [tag, setTag] = useState("god");
  const [tagline, setTagline] = useState(tag);
  const [region, setRegion]= useState("ap");
  const [mmr, setMmr]= useState({});
  const [lastFive, setLastFive]= useState({});
  const [account, setAccount]= useState({});
  const [loading, setLoading]= useState(false);
  const [error, setError]= useState(false);
  const baseURL="https://api.henrikdev.xyz";
  let accountAPI = `${baseURL}/valorant/v1/account/${user}/${tagline}`;
  let rankedAPI= `${baseURL}/valorant/v1/mmr-history/${region}/${user}/${tagline}`;
  let lastFiveAPI = `${baseURL}/valorant/v3/matches/${region}/${user}/${tagline}`;


  const getRequest=async (path)=>{
    const result = axios.get(path).then(response=>{
      var result = response.data;
      // console.log('Processing Request');
      return result;
    },
    (error) => {
            setError(true)
    }
    )

    return result
  }

  const getData=async()=>{
    setLoading(true);
    setUser(username);
    setTagline(tag);
    
   
  }

  const fetchData=async ()=>{
    setMmr({});
    setAccount({});
    setLastFive({});
    setLoading(true);
    setError(false);
    const mmr = await getRequest(rankedAPI);
    // console.log(mmr);
    setMmr(mmr);

    const lastFive = await getRequest(lastFiveAPI);
    // console.log(lastFive);
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
      {(account?.status===200 && !loading)?<Account data={account.data} rr={mmr.data[0].ranking_in_tier} rank={mmr?.data[0].currenttierpatched}/>:<></>}
      {(lastFive?.status===200 && !loading)?<LastFive mmr={mmr.data.slice(0,5)} data={lastFive} username={user} tag={tagline}/>:<></>}
      {(mmr?.status===200 && !loading)?<MMR data={mmr} username={user} tag={tagline}/>:<></>}      
      {loading?<Loader/> :<></>}
      {error?<h1 style={{color:'white'}}>Wrong Username or Tagline</h1>:<></>}
    </div>
    
    
  );
}

export default Homepage;
