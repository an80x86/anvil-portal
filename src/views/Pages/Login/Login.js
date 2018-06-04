import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';
import {emailChanged, passwordChanged, loginUser, forgotUser, forgotUserClose, CloseMsgError } from '../../../actions';

class Login extends Component {
  
  onSubmit = (evt) => {
    evt.preventDefault()

    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  toggleHelper = () => {
    this.props.forgotUser()
  }

  toggleHelperClose = () => {
    this.props.forgotUserClose()
  }

  CloseMsgError = () => {
    this.props.CloseMsgError()  
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <CardGroup>
                <Card className="p-4">
                  <form onSubmit={this.onSubmit}>
                    <CardBody>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"value={this.props.email} onChange={email => this.props.emailChanged(email)} placeholder="Username" required/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" value={this.props.password} onChange={password => this.props.passwordChanged(password)} placeholder="Password" required/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          {
                            !this.props.loading ? 
                              <Button color="primary" className="px-4" >Login</Button>
                            : 
                            <PreloaderIcon loader={Oval} size={30} strokeWidth={8} strokeColor="#006064" duration={800} /> 
                          }
                          <Modal isOpen={this.props.error}
                                className={'modal-danger ' + this.props.className}>
                            <ModalHeader toggle={this.CloseMsgError}>Wrong Password</ModalHeader>
                            <ModalBody>
                              Username or password is incorrect!
                            </ModalBody>
                            <ModalFooter>
                              <Button color="danger" onClick={this.CloseMsgError}>Close</Button>
                            </ModalFooter>
                          </Modal>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button onClick={this.toggleHelper} color="link" className="px-0">Forgot password?</Button>
                          <Modal isOpen={this.props.helper} toggle={this.toggleHelperClose}
                              className={'modal-success ' + this.props.className}>
                            <ModalHeader toggle={this.toggleHelperClose}>Forgot Password?</ModalHeader>
                            <ModalBody>
                              We can not help with password reminders. Please contact your administrator.
                            </ModalBody>
                            <ModalFooter>
                              <Button color="success" onClick={this.toggleHelperClose}>Close</Button>
                          </ModalFooter>
                        </Modal>
                        </Col>
                      </Row>
                    </CardBody>
                  </form>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = ({ logincheckResponse }) => {
  const {email, password, loading, helper, error} = logincheckResponse;
  return {
      email,
      password,
      loading, 
      helper,
      error
  }
}

export default connect(mapStateToProps,{emailChanged, passwordChanged, loginUser, forgotUser, forgotUserClose, CloseMsgError })(Login);
