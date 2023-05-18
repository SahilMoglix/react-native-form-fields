import React from "react";
import { TextInput, StyleSheet } from "react-native";

import Dimension from "../themes/dimensions";
import colors from "../themes/colors";

const Input = (props) => {
  return (
    <TextInput
      style={[styles.inputStyle]}
      autoCapitalize="none"
      defaultValue={props.defaultValue}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
      editable={props.editable}
      maxLength={props.maxLength}
      onSubmitEditing={props.onSubmitEditing}
      placeholder={props.Placeholder}
    />
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    fontSize: Dimension.font16,
    color: colors.FontColor,
    padding: 12,
    margin: 12,
    width: "50%",
    lineHeight: Dimension.height20,
  },
});
export default Input;
