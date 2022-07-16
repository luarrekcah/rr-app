import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Chip, List} from 'react-native-paper';

const HomeComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://www.devluar.com/assets/img/logo.png',
            }}
          />
          <Text style={styles.textLogo}>Bem vindo ao app!</Text>
        </View>
        <View style={styles.infosView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <View style={styles.boxTexts}>
                <Text style={styles.textPrimary}>264</Text>
                <Text style={styles.textSecundary}>
                  Trabalhos Gráficos Entregues
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.boxTexts}>
                <Text style={styles.textPrimary}>2</Text>
                <Text style={styles.textSecundary}>Anos de Experiência</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.boxTexts}>
                <Text style={styles.textPrimary}>6</Text>
                <Text style={styles.textSecundary}>Empresas Associadas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.boxTexts}>
                <Text style={styles.textPrimary}>6</Text>
                <Text style={styles.textSecundary}>Projetos Ativos</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.list}>
          <View style={styles.detail} />
          <List.Section title="Geral">
            <List.Accordion
              title="Informações"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{backgroundColor: 'white'}}
              left={props => <List.Icon {...props} icon="info" />}>
              <List.Item title="Sobre mim" />
              <List.Item title="Skills" />
              <List.Item title="Redes Sociais" />
            </List.Accordion>
            <List.Accordion
              title="Toolkit"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{backgroundColor: 'white'}}
              left={props => <List.Icon {...props} icon="tools" />}>
              <List.Item title="Recuperar Número de Whatsapp" />
            </List.Accordion>
            <List.Subheader>Serviços</List.Subheader>
            <List.Item
              title="Criação de Sites"
              description="Criação de aplicações web, manutenção e outros."
              left={props => <List.Icon {...props} icon="web" />}
            />
            <List.Item
              title="Design Gráfico"
              description="Criação de artes vetoriais e bitmaps para divulgação, tais como artes de crachá, camisas, cartão visitas, fachadas e outros."
              left={props => <List.Icon {...props} icon="pen" />}
            />
            <List.Item
              title="Criação de Apps Android/iOS"
              description="Desenvolvimento de aplicativos para as plataformas supracitadas e publicação em lojas conhecidas. (PlayStore AppleStore)."
              left={props => <List.Icon {...props} icon="android" />}
            />
            <List.Item
              title="Assessoria de Empresas"
              description="Faça sua empresa aparecer no Google e ganhar visibilidade."
              left={props => <List.Icon {...props} icon="rocket-launch" />}
            />
            <List.Item
              title="Pacotes de Mídia Social"
              description="Compra de seguidores, curtidas e visualizações em redes sociais."
              left={props => <List.Icon {...props} icon="account" />}
            />
          </List.Section>
          <Chip icon="information" onPress={() => console.log('Pressed')}>
            V 0.0.1 BETA | RR App
          </Chip>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    margin: 50,
    resizeMode: 'contain',
  },
  textLogo: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  detail: {
    backgroundColor: 'gray',
    width: 100,
    height: 5,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 100,
  },
  infosView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
  boxTexts: {
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#400a06',
    padding: 5,
    borderRadius: 20,
    margin: 10,
  },
  textPrimary: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  textSecundary: {
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
  },
  list: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
  },
});

export default HomeComponent;
