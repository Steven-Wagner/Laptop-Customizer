import React, { Component } from 'react';
import Feature from './feature';

export default class FeatureList extends Component{
    render() {

        const features = Object.keys(this.props.features)
          .map(key => {
            console.log('getting features lits, currently on', key);
            return( 

                <Feature 
                    features={this.props.features} 
                    thisFeature={key} 
                    selectedFeatures={this.props.selectedFeatures}
                    handleUpdate={this.props.handleUpdate}
                    key={key}
                />
            )
          })

        return(
            <section className="main__form"> {/*features component: this section*/}
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section>
        )
    }
}