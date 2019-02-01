import React, { Component } from 'react';
import Options from './options';

export default class FeatureList extends Component{
    render() {
        return(
            <div className="feature">
                <div className="feature__name">{this.props.thisFeature}</div>
                <Options 
                    features={this.props.features} 
                    thisFeature={this.props.thisFeature} 
                    selectedFeatures={this.props.selectedFeatures}
                    handleUpdate={this.props.handleUpdate} 
                />
            </div>
        )
    }
}