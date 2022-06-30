import React from 'react'
import MatchHeader from '../components/MatchHeader';
import DuelTable from '../components/DuelTable';

const Duels = ({headerData}) => {
  return (
    <>
        <MatchHeader data={headerData}/>
        <DuelTable />
    </>
  )
}

export default Duels