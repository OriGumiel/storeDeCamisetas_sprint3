import React from "react";
import { useEffect, useState } from 'react';


function GenresInDb() {

  const [ teams0, setTeams0 ] = useState([]);
  const [ teams1, setTeams1 ] = useState([]);
  const [ teams2, setTeams2 ] = useState([]);
  const [ teams3, setTeams3 ] = useState([]);
  const [ teams4, setTeams4 ] = useState([]);
  const [ teams5, setTeams5 ] = useState([]);
  const [ teams6, setTeams6 ] = useState([]);
  const [ teams7, setTeams7 ] = useState([]);
  const [ teams8, setTeams8 ] = useState([]);
  const [ teams9, setTeams9 ] = useState([]);
  
  useEffect(()=>{

        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams0(data.data[0].name)
        })
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams1(data.data[1].name)
        })
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams2(data.data[2].name)
        })
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams3(data.data[3].name)
        })
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams4(data.data[4].name)
        })
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams5(data.data[5].name)
        })
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams6(data.data[6].name)
        })
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams7(data.data[7].name)
        })
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams8(data.data[8].name)
        })
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setTeams9(data.data[9].name)
        })
        
    },[])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Teams in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams0}`}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams1}`}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams2}`}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams3}`}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams4}`}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams5}`}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams6}`}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams7}`}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams8}`}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${teams9}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
