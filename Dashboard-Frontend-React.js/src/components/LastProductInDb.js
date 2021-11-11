import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';

function LastProductInDb(){

    const [ lastProductDescription, setLastProductDescription ] = useState([]);
    const [ lastProductImage, setLastProductImage ] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            const lastproduct = data.data
            setLastProductDescription(lastproduct[lastproduct.length - 1].description)
        })
        
        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            const lastproduct = data.data
            // console.log(lastproduct[lastproduct.length - 1].product_images[0].image)
            setLastProductImage(lastproduct[lastproduct.length - 1].product_images[0].image)
        })
    },[])
    
    console.log(lastProductImage)

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src= {`/assets/images/products/${lastProductImage}`} alt={`${lastProductImage}`}/>
                    </div>
                    <p>{`${lastProductDescription}`}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
