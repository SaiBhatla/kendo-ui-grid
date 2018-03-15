import React from 'react';
import { Grid} from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';

class MasterGrid extends React.Component{
    baseUrl = this.props.DataSource;
    init = { method: 'GET', accept: 'application/json', headers: {} };

    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };
    }

    componentDidMount() {
        fetch(this.baseUrl, this.init)
            .then(response => response.json())
            .then(json => this.setState({ rows: json.value }));
    }


    render() {
        return (
            <div>
                <Grid
                    style={{ height: this.props.Height }}
                    data={this.state.rows}
                >
                    {this.props.ColumnDefs}
                </Grid>
            </div>
        );
    }
}

export default MasterGrid;