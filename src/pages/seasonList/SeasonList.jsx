import React, { useState } from 'react';
import './seasonList.css';
import { DataGrid } from '@material-ui/data-grid';
import { Delete } from '@material-ui/icons';

import { ndaSeasonRows } from '../../data/dummyData';
import { Link } from 'react-router-dom';

const SeasonList = () => {
  const [data, setData] = useState(ndaSeasonRows);

  const handleDeleteSeason = (seasonId) => {
    const filteredSeasons = data.filter(season => season.id !== seasonId);
    setData(filteredSeasons);

  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200, renderCell: params => {
      return (
        <span className="userListSeason">
          {params.row.title}
        </span>
      )
    } },
    { field: 'season', headerName: 'Season #', type: 'number', width: 200 },
    { field: 'eps', headerName: '# of Eps.', type: 'number', width: 200 },
    { field: 'studio', headerName: 'Studio', width: 160 },
    { field: 'startDate', headerName: 'Start Date', width: 160 },
    { field: 'inProgress', headerName: 'Status', width: 160, renderCell: params => {
      if (params.row.inProgress === true) return <span>In Progress</span>
      else if (params.row.inProgress === false) return <span>Finaled</span>
    } },
    { field: 'action', headerName: 'Action', width: 150, renderCell: params => {
      let seasonId = params.row.id;
      return (
        <>
          <Link to={`season/${seasonId}`}>
            <button className="seasonListEdit">Edit</button>
          </Link>
          <Delete className="seasonListDelete" onClick={() => handleDeleteSeason(seasonId)} />
        </>
      )
    } }
  ];


  
  return (
    <div className="seasonList">
      <DataGrid rows={data} columns={columns} pageSize={25} checkboxSelection disableSelectionOnClick />
      
    </div>
  )
}

export default SeasonList;
