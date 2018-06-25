import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row, FormGroup, Label, Input, } from 'reactstrap';
import { getRecords, getRecord } from '../../../actions';
import { MyGrid } from    '../../../components/grid/';
import { getClickTitleRemove, getClickPager, getClickSort, getClickEdit } from '../../../utils';

class IstasyonOperasyon extends Component {

  componentWillMount() {
    this.props.getRecords(1);
  }

  pagerClick(e) {
    this.props.getRecords(getClickPager(e));
  }

  onSort(e) {
    console.log(getClickSort(e));
  }

  onClickEdit(e) {
    this.props.getRecord(1);
  }

  onClickRemove(e) {
    console.log(getClickTitleRemove(e));
  }

  editView(elems) {
    console.log(elems);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              
            <CardHeader>
                <strong>İstasyon Tanımları</strong>
                <small> {elems.id}</small>
              </CardHeader>
              <CardBody>
                
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Name</Label>
                      <Input type="text" id="name" placeholder="Enter your name" required />
                    </FormGroup>
                  </Col>
                </Row>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  gridView() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> İstasyon Tanımları
              </CardHeader>
              <CardBody>
                <MyGrid 
                  loading={this.props.loading} 
                  response={this.props.response} 
                  seat={this.props.seat}
                  pages={this.props.pages}
                  onClickPrev={() => this.props.getRecords(this.props.seat-1)} 
                  onClick={this.pagerClick.bind(this)}
                  onSort={this.onSort.bind(this)}
                  onClickNext={() => this.props.getRecords(this.props.seat+1)}
                  onClickEdit={this.onClickEdit.bind(this)} 
                  onClickRemove={this.onClickRemove.bind(this)}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
  if (this.props.edit) return (this.editView(this.props.edit));
    else return (this.gridView());
  }
}

const mapStateToProps = ({ stationoperationResponse }) => {
  const { response, edit, loading, error, pages, seat } = stationoperationResponse;

  return {
    response,
    edit,
    loading, 
    error,
    pages,
    seat
  }
}

export default connect(mapStateToProps,{ getRecords, getRecord })(IstasyonOperasyon);
//export default connect(mapStateToProps, mapDispatchToProps)(IstasyonOperasyon);
