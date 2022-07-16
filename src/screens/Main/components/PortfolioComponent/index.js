import React from 'react';
import {
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {List, Card, Title, Paragraph, Button} from 'react-native-paper';

const PortfolioComponent = () => {
  const partnersLogos = [
    'https://cdn.glitch.global/55ea3463-31d7-4807-9eee-98d4f54e9d89/raifas-logo.png?v=1652304353530',
    'https://cdn.glitch.global/55ea3463-31d7-4807-9eee-98d4f54e9d89/dwalt.png?v=1650419087329',
    'https://cdn.glitch.global/55ea3463-31d7-4807-9eee-98d4f54e9d89/inovart.png?v=1650419087329',
    'https://cdn.glitch.global/55ea3463-31d7-4807-9eee-98d4f54e9d89/genios-art.png?v=1650419087328',
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logosContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
              horizontal={true}
              data={partnersLogos}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <Image
                    style={styles.logos}
                    source={{
                      uri: item,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </View>
        <List.Subheader>Projetos de Programação</List.Subheader>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Card style={styles.cardBox}>
            <Card.Content>
              <Title>Titulo da Postagem</Title>
              <Paragraph>lalalalaalala</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Ver</Button>
            </Card.Actions>
          </Card>
          <Card style={styles.cardBox}>
            <Card.Content>
              <Title>Titulo da Postagem</Title>
              <Paragraph>lalalalaalala</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Ver</Button>
            </Card.Actions>
          </Card>
        </ScrollView>
        <List.Subheader>Design Gráfico</List.Subheader>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Card style={styles.cardBox}>
            <Card.Content>
              <Title>Titulo da Postagem</Title>
              <Paragraph>lalalalaalala</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Ver</Button>
            </Card.Actions>
          </Card>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {},
  cardBox: {
    width: 300,
    marginHorizontal: 10,
  },
  logosContainer: {
    textAlignVertical: 'center',
  },
  logos: {
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 100,
    width: 100,
    height: 100,
  },
});

export default PortfolioComponent;
