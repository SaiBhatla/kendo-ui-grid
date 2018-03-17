import React from 'react';
import { Grid, GridColumn as Column} from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import {getRowData,getColumnDefs} from '../data';


class DataGrid extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            columnDefs:[]
        };
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.DashboardName !== this.props.DashboardName) 
        {
            let data = await this.getRows(this.props.DashboardName);
            this.setState(prevState => ({
                columnDefs:this.getColumns(this.props.DashboardName),
                rows:data
            }));
        }

      }
    
    async getRows(dashboardName)
    {
        let data = await getRowData(dashboardName);
        return data;
    }
    getColumns = (dashboardName) =>{
        let columns = [];
        const columnDefs = getColumnDefs(dashboardName);
        for(let i = 0; i < columnDefs.length;i++){
            let column = columnDefs[i];
            columns.push(<Column key = {column.field} field = {column.field} title = {column.title}/>);
        }
        return columns;
    }

    render() {
        
        const columns = this.state.columnDefs;
        const data = this.state.rows;
        return (
            <div>
                <Grid data={data}>
                   {columns}
                </Grid>
            </div>
        );
    }
}

export default DataGrid;