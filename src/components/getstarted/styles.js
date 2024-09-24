import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6EDF3',
    borderRadius: 50,
  },
  bgColor: {
    flex: 1,
    backgroundColor: '#E6EDF3',
  },
  centerImage: {
    marginTop: 32,
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageSize: {
    height: 148,
    width: 111,
  },
  commonMargin: {
    marginHorizontal: 33,
    marginTop: 24,
  },
  headingText: {
    fontWeight: '700',
    color: '#0B1721',
    fontSize: 24,
  },
  headingDescription: {
    marginTop: 8,
    color: '#4D5876',
    fontWeight: '400',
    fontSize: 15,
  },
  marginSide: {
    marginTop:36,
    marginHorizontal: 24,
  },
  iconSize: {
    height: 55,
    width: 55,
    resizeMode:'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#122636',
    marginTop: -2,
    marginStart: 4,
  },

  btnContainer: {
    backgroundColor: '#2A7BBB',
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
  },
  getStartedBtn: {
    color: '#ffffff',
    paddingVertical: 17,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
});
export default styles;
