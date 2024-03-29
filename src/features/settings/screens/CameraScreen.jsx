import React, { useState, useRef, useContext } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../../services/authentication/authenticationContext';

const View = styled.View`
  flex: 1;
  justify-content: 'center';
`;

const ProfileCamera = styled(Camera)`
  flex: 1;
`;
const ButtonCameraWrapper = styled.View`
  width: 11%;
  margin: 5px;
  background: transparent;
  position: absolute;
  right: 0;
`;

const IconCamera = styled(Ionicons)`
  padding: 5px;
  align-self: center;
`;

const TouchableIconView = styled.TouchableOpacity`
  border-radius: 50%;
  background: #00000034;
`;

// =================================================================

const TouchableIconPictureView = styled.TouchableOpacity``;

const IconPicture = styled(Ionicons)`
  padding: 4px;
  align-self: center;
`;

const ButtonPictureWrapper = styled.View`
  width: 25%;
  background: transparent;
  position: absolute;
  bottom: 2%;
  align-self: center;
`;

const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();

  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    AsyncStorage.setItem(`${user.uid}--photo`, photo.uri);
    navigation.goBack();
  };

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View>
      <ProfileCamera type={type} ref={(camera) => (cameraRef.current = camera)} ratio={'16:9'}>
        <ButtonCameraWrapper>
          <TouchableIconView onPress={toggleCameraType}>
            <IconCamera name="camera-reverse-outline" size={34} color="white" />
          </TouchableIconView>
        </ButtonCameraWrapper>
        <ButtonPictureWrapper>
          <TouchableIconPictureView onPress={snap}>
            <IconPicture name="md-radio-button-on-sharp" size={95} color="white" />
          </TouchableIconPictureView>
        </ButtonPictureWrapper>
      </ProfileCamera>
    </View>
  );
};
export default CameraScreen;
