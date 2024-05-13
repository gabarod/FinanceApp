import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 2,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 30,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
  },
  sendButton: {
    backgroundColor: '#FFDD01',
    color: 'black',
  },
  resetButton: {
    backgroundColor: 'lightgrey',
    color: 'black',
  },
});

export default styles;
