import React from 'react';
import { TextInput, View, Text } from 'react-native';

import PropsConfig from './TextInputWithError.proptypes';
import Styles from './TextInputWithError.style';

const TextInputWithError = ({ onValueChange, onBlur, value, error, ...textInputProps }) => (
  <View style={Styles.root}>
    <TextInput
      style={Styles.input}
      onChangeText={onValueChange}
      onBlur={onBlur}
      value={value}
      {...textInputProps}
    />
    <Text style={Styles.error}>{error} </Text>
  </View>
);

TextInputWithError.propTypes = PropsConfig.propTypes;
TextInputWithError.defaultProps = PropsConfig.defaultProps;

export default TextInputWithError;
