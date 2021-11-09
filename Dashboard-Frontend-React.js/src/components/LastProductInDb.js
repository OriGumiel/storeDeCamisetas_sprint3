import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';

function LastProductInDb(){

    const [ lastProduct, setLastProducts ] = useState([]);

    useEffect(()=>{
        const fetchUsersData = async () => {
            let resultados = await axios.get("http://localhost:3000/api/products/all");
            console.log(resultados.data)
            setLastProducts (resultados.data);
        }
        fetchUsersData()
    },[])

    console.log(lastProduct.data)

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{`${lastProduct.data}`}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
