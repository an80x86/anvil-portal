import React, { Component } from 'react';
import { Badge } from 'reactstrap';


export class MyDetail extends Component {
    resolveTitle(request) {
        let response = [];
        for (var name in request) {
          response.push(name);
        }
        return response;
    }

    resolveDetail(data, title) {
        let ret = title.map( (item,i) => (
          <td key={i}>{data[item]}</td>
        ));

        ret.push(<td key='xx999'><Badge color="success" id={`edit-${data.id}`} onClick={this.props.onClickEdit}>Edit</Badge> &nbsp;<Badge color="danger" id={`remove-${data.id}`} onClick={this.props.onClickRemove}>Remove</Badge></td>)
        return ret;
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
