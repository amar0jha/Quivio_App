import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: '#F44336', 
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '80%', 
    marginTop: 10,
  },
  toastContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    paddingVertical:8,
    marginRight: 10,

  },
  toastText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default styles;