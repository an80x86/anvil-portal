import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import PreloaderIcon from 'react-preloader-icon';
import Puff from 'react-preloader-icon/loaders/Puff';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      danger: false,
      username: '',
      password: ''
    };

    this.onForgot = this.onForgot.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onForgot() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  updateUsername(e) {
    this.setState({username: e.target.value});
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  componentWillMount() {
    this.setState({ username: ' ', password: ''});
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: !this.state.loading,
    });
    console.log('not now later');
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
                        <Input type="text" value = {this.state.username} onChange = {this.updateUsername} placeholder="Username" disabled = {(this.state.loading) ? "disabled" : ""} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" value = {this.state.password} onChange = {this.updatePassword} placeholder="Password" disabled = {(this.state.loading) ? "disabled" : ""}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          { this.state.loading ? 
                            <PreloaderIcon loader={Puff} size={60} strokeWidth={8} strokeColor="#006064" duration={800} /> 
                            :
                            <Button color="primary" className="px-4" >Login</Button> 
                          }
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button onClick = {this.onForgot} color="link" className="px-0">Forgot password?</Button>
                          <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
                                className={'modal-danger ' + this.props.className}>
                            <ModalHeader toggle={this.toggleDanger}>Forgot password</ModalHeader>
                            <ModalBody>
                              We are unable to assist you right now, please contact the authorities.
                            </ModalBody>
                            <ModalFooter>
                              <Button color="danger" onClick={this.onForgot}>Ok</Button>{' '}
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
    );
  }
}

export default Login;
