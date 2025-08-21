import { StyleSheet, Dimensions } from 'react-native';

export const homeStyles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  splashText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    overflow: 'hidden',
    width: Dimensions.get('window').width,
  },

  jokeText: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center',
    maxWidth: '90%',
  },

  jokeBtn: {
    backgroundColor: '#2196f3',
    paddingVertical: 10, 
    paddingHorizontal: 20,
    borderRadius: 3,
  },

  jokeBtnText: {
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'regular',
    fontSize: 16,
    textAlign: 'center', 
  }
});
