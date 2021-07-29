import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  StatusBar,
} from 'react-native';
import styleO from './styleO';

const image = {
  uri:
    'https://ih1.redbubble.net/image.121379875.8690/st,small,507x507-pad,600x600,f8f8f8.u1.jpg',
};

export default function Opportunity() {
  const [pic, setPic] = useState([]);
  const [nbDay, setNbDay] = useState('');

  useEffect(() => {
    pictures();
  }, []);

  function handlePic(text) {
    setNbDay(text);
  }

  function pictures() {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${nbDay}&api_key=Q3072AUR2Se7xPzy1r4Oavp16P9H3TaZ8JISvN4g`
    )
      .then((res) => res.json())
      .then((jsonRes) => {
        setPic(jsonRes);
        console.log(jsonRes);
      });
  }

  return (
    <View style={styleO.mainContainer}>
      <View style={styleO.headerContainer}>
        <View>
          <Text>Sol : {pic.photos?.[0]?.sol}</Text>
        </View>

        <View>
          <Text>Earth Date: {pic.photos?.[0]?.earth_date}</Text>
        </View>
      </View>
      <ScrollView>
        {pic.photos?.map((photos) => (
          <View style={styleO.dayContainer}>
            <Image
              style={{ height: 500, margin: 1 }}
              source={{
                uri: photos?.img_src,
              }}
            />
          </View>
        ))}
      </ScrollView>

      <View>
        <TextInput
          style={{
            textAlign: 'center',
            borderWidth: 1,
            height: 30,
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            fontSize: 15,
          }}
          onChangeText={handlePic}
          placeholder="    The Solar's Number     "
          placeholderTextColor="#000000"
        />
      </View>
      <Button
        style={{
          marginBottom: 5,
          marginTop: 5,
          marginLeft: 5,
          marginRight: 5,
        }}
        title="Enter"
        onPress={pictures}
      />
    </View>
  );
}
