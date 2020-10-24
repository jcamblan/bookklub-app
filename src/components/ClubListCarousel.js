import React, { useState } from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Text, theme, H1, Separator, Card } from 'ui';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const ClubCarouselCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ClubDetails', {
          clubId: item.id,
          title: item.name,
        })
      }
    >
      <Card>
        <Text>
          {item?.name} ({item?.users?.totalCount} membres)
        </Text>
        <Text>Dernière session : {item?.sessions?.nodes[0]?.readDueDate}</Text>
        {Boolean(item?.currentSession?.id) && <Text>SESSION EN COURS</Text>}
      </Card>
    </TouchableOpacity>
  );
};

const ClubListCarousel = ({ clubs }) => {
  return (
    <View style={{ marginLeft: -20, width: screenWidth }}>
      <Carousel
        keyExtractor={(item) => item?.id}
        data={clubs}
        renderItem={({ item }) => <ClubCarouselCard item={item} />}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 50}
        slideStyle={{ justifyContent: 'center' }}
      />
    </View>
  );
};

export default ClubListCarousel;
