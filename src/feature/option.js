import React, { Component } from 'react';


export default class Option extends Component {
    render() {
        const featureClass = 'feature__option ' + this.props.selectedClass;
        return(
            <li key={this.props.index} className="feature__item">
                <div 
                    className={featureClass}
                    onClick={(e) => this.props.handleUpdate(this.props.thisFeature, this.props.item)}>
                    { this.props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.item.cost) })
                </div>
            </li>
        )
    }
}