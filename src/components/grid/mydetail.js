import React, { Component } from 'react';

export class MyDetail extends Component {
    resolveTitle(request) {
        let response = [];
        for (var name in request) {
          response.push(name);
        }
        return response;
    }

    resolveDetail(data, title) {
        return title.map( (item,i) => (
          <td key={i}>{data[item]}</td>
        ));
    }

    render() {

      return (
        <tbody>
        {
          this.props.data && this.props.data.length > 0 ? 
          this.props.data.map( (item,i) => (
            <tr key={item.id}>
              {this.resolveDetail(item, (this.props.data && this.props.data.length > 0 ? this.resolveTitle(this.props.data[0]) : null))}
            </tr>
          )) : null
        }
      </tbody>
      );
    }
}
