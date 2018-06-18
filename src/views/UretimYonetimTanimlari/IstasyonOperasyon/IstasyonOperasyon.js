import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';
import { getRecords } from '../../../actions';

class IstasyonOperasyon extends Component {
  constructor(props){
    super(props);
    this.resolveTitle=this.resolveTitle.bind(this);
  }

  componentWillMount() {
    this.props.getRecords();
  }

  resolveTitle(request) {
    let response = [];
    for (var name in request) {
      response.push(name);
    }
    return response;
  }

  render() {
    let myObject = this.props.response && this.props.response.length > 0 ? this.resolveTitle(this.props.response[0]) : null;

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
                        this.props.response && this.props.response.length > 0 ? 
                        this.props.response.map( item => (
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
                }

                <Pagination>
                  <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ stationoperationResponse }) => {
  const { response, loading, error } = stationoperationResponse;

  return {
    response, 
    loading, 
    error
  }
}

export default connect(mapStateToProps,{ getRecords })(IstasyonOperasyon);
