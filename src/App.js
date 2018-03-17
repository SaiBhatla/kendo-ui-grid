import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import DataGrid from './components/Grid/DataGrid';
import {ComboBox} from '@progress/kendo-react-dropdowns';
import {getComboboxData} from './components/data'


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      data:getComboboxData()
    };

    this.selectedItemChange = this.selectedItemChange.bind(this);
  }
  
  selectedItemChange(event) {
    const selectedItem = event.target.value;

    this.setState({
      selectedItem: selectedItem,
    });
  }

	render(){
    const selectedItem = this.state.selectedItem;
    
    return(
    	<div>
        <div style={{ display: 'inline-block' }}>
                    <ComboBox
                        data={this.state.data}
                        onChange={this.selectedItemChange}
                        placeholder={'Select Item...'}
                        value={selectedItem}
                    />
                </div>
        <br /> <br />
        <DataGrid DashboardName={selectedItem}/> 	
      </div>
    );
  }
}

export default App;