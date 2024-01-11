/** React Native */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

/** React Navigation */
import { useNavigation } from '@react-navigation/native';

/** Author Item */
const AuthorItem = ({ id, name, detail, poster }) => {
  const navigation = useNavigation();

  // Crop description
  const shortDetail =
    detail.length > 100 ? detail.substring(0, 100) + '...' : detail;

  const selectAuthorItemHandler = () => {
    navigation.navigate('AuthorDetail', { authorId: id });
  };

  return (
    <Pressable style={styles.item} onPress={selectAuthorItemHandler}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.detail}>{shortDetail}</Text>
        <Text style={styles.more}>More Detail...</Text>
      </View>
      <Image source={{ uri: poster }} style={styles.image} />
    </Pressable>
  );
};

export default AuthorItem;

const styles = StyleSheet.create({
  item: {
    height: 'auto',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F96332E6',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  contentContainer: {
    flex: 1.67,
  },
  image: {
    flex: 1,
    marginRight: -25,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 14,
    marginTop: 10,
    color: '#fff',
  },
  more: {
    color: '#fff',
    fontStyle: 'italic',
  },
});
