/** React Native */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

/** React Navigation */
import { useNavigation } from '@react-navigation/native';

/** Play Item */
const PlayItem = ({ id, name, author, description, poster }) => {
  const navigation = useNavigation();

  // Crop description
  const shortDescription =
    description.length > 100
      ? description.substring(0, 100) + '...'
      : description;

  const selectPlayItemHandler = () => {
    navigation.navigate('PlayDetail', { playId: id });
  };

  return (
    <Pressable style={styles.item} onPress={selectPlayItemHandler}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.description}>{shortDescription}</Text>
        <Text style={styles.more}>More Detail...</Text>
      </View>
      <Image
        source={{ uri: poster }}
        style={styles.image}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default PlayItem;

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
  author: {
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: '#fff',
  },
  more: {
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
