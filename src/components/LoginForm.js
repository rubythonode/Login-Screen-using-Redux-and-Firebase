import React, { Component } from "react";
import { connect } from "react-redux";
import {Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Card, Input, Button, CardSection,Spinner } from "./common";
import { emailChanged, passwordChanged,loginUser } from "../actions";

class Loginform extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress(){
   const {email,password}  = this.props;
   this.props.loginUser({email,password});
  }
  renderButton(){
    if (this.props.loading){
      return <Spinner size = "large"/>;
    }
      return(
        <Button children="Login / Signup"
        onPress = {this.onButtonPress.bind(this)} />
      );
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email ID"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            placeHolder = "Enter Email ID"
            keyboardType = "email-address"
            returnKeyType = "next"/>
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
            returnKeyType = "done"
            placeHolder = "Enter Password"/>
        </CardSection>
        <Text style = {Styles.errorTextMessage}> 
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
          {/* <Button
          children = "Login / SignUp"
          onPress = {() => Actions.main()}/> */}
        </CardSection>
      </Card>
    );
  }
}

const Styles = {
  errorTextMessage: {
    color : '#ff0707',
    fontSize : 20,
    alignSelf : 'center'
  }
};

const mapStateToProps = ({auth}) => {
  
  const {email,password,error,loading} = auth;
  
  return {email,password,error,loading};
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(Loginform);