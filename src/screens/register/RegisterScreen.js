import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import TextInputComp from '../../components/TextInput';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../../utils/utils';
import * as S from './Styled';
import * as G from '../../../styles/Global.styles';
import { auth } from '../../../firebase';

const RegisterScreen = () => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [imageURL, setImageURL] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const navigation = useNavigation();

  const onRegisterPress = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        user
          .updateProfile({
            displayName: name.value,
            photoURL: imageURL
              ? imageURL
              : 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png',
          })
          .then(() => {
            // Update successful
            // ...
            navigation.replace('Chat');
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <G.Container>
        <TextInputComp
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
          left={<TextInput.Icon name="badge-account" />}
        />
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

        <TextInputComp
          placeholder="Enter your image Url"
          label="Profile Picture"
          returnKeyType="next"
          value={imageURL}
          onChangeText={(text) => setImageURL(text)}
          left={<TextInput.Icon name="face" />}
        />
        <G.ViewCenter>
          <S.button mode="contained" onPress={onRegisterPress}>
            Sign Up
          </S.button>
        </G.ViewCenter>
      </G.Container>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
