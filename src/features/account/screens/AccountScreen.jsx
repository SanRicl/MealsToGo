import React from 'react';

import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title } from '../components/AccountStyle';
import Spacer from '../../../components/spacer/Spacer';

const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
          Login
        </AuthButton>
        <Spacer size="large"/>
        <AuthButton icon="email" mode="contained" onPress={() => navigation.navigate("Register")}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
