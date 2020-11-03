import './App.scss';
import React from 'react';
import About from './components/About/About';
import Cars from './components/Cars/Cars';
import {Route, NavLink} from 'react-router-dom';
import DetailCar from './components/Cars/Detail/DetailCar';


class App extends React.Component{

  state = {
    isLoggedIn: false,
    cars:[
      {name:'Mazda', year:2009, id:0},
      {name:'Kia', year:2017, id:1},
      {name:'BMW', year:2020, id:2}
    ]
  };

  ToggleLog = ()=>{
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

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

    <button onClick={this.ToggleLog.bind()}>{this.state.isLoggedIn? "разлогиниться" : "Залогиниться"}</button>
        <Route path="/" exact render={() =>{return(<h1>Home Page</h1>)}}/>
        {
          this.state.isLoggedIn ?
            <Route path="/about" exact component={About}/> 
            : null
        }
        <Route path="/cars" exact render={()=><Cars cars={this.state.cars}/>}/>
        <Route path='/cars/:nameCar' component={DetailCar}/>
      </div>

    )
  }
}

export default App;
