import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getRawData } from 'unofficial-valorant-api';
import axios from 'axios';

const Match = () => {
    let { matchId } = useParams();
    const [match, setMatch] = useState({});
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState(false);
    const baseURL="https://api.henrikdev.xyz";
    const matchAPI = `${baseURL}/valorant/v2/match/${matchId}`;

    const getRequest=async (path)=>{
        const result = axios.get(path).then(response=>{
          var result = response.data;
          return result;
        },
        (error) => {
                setError(true)
        }
        )
    
        return result
    }

    const fetchData=async ()=>{
        setMatch({});
        setLoading(true);
        setError(false);
        const match = await getRequest(matchAPI);
        console.log(match);
        setMatch(match);
    
        setLoading(false)
    
      }

useEffect(()=>{
    fetchData();
},[])
  
  return (
    <div>Match: {matchId}</div>
  )
}

export default Match