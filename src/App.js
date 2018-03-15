import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import MasterGrid from './MasterGrid';
import {getServiceUrl,getColumnDefs} from './data';

class App extends React.Component{
	render(){
  	return(
    	<div>
        <MasterGrid DataSource={getServiceUrl()} ColumnDefs={getColumnDefs()} Height="550px"/> 	
      </div>
    );
  }
}

export default App;