import React, { Component } from 'react';
import { Table } from 'reactstrap';

export class MyTable extends Component {
    resolveTitle(request) {
      let response = [];
      for (var name in request) {
        response.push(name);
      }
      return response;
    }

    resolveDetail(request) {
      let myObject = this.props.data && this.props.data.length > 0 ? this.resolveTitle(this.props.data[0]) : null;
      
      return myObject && myObject.length > 0 ? myObject.map( (item,i) => (
        <td key={i}>{request[item]}</td>
      )) : null;
    }

    render() {
      let myObject = this.props.data && this.props.data.length > 0 ? this.resolveTitle(this.props.data[0]) : null;

      return (
        <Table responsive striped hover>
          <thead>
            <tr>
              {
                myObject && myObject.length > 0 ? 
                myObject.map( item => (
                  <th key={item}>
                    {item}
                    <span className="order fa fa-sort" style={{margin: '10px 0px 10px 5px', color: 'rgb(204, 204, 204)'}}></span><div></div>
                  </th>
                  )) : null
               }
            </tr>
          </thead>
          <tbody>
            {
              this.props.data && this.props.data.length > 0 ? 
              this.props.data.map( (item,i) => (
                <tr key={item.id}>
                  {this.resolveDetail(item)}
                </tr>
              )) : null
            }
          </tbody>
        </Table>
      );
    }
}
