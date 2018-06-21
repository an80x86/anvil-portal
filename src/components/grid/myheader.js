import React, { Component } from 'react';

export class MyHeader extends Component {
    resolveTitle(request) {
        let response = [];
        for (var name in request) {
          response.push(name);
        }
        return response;
    }
    
    render() {

      return (
        <thead>
            <tr>
            {
                this.props.title && this.props.title.length > 0 ? 
                this.resolveTitle(this.props.title[0]).map( item => (
                <th key={`title-${item}`} id={`title-${item}`} onClick={this.props.onSort}>
                    {item}
                    <span className="order fa fa-sort" style={{margin: '10px 0px 10px 5px', color: 'rgb(204, 204, 204)'}}></span><div></div>
                </th>
                )) : null
            }
            </tr>  
        </thead>  
      );
    }
}
