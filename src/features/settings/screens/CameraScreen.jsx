import React, { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const View = styled.View`
  flex: 1;
  justify-content: 'center';
`;

const ProfileCamera = styled(Camera)`
  flex: 1;
`;
const ButtonWrapper = styled.View`
  width: 11%;
  margin: 5px;
  background: transparent;
  position: absolute;
  right: 0;
`;

const TouchableIconView = styled.TouchableOpacity`
  border-radius: 50%;
  background: #00000034;
`;
const Icon = styled(Ionicons)`
  padding: 5px;
  align-self: center;
`;

const CameraScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) return <View />;

  if (!permission.granted) {
    // Camera permissions are not granted yet
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
      <ProfileCamera type={type}>
        <ButtonWrapper>
          <TouchableIconView onPress={toggleCameraType}>
            <Icon name="camera-reverse-outline" size={34} color="white" />
          </TouchableIconView>
        </ButtonWrapper>
      </ProfileCamera>
    </View>
  );
};
export default CameraScreen;
