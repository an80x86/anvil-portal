import React, { Component } from 'react';

export class MyHeader extends Component {
    resolveTitle(request) {
        let response = [];
        for (var name in request) {
          response.push(name);
        }
        response.push('cmd');
        return response;
    }

    sortfull() {
        return (
            <span>
                <span className="order fa fa-sort" style={{margin: '10px 0px 10px 5px', color: 'rgb(204, 204, 204)'}}></span>
                <div></div>
            </span>
        )
    }

    render() {

      return (
        <thead>
            <tr>
            {
                this.props.title && this.props.title.length > 0 ? 
                this.resolveTitle(this.props.title[0]).map( item => (
                <th style={{textAlign: 'center'}} key={`title-${item}`} id={`title-${item}`} onClick={this.props.onSort}>
                    {item}
                    {item !== 'cmd' ? this.sortfull() : null }
                </th>
                )) : null
            }
            </tr>  
        </thead>  
      );
    }
}
