import React from 'react';
import classes from './Car.module.css';
const Car = (props) =>{

    return(

        <li>
            <div className={classes.carWrapper}>
                <div style={{fontSize: '25px', marginBottom: '10px'}}>
                    car name: <strong>{props.car.name}</strong>
                </div>
                <span>
                    Year: {props.car.year}
                </span>
            </div>
        </li>
    )
}

export default Car;