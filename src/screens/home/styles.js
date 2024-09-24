import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7EDF3',
    flex: 1,
  },
  container2: {
    backgroundColor: '#2A7BBB',
  },
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 59,
    marginBottom: 20,
  },
  welcome: {
    fontWeight: '400',
    fontSize: 18,
    color: '#fff',
    
  },
  name: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
  },
  horizontal: {
    flexDirection: 'row',
  },
  image: {
    width: 24,
    height: 24,
  },
  imageContainer: {
    backgroundColor: '#3E88C2',
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  setupCont: {
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#d9e2ee',
    padding: 20,
  },
  head: {
    fontWeight: '700',
    fontSize: 15,
    color: '#164061',
  },
  descr: {
    fontWeight: '500',
    fontSize: 13,
    color: '#60707D',
  },
  setupimgBox: {
    marginRight: 16,
  },
  imgsetup:{
    width:36,
    height:36,
  },
  frequently: {
    marginLeft: 16,
    marginTop: 32,
    color: '#525454',
    fontSize: 12,
    fontWeight: '600',
  },
  flatCont: {
    marginVertical: 16,
  },

  imgView: {
    backgroundColor: '#46A4BA',
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  img1: {
    height: 24,
    width: 24,
  },
  img2: {
    height: 40,
    width: 40,
  },
  imgViewVertical: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  recent1: {
    color: '#525454',
    fontWeight: '600',
    fontSize: 12,
  },
  recent2: {
    color: '#23679D',
    fontSize: 13,
    fontWeight: '600',
  },
  frequentTextV1: {
    color: '#0E1F2C',
    fontWeight: '600',
    paddingHorizontal:5,
  },
  frequentTextV2: {
    color: '#85929C',
    fontSize: 12,
    paddingHorizontal:5,
    fontWeight: '500',
  },

  unload: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginLeft: 16,
    backgroundColor: '#F8F9F9',
    flexDirection: 'row',
    padding: 12,
    paddingRight: 16,
    alignItems: 'center',
  },
  unloadVertical: {
    backgroundColor: '#F8F9F9',
    flexDirection: 'row',
    padding: 18,
    borderRadius:8,
  },
  
  secondBoxCont: {
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F8F9F9',
    marginBottom:15
  },
});

export default styles;
