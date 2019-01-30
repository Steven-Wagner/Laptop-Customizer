import React, { Component } from 'react';
import SelectedItem from './selectedItems';

export default class SummaryList extends Component {
    render() {
        
        const summary = Object.keys(this.props.selected)
        .map(key => (
            <div className="summary__option" key={key}>
                <SelectedItem thisFeature={key} selected={this.props.selected} />
            </div>)
        )

        return(
            <ul>
                {summary}
            </ul>
        )
    }
}