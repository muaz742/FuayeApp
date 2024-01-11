import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import AuthorItem from '../components/AuthorItem';
import PlayItem from '../components/PlayItem';

const FavoritesScreen = () => {
  const PLAYS = useSelector((state) => state.fuaye.plays);
  const AUTHORS = useSelector((state) => state.fuaye.authors);

  const FAV_PLAYS = useSelector((state) => state.fuaye.favorites.plays);
  const FAV_AUTHORS = useSelector((state) => state.fuaye.favorites.authors);

  let FILTERED_PLAYS = [];
  FAV_PLAYS.forEach((favPlayId) => {
    const play = PLAYS.find((play) => play.id === favPlayId.id);
    FILTERED_PLAYS.push(play);
  });

  let FILTERED_AUTHORS = [];
  FAV_AUTHORS.forEach((favAuthorId) => {
    const author = AUTHORS.find((author) => author.id === favAuthorId.id);
    FILTERED_AUTHORS.push(author);
  });

  const renderPlayItem = (itemData) => {
    const item = itemData.item;
    const playItemProps = {
      id: item.id,
      name: item.name,
      poster: item.poster,
      author: item.author,
      description: item.description,
    };
    return <PlayItem {...playItemProps} />;
  };

  const renderAuthorItem = (itemData) => {
    const item = itemData.item;
    const authorItemProps = {
      id: item.id,
      name: item.name,
      poster: item.poster,
      detail: item.detail,
    };
    return <AuthorItem {...authorItemProps} />;
  };

  return (
    <ScrollView>
      <FlatList
        data={FILTERED_AUTHORS}
        renderItem={renderAuthorItem}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={FILTERED_PLAYS}
        renderItem={renderPlayItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default FavoritesScreen;
