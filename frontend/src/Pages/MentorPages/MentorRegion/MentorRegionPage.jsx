import React, {useState} from 'react'
import useFetch from '../../../Auth/useFetch';
import Spinner from '../../../components/UI/Spinner'
import { Link, Route } from 'react-router-dom';
import './mentorRegionPage.scss'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export default function MentorRegionPage() {
  let { status, data, error } = useFetch('http://localhost:3001/api/region');
  console.log('this is the data', data);
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <AllRegions data={data} />;
  } else {
    return <Spinner />;
  }
}

const AllRegions = ({data}) =>{
  const [regions, setRegions] = useState(data)
  let history = useHistory()
  const handleClick =(e) =>{
    e.preventDefault()
    history.push("/classes")
  }
  return(
    <div className = "container">
      <div className="heading">
        <h1>Regions</h1>
        <span>Please select which region you would like view its classes!</span>
      </div>
      <div className="all-regions">
        
        
        {regions.map(region => { return(
          
          <div className={region.name}> 
            <Button className="primary" onClick={handleClick}>{region.name} </Button>
          </div>)
          
        })}
       
      </div> 
    </div>
  )
}