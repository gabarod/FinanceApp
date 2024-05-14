import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  searchInput: {
    fontSize: 18,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstItem: {
    borderTopWidth: 1,
  },
  lastItem: {
    borderBottomWidth: 1,
  },
  itemTextContainer: {
    flexDirection: 'column',
  },
  text: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#FFDD01',
    color: 'black',
  },
  notFoundtext: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
