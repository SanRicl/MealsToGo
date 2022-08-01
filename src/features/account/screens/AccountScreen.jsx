import React from 'react';

import { AccountBackground, AccountContainer, AccountCover, AuthButton } from '../components/AccountStyle';
import Spacer from '../../../components/spacer/Spacer';

const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
          Login
        </AuthButton>
        <Spacer size="large"/>
        <AuthButton icon="account-plus-outline" mode="contained" onPress={() => navigation.navigate("Register")}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
