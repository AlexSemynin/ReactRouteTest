import React from 'react';
import {withRouter} from 'react-router-dom';

const DetailCar = (props) => {

    return(
        <div style={{textAlign:'center'}}>
            <h1>{props.match.params.nameCar}</h1>
        </div>
    );
};

export default withRouter(DetailCar);