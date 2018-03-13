import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import StockGrid from './StockGrid';

class App extends React.Component{
	render(){
  	return(
    	<div>
        <StockGrid /> 	
      </div>
    );
  }
}

export default App;