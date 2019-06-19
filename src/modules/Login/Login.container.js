import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';

import Styles from './Login.style';
import { actions } from './Login.reducer';

import TextInputWithError from '../../components/TextInputWithError/TextInputWithError.component';

class LoginContainer extends Component {
  handleValidateLoginInfo = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  handleSubmit = (values, { setSubmitting }) => {
    const { login } = this.props;

    login(values)
      .then(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Root' })]
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(() => {
        alert('Wrong username or password');
        setSubmitting(false);
      });
  };

  handleRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  render() {
    return (
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={this.handleValidateLoginInfo}
        onSubmit={this.handleSubmit}
      >
        {(props) => (
          <View style={Styles.container}>
            <TextInputWithError
              onValueChange={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              value={props.values.username}
              error={props.errors.username}
              placeholder={'input your username'}
              textContentType="username"
              autoCapitalize="none"
            />
            <TextInputWithError
              onValueChange={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              secureTextEntry
              placeholder={'input your password'}
              error={props.errors.password}
            />
            <Button onPress={props.handleSubmit} title="Login" />

            <View style={Styles.space} />

            <Button onPress={this.handleRegister} title="Register1" />
          </View>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  isLogin: login.isLogin
});

const mapDispatchToProps = {
  login: actions.login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
