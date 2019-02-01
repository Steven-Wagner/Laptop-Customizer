import React, { Component } from 'react';
import SummaryList from './summaryList';
import SummaryTotal from './summaryTotal';

export default class Summary extends Component {
    render() {
        
          return(
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                <SummaryList 
                    selected={this.props.selected}
                    />
                <SummaryTotal selected={this.props.selected} />
            </section>
        )
    }
}