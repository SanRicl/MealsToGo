import React, { useState, useContext } from 'react';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  ErrorContainer,
  KeyboardArea,
  Title,
} from '../components/AccountStyle';

import { Text } from '../../../components/typography/Text';
import Spacer from '../../../components/spacer/Spacer';
import { AuthenticationContext } from '../../../services/authentication/authenticationContext';

import { TextInput } from 'react-native-paper';
import { Platform } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <KeyboardArea behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Title>Meals To Go</Title>
        <AccountContainer style={{ width: '90%' }}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Spacer size="large" />
          <TextInput
            secureTextEntry
            textContentType="password"
            value={password}
            label="Password"
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          {error && (
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}

          <Spacer size="large" />
          <AuthButton icon="lock-open-outline" mode="contained" onPress={() => onLogin(email, password)}>
            Login
          </AuthButton>
        </AccountContainer>
        <Spacer size="large" />
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </KeyboardArea>
    </AccountBackground>
  );
};

export default LoginScreen;
