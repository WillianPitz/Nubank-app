import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main () {
  return (
    <Container>
      <Header />

    <Content>
      <Menu />

      <Card>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666"/>
          <Icon name="visibility-off" size={28} color="#666"/>
        </CardHeader>
        <CardContent>
          <Title>Saldo disponível</Title>
          <Description>R$ 157.645,55</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferêrencia de R$ 20,00 recebida de Diego Schell Fernandes hoje ás 06:00h
          </Annotation>
        </CardFooter>
      </Card>
    </Content>

      <Tabs />
    </Container>
  );
}


