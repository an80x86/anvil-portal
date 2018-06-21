import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { getRecords } from '../../../actions';
import { MyGrid } from    '../../../components/grid/';

class IstasyonOperasyon extends Component {

  componentWillMount() {
    this.props.getRecords(1);
  }

  pagerClick(e) {
    this.props.getRecords(parseInt(e.target.id.replace('pager-',''),10));
  }

  onSort(e) {
    //this.props.getRecords(parseInt(e.target.id.replace('button',''),10));
    console.log(e.target.id.replace('title-',''));//e);
  }

  render() {

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
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ stationoperationResponse }) => {
  const { response, loading, error, pages, seat } = stationoperationResponse;

  return {
    response, 
    loading, 
    error,
    pages,
    seat
  }
}

export default connect(mapStateToProps,{ getRecords })(IstasyonOperasyon);
