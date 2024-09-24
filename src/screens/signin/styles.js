import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#E7EDF3',
  },

  appBg: {
    flex:1,
    resizeMode: 'cover',
    width: '100%',
    height:'100%',
  },
  topElements:{
    // position:'absolute',
  },
  appLogo: {
    width: 82,
    height: 55,
    marginTop:93,
    marginStart:30,
  },
  commonMargin:{
    marginStart:30,
    marginTop:30,
  },
  quivioText:{
    fontSize:28,
    fontWeight:'800',
    color:'#fff'
  },
  quivioDescription:{
    marginTop:2,
    fontSize:17,
    fontWeight:'400',
    color:'#F8F9F9'
  },
  renderItem: {
    margin: 20,
    padding:5,
    borderRadius: 20,
    flexDirection:'row',
},
listContainer:{
  flexDirection:'row',
  marginTop:30,
  alignItems:'center',
},
listIcon:{
  marginRight:10,
  width:17,
  height:17,
},
listText:{
  width:71,
  height:34,
  fontWeight:'400',
  fontSize:13,
  lineHeight:17,
  color:'#F8F9F9',
  marginRight:42,
},

loginBox: {
  backgroundColor: '#E7EDF3',
  paddingVertical:40,
  paddingHorizontal:24,
  marginTop:30,
// height:'60%'
},

title: {
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 10,
  color: '#000000',
//   marginLeft:15
},
subtitle: {
  fontSize: 14,
  color: '#4F5F72',
  marginBottom: 20,
  marginLeft:1
},
forgotPassword: {
  textAlign: 'right',
  color: '#000000',
  fontSize: 14,
},

inputError: {
  borderColor: 'red',
},
errorText: {
  color: 'red',
  fontSize: 12,
  marginBottom: 10,
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
