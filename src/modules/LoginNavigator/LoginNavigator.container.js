import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LoginNavigatorContainer extends Component {
  componentDidMount() {
    const { isLogin, navigation } = this.props;

    if (isLogin) {
      navigation.replace('Dashboard');
    } else {
      navigation.replace('Login');
    }
  }

  render() {
    return <View />;
  }
}

const mapStateToProps = ({ login }) => ({
  isLogin: login.isLogin
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginNavigatorContainer);
