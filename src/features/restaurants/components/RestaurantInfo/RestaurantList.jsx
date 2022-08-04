import React, { useContext } from 'react';
import Spacer from '../../../../components/spacer/Spacer';
import { RestaurantsContext } from '../../../../services/restaurant/restaurantsContext';
import RestaurantInfoCard from '../RestaurantInfoCard/RestaurantInfoCard';
import { Area, RestaurantFList } from './styles';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import FadeInView from '../../../../components/animations/FadeAnimations';

const RestaurantList = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <Area>
      {isLoading && (
        <View style={{ position: 'absolute', top: '50%', left: '50%', right: '50%' }}>
          <ActivityIndicator animating={true} color={Colors.red400} size={50} />
        </View>
      )}
      <RestaurantFList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <FadeInView>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: item,
                  })
                }
              >
                <Spacer position={'bottom'} size={'large'}>
                  <RestaurantInfoCard data={item} />
                </Spacer>
              </TouchableOpacity>
            </FadeInView>
          </>
        )}
        keyExtractor={(item) => item.placeId}
      />
    </Area>
  );
};

export default RestaurantList;
