import { Box, Button, Container, Grid } from '@mui/material';
import { blue, lightBlue } from '@mui/material/colors';
import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import { Context } from '../main';

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await auth.signInWithPopup(provider); 
      console.log(user);
    } catch (error) {
      console.error('Ошибка при входе:', error);
    }
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          style={{ width: 400, backgroundColor: lightBlue }}
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant={'outlined'}>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
