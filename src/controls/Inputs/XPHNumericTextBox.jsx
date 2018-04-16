import React from 'react';
import ReactDOM from 'react-dom';

import { NumericTextBox, Input } from '@progress/kendo-react-inputs';

export class XPHNumericTextBox extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }


    onChange(event) {
        const updatedText = event.target.value;
        this.props.onChange(updatedText);
    }

    render() {
        return (
            <div>
                <NumericTextBox
                        placeholder="please enter value"
                        value={this.props.value}
                        onChange={this.onChange}
                    /> 
            </div>
        );
    }
}