import React from 'react';
import classes from './Car.module.css';
import {withRouter} from 'react-router-dom';
const Car = (props) =>{

    console.log(props);

    return(
        <div className={classes.carWrapper}>
            <div style={{fontSize: '25px', marginBottom: '10px'}}>
                car name: <strong>{props.car.name}</strong>
            </div>
            <span>
                Year: {props.car.year}
            </span>
        </div>
    )
}

export default withRouter(Car);