import { FlatList, ScrollView } from 'react-native';
import PlayItem from '../components/PlayItem';
import { useSelector } from 'react-redux';

const PlaysOverview = ({ route }) => {
  const PLAYS = useSelector((state) => state.fuaye.plays);
  let DATA = PLAYS;
  const authorName = route.params?.authorName;
  authorName && (DATA = PLAYS.filter((play) => play.author === authorName));

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

  return (
    <ScrollView>
      <FlatList
        data={DATA}
        renderItem={renderPlayItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default PlaysOverview;
