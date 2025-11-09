import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteAuthor, removeFavoriteAuthor } from '../store/fuayeSlice';

const AuthorDetailScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const AUTHORS = useSelector((state) => state.fuaye.authors);
  const { authorId } = route.params;
  const { name, poster, detail } = AUTHORS.find(
    (author) => author.id === authorId
  );

  const FAV_AUTHORS = useSelector((state) => state.fuaye.favorites.authors);
  const isInFavorite = FAV_AUTHORS.some((author) => author.id === authorId);

  const [isFavorite, setIsFavorite] = useState(isInFavorite);
  const handleFavorite = () => {
    isFavorite
      ? dispatch(removeFavoriteAuthor({ id: authorId }))
      : dispatch(addFavoriteAuthor({ id: authorId }));
    setIsFavorite(!isFavorite);
  };

  const handleShowPlays = () => {
    navigation.navigate('Plays', {
      authorName: name,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: poster }} style={styles.image} />
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity
          onPress={handleFavorite}
          style={styles.favoriteButton}>
          <Ionicons
            name={isFavorite ? 'star' : 'star-outline'}
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{detail}</Text>
      <Text style={styles.authorId}>Author ID: {authorId}</Text>
      <Button
        style={styles.showPlaysButton}
        title="Show Plays"
        color="#F96332"
        onPress={handleShowPlays}
      />
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
    width: '100%',
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
  authorId: {
    fontSize: 14,
    color: '#888',
  },
  favoriteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#F96332B3',
  },
  showPlaysButton: {},
});

export default AuthorDetailScreen;
