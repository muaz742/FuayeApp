import { ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import AuthorItem from '../components/AuthorItem';

const AuthorScreen = () => {
  const AUTHORS = useSelector((state) => state.fuaye.authors);

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
        data={AUTHORS}
        renderItem={renderAuthorItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default AuthorScreen;
