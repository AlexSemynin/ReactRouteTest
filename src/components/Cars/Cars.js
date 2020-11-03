import React from 'react';
import Car from './Car/Car'
import classes from './Cars.module.css'

const Cars = (props) =>{

    return(
        <ul className={classes.Cars}>
        {
            props.cars.map((car,index) =>{
                return(
                    <Car key ={index} car={car}></Car>
                )
            })
        }
        </ul>
    )
}

export default Cars;