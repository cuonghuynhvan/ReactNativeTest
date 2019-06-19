import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import Styles from './Dashboard.style';

import { actions } from '../Login/Login.reducer';

class DashboardContainer extends Component {
  handleLogout = () => {
    const { logout } = this.props;
    logout();

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Root' })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    const {
      user: { name }
    } = this.props;
    return (
      <View style={Styles.container}>
        <Text>Hello, {name}!</Text>
        <Button style={Styles.logoutButton} onPress={this.handleLogout} title="logout" />
      </View>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  user: login.user
});

const mapDispatchToProps = {
  logout: actions.logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
