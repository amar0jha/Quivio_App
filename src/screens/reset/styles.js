import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#E6EDF3',
  },
  headerContainer: {
    marginTop: 100,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000',
  },
  subHeader: {
    fontSize: 14,
    color: '#6C757D',
    marginTop: 8,
    textAlign: 'left',
  },
  inputContainer: {
    marginBottom: 20,
    marginHorizontal:24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
  },
  criteriaContainer: {
    marginTop: 10,
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  criteriaIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  valid: {
    color: '#122636',
  },
  invalid: {
    color: '#122636',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 18,
    alignItems: 'center',
    marginHorizontal:7,
  },
  buttonEnabled: {
    backgroundColor: '#2A7BBB',
  },
  buttonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eyeIcon: {
    marginBottom: 40,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginBottom:20,
  },


  
  container1: {
    flex: 1,
    backgroundColor: '#e7edf3',
  },
  header1: {
    flexDirection: 'row',
    // backgroundColor:'red',
    justifyContent:'space-between'
  },
  back: {
    height: 55,
    width: 83,
    marginLeft: 25,
    marginTop: 66,
  },
  forgotSideImg:{
   
  },
commonGap: {
marginHorizontal:24,
},
buttonStyle:{
justifyContent:'flex-end',
flex:1,
marginBottom:40,
marginHorizontal:24,
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
marginHorizontal:24,
},
Title2: {
fontSize: 15,
fontWeight: '400',
marginTop: 10,
marginBottom: 30,
color: '#4F5F72',
marginHorizontal:24,
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