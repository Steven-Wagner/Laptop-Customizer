import React, { Component } from 'react';
import Option from './option';


export default class Options extends Component {
   render() {
    const options = this.props.features[this.props.thisFeature].map((item, index) => {
        const selectedClass = item.name === this.props.selectedFeatures[this.props.thisFeature].name ? 'feature__selected' : '';
        return <Option  item={item} index={index} 
                        selectedClass={selectedClass} 
                        handleUpdate={this.props.handleUpdate} 
                        thisFeature={this.props.thisFeature}
                        />
    })

    return(
        <ul className="feature__list">
            {options}
        </ul>
    )
   }
}   
