import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SmallCard from './SmallCard';




/*  Cada set de datos es un objeto literal */

function ContentRowMovies(){

    const [ users, setUsers ] = useState([]);
    const [ products, setProducts ] = useState([]);

    useEffect(()=>{
        const fetchUsersData = async () => {
            let resultados = await axios.get("http://localhost:3000/api/users/all");
            console.log(resultados.data)
            setUsers(resultados.data);
        }
        fetchUsersData()
    },[])

    useEffect(()=>{
        const fetchProductsData = async () => {
            let resultados = await axios.get("http://localhost:3000/api/products/all");
            console.log(resultados.data)
            setProducts(resultados.data);
        }
        fetchProductsData()
    },[])
    console.log(products.meta)

    /* <!-- Movies in DB --> */

let usersInDB = {
    title: 'Users in Data Base',
    color: 'primary', 
    cuantity: `${users.meta}`,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let productsInDB = {
    title:'Products in Data Base', 
    color:'success', 
    cuantity: `${products.meta}`,
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let imagesInDB = {
    title:'Images in Data Base' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cardsProps = [usersInDB, productsInDB, imagesInDB];

    return (
    
        <div className="row">
            
            {cardsProps.map( (cardInfo, i) => {

                return <SmallCard {...cardInfo} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;