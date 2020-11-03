import './App.scss';
import React from 'react';
import About from './components/About/About';
import Cars from './components/Cars/Cars';
import {Route, NavLink} from 'react-router-dom';



class App extends React.Component{

  state = {
    cars:[
      {name:'Mazda', year:2009, id:0},
      {name:'Kia', year:2017, id:1},
      {name:'BMW', year:2020, id:2}
    ]
  };


  render(){

    return(
      <div className="wrapper">
        <nav>
          <ul className="nav">
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/cars">Cars</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact render={() =>{return(<h1>Home Page</h1>)}}/>
        <Route path="/about" exact component={About}/>
        <Route path="/cars" exact render={()=><Cars cars={this.state.cars}/>}/>
      </div>

    )
  }
}

export default App;
