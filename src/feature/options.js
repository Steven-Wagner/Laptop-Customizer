import React, { Component } from 'react';


export default class Options extends Component {
   render() {
    const options = this.props.features[this.props.thisFeature].map((item, index) => {
        const selectedClass = item.name === this.props.selectedFeatures[this.props.thisFeature].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        console.log('getting options for', this.props.thisFeature);
        return(
            <li key={index} className="feature__item">
                <div 
                    className={featureClass}
                    onClick={(e) => this.props.handleUpdate(this.props.thisFeature, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
                </div>
            </li>
    
        )
    })
    return(
        <ul className="feature__list">
            {options}
        </ul>
    )
   }
}   
