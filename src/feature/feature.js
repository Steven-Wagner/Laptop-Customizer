import React, { Component } from 'react';
import Options from './options';

export default class MainForm extends Component{
    render() {

        const features = Object.keys(this.props.features)
          .map(key => {
            console.log('getting features lits, currently on', key);
            return( 
                <div className="feature" key={key}>
                    <div className="feature__name">{key}</div>
                    <Options 
                        features={this.props.features} 
                        thisFeature={key} 
                        selectedFeatures={this.props.selectedFeatures}
                        handleUpdate={this.props.handleUpdate} 
                    />
                </div>
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