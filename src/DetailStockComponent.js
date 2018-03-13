import React from 'react';
import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';


class DetailStockComponent extends GridDetailRow {

    getDetailColumns(detailData){
        let colDef = [];
        let columns =[ 
                        {key: 'Year', name: 'Year'},
                        { key: 'Jan', name: 'Jan', format:'{0:n2}'},
                        { key: 'Feb', name: 'Feb', format:'{0:n2}'},
                        { key: 'Mar', name: 'Mar', format:'{0:n2}'},
                        { key: 'Apr', name: 'Apr', format:'{0:n2}'},
                        { key: 'May', name: 'May', format:'{0:n2}'},
                        { key: 'Jun', name: 'Jun', format:'{0:n2}'},
                        { key: 'Jul', name: 'Jul', format:'{0:n2}'},
                        { key: 'Aug', name: 'Aug', format:'{0:n2}'},
                        { key: 'Sep', name: 'Sep', format:'{0:n2}'},
                        { key: 'Oct', name: 'Oct', format:'{0:n2}'},
                        { key: 'Nov', name: 'Nov', format:'{0:n2}'},
                        { key: 'Dec', name: 'Dec', format:'{0:n2}'},
                     ];
        for(let colObjKey in columns){
          let colObj = columns[colObjKey];
          colDef.push(<Column key={colObj.key} field={colObj.key} title={colObj.name} format={colObj.format}/>)
        }
        return colDef;  
    };

    render() {
        return (
            <Grid data={this.props.dataItem.StockPrices}>
                {this.getDetailColumns(this.props.dataItem.StockPrices)}
            </Grid>
        );
    }
}

export default DetailStockComponent;