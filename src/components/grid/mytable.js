import React, { Component } from 'react';
import { Table } from 'reactstrap';
import {MyHeader} from './myheader';
import {MyDetail} from './mydetail';
import { MyPager } from './mypager';

export class MyTable extends Component {
  
    render() {

      return (
        <div>
          <Table responsive striped hover>
            <MyHeader title={this.props.data} onSort={this.props.onSort} /> 
            <MyDetail data={this.props.data} onClickEdit={this.props.onClickEdit} onClickRemove={this.props.onClickRemove} />
          </Table>
          <MyPager
            seat={this.props.seat} 
            pages={this.props.pages} 
            onClickPrev={this.props.onClickPrev} 
            onClick={this.props.onClick}
            onClickNext={this.props.onClickNext} 
          />
        </div>
      );
    }
}
