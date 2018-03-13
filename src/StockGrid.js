import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import {getData} from './data' 
import DetailStockComponent from './DetailStockComponent'
import '@progress/kendo-theme-default/dist/all.css';

class StockGrid extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rows: this.createRows(),
        };
        this.expandChange = this.expandChange.bind(this);
    }
    

    createRows() 
    {
        let jsonData = getData();
        return jsonData;
    };

      formatNumber(number){
        return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(number);
    }

    expandChange(event) {
        let dataItem = event.dataItem;
        dataItem.expanded = !dataItem.expanded;
        if (!dataItem.expanded) {
            return;
        }
        //console.log(dataItem.StockPrices);
        let data = this.state.rows.slice();
        let index = data.findIndex(d => d.Ticker === dataItem.Ticker);
        data[index].StockPrices = dataItem.StockPrices;
        this.setState({ rows: data });
    }

    getMasterColumns(){
        let colDef = [];
        let columns =[ 
                        {key: 'Ticker', name: 'Ticker'},
                     ];
        for(let colObjKey in columns){
          let colObj = columns[colObjKey];
          colDef.push(<Column key={colObj.key} field={colObj.key} title={colObj.name}/>)
        }
        return colDef;
      }

    render(){
        return (
            <div>
                <Grid
                    style={{ height: '550px' }}
                    data={this.state.rows}
                    detail={DetailStockComponent}
                    expandField="expanded"
                    expandChange={this.expandChange}
                >
                   {this.getMasterColumns()}
                </Grid>
            </div>
        );

    }
}

export default StockGrid;