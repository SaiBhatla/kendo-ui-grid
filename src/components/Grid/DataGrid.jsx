import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';

class DataGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            columns: [],
            columnDefs: []
        };
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.DashboardName !== this.props.DashboardName) {
            this.setState(prevState => ({
                columnDefs: this.props.ColumnDefs,
                rows: this.props.Rows,
                columns: this.getColumns(this.props.ColumnDefs),
            }));
        }

    }


    getColumns = (columnDefs) => {
        let columns = [];
        for (let i = 0; i < columnDefs.length; i++) {
            let column = columnDefs[i];
            columns.push(<Column key={i} field={column.field} title={column.title} />);
        }
        return columns;
    }

    render() {

        const columns = this.state.columns;
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