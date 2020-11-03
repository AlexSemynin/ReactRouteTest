import './App.css';
import React from 'react';
import About from './components/About/About';
import Cars from './components/Cars/Cars';



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
              <a href="/">Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </nav>
        <About/>
        <Cars cars={this.state.cars}/>
      </div>

    )
  }
}

export default App;
