import React from 'react';
import kendo from '@progress/kendo-ui';
import { Chart} from '@progress/kendo-charts-react-wrapper';
class ChartContainer extends React.Component {
    
    render() {
        if(this.props.series.length > 0){
            return (
                <div>
                    <Chart series={this.props.series} categoryAxis={{categories: this.props.categories}} />
                </div>
            );
        }
        else{
            return(
                <div>
                </div>
            );
        }
        
    }
}

export default ChartContainer;