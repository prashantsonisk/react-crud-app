import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

    const [apiData, setApiData] = useState([]);

    function getData(){
        axios.get('https://63b878b03329392049dd7f66.mockapi.io/crud')
        .then((response)=>{
            setApiData(response.data);
        }).catch((e)=>{
            console.log(e);
          });
    }  

    useEffect(()=>{
        getData();
    },[])

    const handleDelete = (id) => {
        axios.delete(`https://63b878b03329392049dd7f66.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        }).catch((e)=>{
            console.log(e);
          });
    }

    const setDataToStorage = (id,name,city,mail) =>{
            localStorage.setItem('id',id);
            localStorage.setItem('name',name);
            localStorage.setItem('city',city);
            localStorage.setItem('mail',mail);
    }

  return (
    <>
        <div className='container col-md-6 mt-5'>
            <h2 className='text-center text-primary my-3'>Records</h2>
                <div className='grid-row'>
                <Link to='/create'>
                     <input type='submit' className='btn btn-warning my-2' value='Create Record' />
                </Link>
                </div>
            <div className='row'>
                <div className="table-responsive"> 
                    <table className='table table-bordered table-striped table-hover table-dark'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map((item) =>{
                                    return(
                                        <>
                                          <tr>
                                            <td key={item.id}>{item.id}</td>
                                            <td key={item.id}>{item.e_name}</td>
                                            <td key={item.id}>{item.e_city}</td>
                                            <td key={item.id}>{item.e_mail}</td>
                                            <td>
                                                <Link to='/edit'>                                                      
                                                    <input type='button' className='btn btn-primary' value='Edit'  onClick={()=>setDataToStorage(item.id, item.e_name, item.e_city, item.e_mail)}/>&nbsp;&nbsp;
                                                </Link>
                                                <input type='button' className='btn btn-danger' value='Trash' onClick={()=>{if(window.confirm("Are you sure want to delete??")){handleDelete(item.id)}}}/>
                                            </td>
                                          </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>    
                </div>
            </div>
        </div>
    </>
  )
}

export default Read;