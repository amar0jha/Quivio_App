import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDF3',
  },
  backButton: {
    margin: 16,
  },
  backIcon: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10
  },
  form: {
    marginTop: 20,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  flagBackground: {
    backgroundColor: "#ffffff", 
    borderRadius: 10,
    padding: 10, 
    marginRight: 8, 
  },
  phoneInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff", 
    padding: 8,
  },
  countryCode: {
    marginRight: 4, 
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
    height: 40,
    padding: 5,
    borderWidth: 0, 
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  loginButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonEnabled: {
    backgroundColor: '#2A7BBB',
  },
  loginButtonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
