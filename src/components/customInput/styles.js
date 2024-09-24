
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 16,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      backgroundColor: '#fff',
    },
    inputWrapperError: {
      borderColor: 'red',
    },
    leftIcon: {
      width: 20,
      height: 20,
      marginRight: 8,
    },
    rightIcon: {
      width: 20,
      height: 20,
    },
    input: {
      flex: 1,
      fontSize: 16,
      padding: 5,
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginBottom: 4,
    },
  });
  export default styles;