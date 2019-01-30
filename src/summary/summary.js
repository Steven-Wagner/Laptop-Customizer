import React, { Component } from 'react';
import SummaryList from './summaryList';

export default class Summary extends Component {
    render() {
        const total = Object.keys(this.props.selected)
          .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);  
        
          return(
            <section className="main__summary"> {/*summary Componenet: this section*/}
                <h3>NEW GREENLEAF 2018</h3>
                <SummaryList 
                    selected={this.props.selected}
                    />
                <div className="summary__total">
                    <div className="summary__total__label">Your Price: </div>
                    <div className="summary__total__value">
                        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(total) }
                    </div>
                </div>
            </section>
        )
    }
}