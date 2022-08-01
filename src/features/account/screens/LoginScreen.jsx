import React, { useState, useContext } from 'react';
import { AccountBackground, AccountContainer, AccountCover, AuthButton, EmailInput } from '../components/AccountStyle';

import Spacer from '../../../components/spacer/Spacer';
import { AuthenticationContext } from '../../../services/authentication/authenticationContext';

import { TextInput } from 'react-native-paper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useContext(AuthenticationContext);
  
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer style={{ width: '90%' }}>
        <TextInput label="Email" value={email} onChangeText={(e) => setEmail(e)} placeholder="Your email address" />
        <Spacer size="large" />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={(p) => setPassword(p)}
          placeholder="Your Password"
        />
        <Spacer size="large" />
        <AuthButton icon="lock-open-outline" mode="contained" onPress={() => console.log('acessed')}>
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default LoginScreen;
