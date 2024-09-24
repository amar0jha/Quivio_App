import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalIcon: {
      fontSize: 40,
      marginBottom: 10,
      height:60,
      width:60,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalMessage: {
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 20,
    },
    okButton: {
      backgroundColor: '#2A7BBB',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginLeft:7,
    },
    okButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight:'600'
    },
    okContinueText: {
      color: '#0E1F2C',
      fontSize: 14,
      fontWeight:'600'
    },
    okContinue: {
      backgroundColor: '#F6F7F7',
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 5,
      marginRight:7,
    },
  });

  export default styles;