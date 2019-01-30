import React, { Component } from 'react';

export default class SelectedItem extends Component {
    render() {

        return(
            <li>
                <div className="summary__option__label">{this.props.thisFeature}  </div>
                <div className="summary__option__value">{this.props.selected[this.props.thisFeature].name}</div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.selected[this.props.thisFeature].cost) }
                </div>
            </li>
        )
    }
}