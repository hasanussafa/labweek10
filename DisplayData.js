import React, { Component } from 'react';
export default class DisplayData extends Component {
    country = ["Canada", "USA", "Russia", "India", "Mexico"]
    render() {
        return (
            <div>
                {
                    this.country.map(name => (
                        <h3 key={name}>{name } </h3>   
                    )
                        )
                }
                <select>
                     <option value="">Select Country</option>
                     {
                    this.country.map(name => (
                        <option key={name} >{name }</option>   
                    )
                        )
                }
                    </select>
            </div>
        )
    }
}