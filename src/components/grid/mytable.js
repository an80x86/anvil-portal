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

    render() {
        let myObject = this.props.data && this.props.data.length > 0 ? this.resolveTitle(this.props.data[0]) : null;

        return (
            <Table responsive striped>
              <thead>
                <tr>
                  {
                    myObject && myObject.length > 0 ? 
                    myObject.map( item => (
                      <th key={item}>{item}</th>
                    )) : null
                  }
                </tr>
              </thead>
              <tbody>
              {
                this.props.data && this.props.data.length > 0 ? 
                this.props.data.map( item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.operation}</td>
                    <td>{item.shift}</td>
                    <td>{item.capacity}</td>
                    <td>{item.ability}</td>
                  </tr>
                )) : null
              }
              </tbody>
            </Table>
        );
    }
}
