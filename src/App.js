import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import DataGrid from './components/Grid/DataGrid';
import {ComboBox} from '@progress/kendo-react-dropdowns';
import {getComboboxData,getData} from './components/data'


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      data:getComboboxData(),
      rows:[],
      columns:[]
    };

    this.selectedItemChange = this.selectedItemChange.bind(this);
  }
  
  async selectedItemChange(event) {
    const selectedItem = event.target.value;
    const data = await this.getRows(selectedItem);
    this.setState({
      selectedItem: selectedItem,
      columns:data.columns,
      rows:data.rows
    });
  }

  async getRows(dashboardName)
  {
      let data = await getData(dashboardName);
      return data;
  }

	render(){
    const selectedItem = this.state.selectedItem;
    const rows = this.state.rows;
    const columns = this.state.columns;
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
        <DataGrid DashboardName={selectedItem} Rows={rows} ColumnDefs={columns}/> 	
      </div>
    );
  }
}

export default App;