import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'



function Edit() {

  const [id, setId]     = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [mail, setMail] = useState();

  const  navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setCity(localStorage.getItem('city'));
    setMail(localStorage.getItem('mail'));
  
  }, [])
  
  const handleUpdate = (e) =>{
      e.preventDefault();
      axios.put(`https://63b878b03329392049dd7f66.mockapi.io/crud/${id}`,{
        e_name:name,
        e_city:city,
        e_mail:mail
      })
      .then(()=>{
        navigate('/');
      }).catch((e)=>{
        console.log(e);
      });
  }

  return (
    <>
        <div className="container col-md-4 shadow p-5 mt-5">
        <h4 className="text-center text-primary">Update Record</h4>
          <form onSubmit={handleUpdate}>
            <div className="row mt-4">
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
              </div>
              <div className="row mt-2">
                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className="form-control"/>
              </div>
              <div className="row mt-2">
                <input type="text"  value={mail} onChange={(e)=>setMail(e.target.value)} className="form-control"/>
              </div>
              <div className="row mt-3">
                <input type="submit" className="btn btn-danger form-control" value="UPDATE"/>
            </div>
        </form>
        <div className='row my-2'>
          <Link to='/'>
             <input type='submit' className='btn btn-warning my-2 form-control' value='READ DATA' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Edit