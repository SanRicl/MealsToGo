import React, { useState } from 'react';
import RestaurantInfoCard from '../components/RestaurantInfoCard/RestaurantInfoCard';
import { SafeArea } from '../../../components/utility/SafeArea';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  // const [expanded, setExpanded] = useState(false);
  // const handlePress = () => setExpanded(!expanded);

  return (
    <SafeArea>
      <RestaurantInfoCard data={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            style={{ backgroundColor: 'white' }}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="french-fries" />}
            style={{ backgroundColor: 'white' }}
          >
            <List.Item title="Burguer w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            style={{ backgroundColor: 'white' }}
          >
            <List.Item title="Spaguetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushroom rotini" />
            <List.Item title="Steak Frites" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            style={{ backgroundColor: 'white' }}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetailScreen;
