import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import DataGrid from './components/Grid/DataGrid';
import ChartContainer from './components/ChartContainer';
//import { ComboBox } from '@progress/kendo-react-dropdowns';
import { getComboboxData, getData } from './components/data'
import { XPHComboBox } from './controls/DropDowns/XPHComboBox';
import { XPHDropDownList } from './controls/DropDowns/XPHDropDownList';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      data: getComboboxData(),
      rows: [],
      columns: [],
      series: [],
      categories: []
    };

    this.selectedItemChange = this.selectedItemChange.bind(this);
  }

  async selectedItemChange(selectedItem) {
    const data = await this.getRows(selectedItem);
    this.setState({
      selectedItem: selectedItem,
      columns: data.columns,
      rows: data.rows,
      series: data.chartData,
      categories: data.chartCategories
    });
  }

  async getRows(dashboardName) {
    let data = await getData(dashboardName);
    return data;
  }

  render() {
    const selectedItem = this.state.selectedItem;
    const rows = this.state.rows;
    const columns = this.state.columns;
    const series = this.state.series;
    const categories = this.state.categories;
    console.log(selectedItem);
    return (
      <div>
        <div class="navBar">
          <XPHComboBox data={this.state.data} selectedItem={selectedItem} selectedItemChange={this.selectedItemChange} />
          
        </div>


        <br /> <br />
        <DataGrid DashboardName={selectedItem} Rows={rows} ColumnDefs={columns} MaxHeight={'400px'} />
        <br /> <br />
        <ChartContainer series={series} categories={categories} />
      </div>
    );
  }
}

export default App;