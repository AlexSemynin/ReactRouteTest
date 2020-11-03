import React from 'react';
import Car from './Car/Car';
import classes from './Cars.module.css';
import {withRouter} from 'react-router-dom';

const Cars = (props) =>{

    
const go2Home = ()=>{
    props.history.push({
        pathname: '/'
    })
};
    return(
        <React.Fragment>
            <button onClick={go2Home.bind()}>GO TO HOME</button>
            <ul className={classes.Cars}>
            {
                props.cars.map((car,index) =>{
                    return(
                        <li key ={index}><Car car={car}></Car></li>
                    )
                })
            }
            </ul>
        </React.Fragment>

    )
}

export default withRouter(Cars);