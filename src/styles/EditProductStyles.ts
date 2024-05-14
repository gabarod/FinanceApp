import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
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
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
  },
  updateButton: {
    backgroundColor: '#D3D3D3',
    color: 'black',
  },
});

export default styles;
