import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SmallCard from './SmallCard';




/*  Cada set de datos es un objeto literal */

function ContentRowMovies(){

    const [ users, setUsers ] = useState();
    const [ products, setProducts ] = useState();

    useEffect(()=>{
        fetch("http://localhost:3000/api/users/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setUsers(data.meta.total)
        })

        fetch("http://localhost:3000/api/products/all",{method:'GET'})
        .then( res => res.json())
        .then( data => {
            setProducts(data.meta.total)
        })      

    },[])

        /* <!-- Movies in DB --> */
        let usersInDB = {
            title: 'Users in Data Base',
            color: 'primary', 
            cuantity: users,
            icon: 'fa-clipboard-list'
        }
            
        let productsInDB = {
            title:'Products in Data Base', 
            color:'success', 
            cuantity: products,
            icon:'fa-award'
        }
        
        /* <!-- Actors quantity --> */
        
        let imagesInDB = {
            title:'Images in Data Base' ,
            color:'warning',
            cuantity:'49',
            }

            
const cardsProps = [usersInDB, productsInDB, imagesInDB]
    
    
    
    return (
        
        <div className="row">
            
            {
            
            cardsProps.map( (cardInfo, i) => {
                return <SmallCard {...cardInfo} key={i}/>
                
            })}

        </div>
    )
}

export default ContentRowMovies;