import React, { useContext, useState, useCallback } from 'react';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { SafeArea } from '../../../components/utility/SafeArea';
import { AuthenticationContext } from '../../../services/authentication/authenticationContext';
import { Text } from '../../../components/typography/Text';
import Spacer from '../../../components/spacer/Spacer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContaier = styled.View`
  align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}--photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user]),
  );
  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <AvatarContaier>
          {!photo && <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />}
          {photo && <Avatar.Image size={180} source={{ uri: photo }} backgroundColor="#2182BD" />}
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContaier>
      </TouchableOpacity>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;
