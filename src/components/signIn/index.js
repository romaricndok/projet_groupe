import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Signin = ({ submit }) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  return (
    <Page>
      <StyledForm
        onSubmit={e => submit(e, formState, setErrorMessage, history)}
      >
        <StyledSpan>Sign In</StyledSpan>
        <SigninInput
          placeholder='User Name'
          onChange={e =>
            setFormState({ ...formState, username: e.target.value })
          }
          type='text'
        ></SigninInput>
        <SigninInput
          placeholder='password'
          onChange={e =>
            setFormState({ ...formState, password: e.target.value })
          }
          type='password'
        ></SigninInput>
        <Error>{errorMessage}</Error>
        <Button type='submit'>Valider</Button>
      </StyledForm>
    </Page>
  );
};
const Page = styled.body`
  margin: 0;
  padding: 10px;
  background-color: ${props => props.theme.body};
`;

const Error = styled.span`
  font-family: Georgia;
  font-size: 1.3rem;
  padding: 20px 20px;
  color: red;
`;
const StyledSpan = styled.span`
  font-family: Georgia;
  color: ${props => props.theme.primary};
  margin-bottom: 10px;
  font-size: 3.5em;
  @media (max-width: 477px) {
    font-size: 2em;
  }
  @media (max-width: 401px) {
    font-size: 1.5em;
  }
  @media (max-width: 375px) {
    font-size: 1.1em;
  }
  @media (max-width: 320px) {
    font-size: 1em;
  }
}
`;

const StyledForm = styled.form`
  border: groove ${props => props.theme.body};
  border-radius: 40px;
  padding: 30px;
  margin: 180px 290px;
  @media (max-width: 1080px) {
    margin: 50% 50px;
  }
  @media (max-width: 768px) {
    margin: 44% 50px;
  }
  @media (max-width: 668px) {
    margin: 50% 50px;
  }
  @media (max-width: 546px) {
    margin: 50% 50px;
  }
  @media (max-width: 414px) {
    margin: 57% 50px;
  }
  @media (max-width: 411px) {
    margin: 69% 50px;
  }
  @media (max-height: 731px) and (max-width: 411px) {
    margin: 57% 50px;
  }
  @media (max-width: 375px) {
    margin: 78% 50px;
  }
  @media (min-height: 639px) and (max-width: 360px) {
    margin: 50% 50px;
  }
  @media (max-width: 360px) {
    margin: 58% 50px;
  }
  @media (max-width: 320px) {
    margin: 59% 50px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.body};
  font-family: Georgia;
`;

const SigninInput = styled.input`
  font-family: Georgia;
  margin: 6px 0px;
  border-radius: 20px;
  border: solid 1px ${props => props.theme.tileShadow};
  background-color: ${props => props.theme.body};
  height: 30px;
  width: 20rem;
  @media (max-width: 668px) {
    width: 12rem;
    height: 2rem;
    margin: 6px 0px;
  }
  @media (max-width: 546px) {
    width: 9rem;
    height: 1.5rem;
    margin: 6px 0px;
  }
  @media (max-width: 414px) {
    width: 5rem;
    height: 1.1rem;
    margin: 6px 0px;
  }
  @media (max-width: 375px) {
    width: 2rem;
    height: 1rem;
    margin: 4px;
  }
  @media (max-width: 360px) {
    width: 2rem;
    height: 12px;
    margin: 3px;
  }

  @media (min-height: 639px) and (max-width: 360px) {
    width: 2rem;
    height: 12px;
    margin: 3px;
  }
  @media (max-width: 320px) {
    width: 0.2px;
    height: 2px;
  }

  color: ${props => props.theme.text};
  &:hover {
    background-color: ${props => props.theme.hoverinput};
  }
  padding: 7px 50px;
`;
const Button = styled.button`
  font-family: Georgia;
  border: none;
  color: ${props => props.theme.secondary};
  border-radius: 9px;
  height: 3rem;
  background: ${props => props.theme.primary};
  &:hover {
    background-color: ${props => props.theme.burger};
  }
  width: 20rem;
  @media (max-width: 668px) {
    height: 3rem;
    width: 10rem;
    font-size: 1em;
  }
  @media (max-width: 546px) {
    height: 2.5rem;
    width: 8rem;
    font-size: 0.9em;
  }
  @media (max-width: 414px) {
    height: 2rem;
    width: 5rem;
    font-size: 0.5em;
  }
  @media (max-width: 411px) {
    height: 1.8rem;
    width: 5rem;
    font-size: 0.8em;
  }
  @media (max-width: 375px) {
    height: 2rem;
    width: 5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 360px) {
    height: 3rem;
    width: 3rem;
    font-size: 0.5em;
  }

  @media (min-height: 639px) and (max-width: 360px) {
    height: 1.5rem;
    width: 4rem;
    font-size: 0.6em;
  }
  @media (max-width: 320px) {
    height: 1rem;
    width: 3rem;
    font-size: 0.2em;
  }
`;

export default Signin;
