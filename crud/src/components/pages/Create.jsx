import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './mystyle.css'

function Create() {

  const [name, setName]   = useState();
  const [city, setCity]   = useState();
  const [email, setEmail] = useState();

  const  navigate = useNavigate();

  const handleSubmit = (e) => {  
    e.preventDefault();
      axios.post('https://63b878b03329392049dd7f66.mockapi.io/crud',{
        e_name:name,
        e_city:city,
        e_mail:email
      }).then(()=>{
        navigate('/');
      }).catch((e)=>{
        console.log(e);
      });
    }

  return (
    <>
      <div className="container col-md-4 shadow p-5 mt-5">
        <h4 className="text-center text-primary">Insert Record</h4>
          <form onSubmit={handleSubmit}>
            <div className="row mt-4">
                <input type="text" placeholder="Enter your fullname" className="form-control" onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className="row mt-2">
                <input type="text" placeholder="Enter your city" className="form-control" onChange={(e)=>setCity(e.target.value)}/>
              </div>
              <div className="row mt-2">
                <input type="text" placeholder="Enter your email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="row mt-3">
                <input type="submit" className="btn btn-danger form-control" value="INSERT"/>
            </div>
        </form>
        <div className='row my-2'>
          <Link to='/'>
             <input type='submit' className='btn btn-warning my-2 form-control' value='VIEW RECORDS' />
          </Link>
        </div>
      </div>
      <div className='usr-data'>
        <span>{name}</span>
        <span>{city}</span>
        <span>{email}</span>
      </div>
    </>
  )
}

export default Create;
