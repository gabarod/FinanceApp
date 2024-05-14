import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  fieldName: {
    fontSize: 16,
    color: 'black',
  },
  fieldValue: {
    fontSize: 16,
    color: 'black',
    flexShrink: 1,
    textAlign: 'right',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  footer: {
    padding: 10,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
  },
  editButton: {
    backgroundColor: '#D3D3D3',
    color: 'black',
  },
  deleteButton: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
