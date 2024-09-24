import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7edf3',
      },
      header: {
        flexDirection: 'row',
        // backgroundColor:'red',
        justifyContent:'space-between'
      },
      back: {
        height: 48,
        width: 48,
        marginLeft: 25,
        marginTop: 66,
      },
      forgotSideImg:{
       
      },
  commonGap: {
    marginHorizontal:20,
  },
  buttonStyle:{
    justifyContent:'flex-end',
    flex:1,
    marginBottom:20,
    marginHorizontal:20,
  },
  img: {
    height: 48,
    width: 48,
  },
  TextView: {
    marginVertical: 6,
  },
  Title1: {
    fontWeight: '700',
    fontSize: 24,
    color:'#000',
    marginHorizontal:20,
  },
  Title2: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 30,
    color: '#4F5F72',
    marginHorizontal:20,
  },

  loginButtonEnabled: {
    backgroundColor: '#2A7BBB',
  },
  loginButtonDisabled: {
    backgroundColor: '#d3d3d3', 
  },

  loginButton: {
    backgroundColor: '#2A7BBB',
    borderRadius: 10,
    // alignItems: 'center',
    marginBottom: 30,
  width:'100%',
  alignSelf:'center'
  },
  loginButtonText: {
    color: '#ffffff',
    paddingVertical: 18,
    fontSize: 16,
    textAlign:'center',
    fontWeight: 'bold',
  },
  
});
export default styles;
