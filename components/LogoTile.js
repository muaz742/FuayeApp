import { Image, Text, View } from 'react-native';
import { HeaderTitle } from '@react-navigation/elements';
import logo from '../assets/fuaye-logo.svg';

const LogoTitle = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={{ width: 50, height: 50, marginRight: 10 }} source={logo} />
      <HeaderTitle>{props.title}</HeaderTitle>
    </View>
  );
};

export default LogoTitle;
