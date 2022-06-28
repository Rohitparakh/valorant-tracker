import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getRawData } from 'unofficial-valorant-api';
import axios from 'axios';
import MatchHeader from '../components/MatchHeader';
import TeamStatTable from '../components/TeamStatTable';
import Loader from '../components/Loader';
import Rounds from '../components/Rounds';

const Match = () => {
    let { matchId } = useParams();
    const [match, setMatch] = useState({});
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState({error:false,status:200,message:"success"});
    const baseURL="https://api.henrikdev.xyz";
    const matchAPI = `${baseURL}/valorant/v2/match/${matchId}`;
    const [headerData, setHeaderData] = useState({});
    const [mapData, setMapData] = useState({});
    const [players, setPlayers] = useState({});
    const [kills, setKills] = useState({});
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
      // console.log(match);
      // console.log(match.data.kills);
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

        setPlayers({})
        match.data.rounds.map((round)=>{
          //calculations for each round
          round.player_stats.map((player)=>{
            let puuid = player.player_puuid
            if(player.kills>=3){
              setPlayers(players=>({
                ...players,
                [puuid]:{
                  ...players[puuid],
                  MK:players[puuid]?.MK+1 || 1
                }
              }))
            }
          })          
        })
      
        setKills({})
        let roundsPlayed=match.data?.metadata.rounds_played;
          //calculations for each round
          //   match.data.kills.map((kill,j)=>{
          // for (let i = 0; i < roundsPlayed; i++) {
          //     if(i===kill.round){
          //       setKills(kills=>({...kills,
          //       [kill.round]:{
          //         ...kills[kill.round],
          //         FK:kill.killer_puuid
          //       }}))

          //       setKills(kills=>({...kills,
          //         [kill.round]:{
          //           ...kills[kill.round],
          //           FD:kill.victim_puuid
          //         }}))
                  
          //     continue;
          //   }

          // }
               
          //   })            
          
            for (let i = 0; i < roundsPlayed; i++) {
              let roundSet=false;
              match.data.kills.map((kill,j)=>{
                if(i===kill.round && roundSet===false){
                  setKills(kills=>({...kills,
                  [kill.round]:{
                    ...kills[kill.round],
                    FK:kill.killer_puuid
                  }}))
  
                  setKills(kills=>({...kills,
                    [kill.round]:{
                      ...kills[kill.round],
                      FD:kill.victim_puuid
                    }}))
                    roundSet=true
                return;              
              }
            })
  
            }
                 

          // console.log(kills)
        

        // console.log(players)

        
      }
    }, [match])

    useEffect(()=>{
      
      Object.values(kills).map((kill)=>{
        setPlayers(players=>({
          ...players,
          [kill['FK']]:{
            ...players[kill['FK']],
            FK:players[kill['FK']]?.FK+1 || 1,
          }
        }))
        
        setPlayers(players=>({
          ...players,
          [kill['FD']]:{
            ...players[kill['FD']],
            FD:players[kill['FD']]?.FD+1 || 1,
          }
        }))

      })
    },[kills])

    useEffect(()=>{
// console.log(players)

    },[players])

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
      <Rounds rounds={match.data?.rounds}/>
      <TeamStatTable metadata={match.data?.metadata} playersAdditional={players} players={match.data?.players.blue} team="blue" />
      <TeamStatTable metadata={match.data?.metadata} playersAdditional={players} players={match.data?.players.red} team="red" />
      </>}      
    </div>
  )
}

export default Match