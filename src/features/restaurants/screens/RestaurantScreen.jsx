import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <RestaurantList />
      <StatusBar />
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
});
