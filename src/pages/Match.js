import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getRawData } from 'unofficial-valorant-api';
import axios from 'axios';
import MatchHeader from '../components/MatchHeader';
import TeamStatTable from '../components/TeamStatTable';
import Loader from '../components/Loader';

const Match = () => {
    let { matchId } = useParams();
    const [match, setMatch] = useState({});
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState({error:false,status:200,message:"success"});
    const baseURL="https://api.henrikdev.xyz";
    const matchAPI = `${baseURL}/valorant/v2/match/${matchId}`;
    const [headerData, setHeaderData] = useState({});
    const [mapData, setMapData] = useState({})
    const getRequest=async (path)=>{
      const result = axios.get(path).then(response=>{
        var result = response.data;
        // console.log(response)
          if (response.status >= 200 && response.status <= 299) {
            return result;
  
          } else {
            setError({error:true,status:response.status,message:response.statusText})
          }
        // console.log('Processing Request');
      },
      (error) => {
        // console.log(error)
              setError({error: true,status:error.response.status,message:error.message})
      }
      )
  
      return result
    }
    const [currentMap, setCurrentMap] = useState({});

    const fetchData=async ()=>{
      setMatch({});
      setLoading(true);
      setError({error:false,status:200,message:"success"});

      const match = await getRequest(matchAPI);
      console.log(match);
      setMatch(match);

      const maps = await getRequest('https://valorant-api.com/v1/maps');
      // console.log(maps)
      setMapData(maps)

      setLoading(false)
  
    }

    useEffect(() => {
      if(match.status>=200 && match.status<=299){

        setHeaderData({
        gameStart: match.data?.metadata?.game_start,
        gameLength: match.data?.metadata?.game_length,
        mapName: match.data?.metadata?.map,
        mode: match.data?.metadata?.mode,
        blueWon: match.data?.teams?.blue.rounds_won,
        redWon: match.data?.teams?.red.rounds_won,
        })
      }
    }, [match])

    useEffect(() => {
      if(mapData.status>=200 && mapData.status<=299){

        let currentMapData = mapData.data.filter((map)=>{
          return map.displayName === match.data.metadata.map
        })

        setCurrentMap(currentMapData);
        // console.log(currentMap[0].listViewIcon)

        setHeaderData({
        gameStart: match.data?.metadata?.game_start,
        gameLength: match.data?.metadata?.game_length,
        mapName: match.data?.metadata?.map,
        mode: match.data?.metadata?.mode,
        blueWon: match.data?.teams?.blue.rounds_won,
        redWon: match.data?.teams?.red.rounds_won,
        })
      }
    }, [mapData])

    useEffect(()=>{
      setHeaderData({...headerData,mapImage:currentMap[0]?.splash})
    },[currentMap])

useEffect(()=>{
    fetchData();
},[])
  
  return (
    <div style={{color:'white'}}>
      {loading?<Loader/> :<>
      <MatchHeader data={headerData}/>
      <TeamStatTable metadata={match.data?.metadata} players={match.data?.players.blue} team="blue" />
      <TeamStatTable metadata={match.data?.metadata} players={match.data?.players.red} team="red" />
      </>}      
    </div>
  )
}

export default Match