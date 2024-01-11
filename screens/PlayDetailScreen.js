import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoritePlay, removeFavoritePlay } from '../store/fuayeSlice';

const PlayDetailScreen = ({ route }) => {
  const dispatch = useDispatch();
  const PLAYS = useSelector((state) => state.fuaye.plays);
  const { playId } = route.params;
  const { name, author, poster, description } = PLAYS.find(
    (play) => play.id === playId
  );

  const FAV_PLAYS = useSelector((state) => state.fuaye.favorites.plays);
  const isInFavorite = FAV_PLAYS.some((play) => play.id === playId);

  const [isFavorite, setIsFavorite] = useState(isInFavorite);

  const handleFavorite = () => {
    isFavorite
      ? dispatch(removeFavoritePlay({ id: playId }))
      : dispatch(addFavoritePlay({ id: playId }));
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: poster }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity
          onPress={handleFavorite}
          style={styles.favoriteButton}>
          <Icon
            name={isFavorite ? 'ios-star' : 'ios-star-outline'}
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.author}>Author: {author}</Text>
      <Text style={styles.playId}>Play ID: {playId}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  header: {
    position: 'relative',
    height: 300,
  },
  image: {
    width: 'auto',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#F96332B3',
  },
  description: {
    marginTop: 20,
    lineHeight: 16,
  },
  author: {
    fontSize: 14,
    color: '#888',
  },
  playId: {
    fontSize: 14,
    color: '#888',
  },
  favoriteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#F96332B3',
  },
});

export default PlayDetailScreen;
