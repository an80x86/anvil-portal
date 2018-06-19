import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';
import { getRecords } from '../../../actions';
import { MyTable, MyPages } from    '../../../components/grid/mytable';

class IstasyonOperasyon extends Component {

  componentWillMount() {
    this.props.getRecords(1);
  }

  handleClick(e) {
    this.props.getRecords(parseInt(e.target.id.replace('button','')));
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
                {
                  this.props.loading ?
                  <PreloaderIcon loader={Oval} size={30} strokeWidth={8} strokeColor="#006064" duration={800} /> 
                  : 
                  <MyTable data={this.props.response} /> 
                }
                <MyPages seat={this.props.seat} 
                  pages={this.props.pages} 
                  onClickPrev={() => this.props.getRecords(this.props.seat-1)} 
                  onClick={this.handleClick.bind(this)}
                  onClickNext={() => this.props.getRecords(this.props.seat+1)} />
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
