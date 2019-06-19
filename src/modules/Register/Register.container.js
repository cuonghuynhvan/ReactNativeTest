import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import Styles from './Register.style';
import { actions } from './Register.reducer';
import { StackActions, NavigationActions } from 'react-navigation';

import TextInputWithError from '../../components/TextInputWithError/TextInputWithError.component';

class RegisterContainer extends Component {
  handleValidateLoginInfo = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  };

  handleSubmit = (values, { setSubmitting }) => {
    const { register } = this.props;

    register(values)
      .then(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Root' })]
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(() => {
        alert('Your username has already taken');
        setSubmitting(false);
      });
  };

  render() {
    return (
      <Formik
        initialValues={{ username: '', password: '', email: '' }}
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
              onValueChange={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              value={props.values.name}
              error={props.errors.name}
              placeholder={'input your name'}
              textContentType="name"
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
            <Button onPress={props.handleSubmit} title="Register" />
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
  register: actions.register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
