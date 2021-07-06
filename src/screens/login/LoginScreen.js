import React, { useState, useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import TextInputComp from '../../components/TextInput';
import { emailValidator, passwordValidator } from '../../utils/utils';
import * as S from './Styled';
import * as G from '../../../styles/Global.styles';
import { auth } from '../../../firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [hidePass, setHidePass] = useState(true);

  const navigation = useNavigation();

  const onLoginPressed = useCallback(() => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    const signIn = auth
      .signInWithEmailAndPassword(email.value, password.value)
      .catch((error) => {
        var errorMessage = error.message;
        setEmail({ ...email, error: errorMessage });
        setPassword({ ...password, error: errorMessage });
      });
    return signIn;
  }, [email, password]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Chat');
        //navigation.replace('Chat');
        //  var uid = user.uid;
        // ...
      } else {
        // User is signed out
        navigation.canGoBack() && navigation.popToTop();
      }
    });
    return unsubscribe;
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <G.Container>
        <TextInputComp
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          left={<TextInput.Icon name="email" />}
        />

        <TextInputComp
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry={hidePass ? true : false}
          left={<TextInput.Icon name="lock" />}
          right={
            <TextInput.Icon name="eye" onPress={() => setHidePass(!hidePass)} />
          }
        />
        <G.ViewCenter>
          <S.button mode="contained" onPress={onLoginPressed}>
            Login
          </S.button>

          <S.button
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Sign Up
          </S.button>
        </G.ViewCenter>
      </G.Container>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(LoginScreen);
