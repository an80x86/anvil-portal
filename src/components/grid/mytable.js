import React, { Component } from 'react';
//import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';


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

export class MyPages extends Component {
    render() {
        return (
            <Pagination>
            {
            this.props.seat === 1 ? 
            <PaginationItem disabled><PaginationLink previous tag="button" onClick={this.props.onClickPrev}>Prev</PaginationLink></PaginationItem>
                :
            <PaginationItem><PaginationLink previous tag="button" onClick={this.props.onClickPrev}>Prev</PaginationLink></PaginationItem>
            }
            {
            this.props.pages && this.props.pages.length > 0 ? 
            this.props.pages.map( item => (
                item === this.props.seat ? 
                <PaginationItem key={item} active><PaginationLink id={`button${item}`} tag="button" key={item} onClick={this.props.onClick}>{item}</PaginationLink></PaginationItem> 
                : 
                <PaginationItem key={item}><PaginationLink  id={`button${item}`} tag="button" key={item} onClick={this.props.onClick}>{item}</PaginationLink></PaginationItem>
            )) : null
            }
            {
            this.props.seat > this.props.pages.length-1 ? 
            <PaginationItem disabled><PaginationLink next tag="button" onClick={this.props.onClickNext}>Next</PaginationLink></PaginationItem>
                :
            <PaginationItem><PaginationLink next tag="button" onClick={this.props.onClickNext}>Next</PaginationLink></PaginationItem>
            }
            </Pagination>
        );
    }
}
