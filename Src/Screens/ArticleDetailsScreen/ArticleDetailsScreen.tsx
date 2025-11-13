import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/mainStack';
import ScreenNames from '../../navigation/ScreenNames';
import ArticleScreenStyle from './ArticleScreenStyle';
import Ionicons from '@react-native-vector-icons/ionicons';
import useFavStore from '../../Store/useFavStore';
// import Toast from 'react-native-toast-message';
import { NativeModules } from 'react-native';

// const showToast = () => {
//   Toast.show({
//     type: 'success',
//     text1: 'Added!',
//     text2: 'Article added to favourites successfully 👏',
//   });
// };
const { ToastExample } = NativeModules;

export default function ArticleDetailsScreen() {
  const { goBack } = useNavigation();
  const { params } =
    useRoute<RouteProp<MainStackParamList, ScreenNames.ArticleDetailsScreen>>();
  const { article } = params ?? {};
  const { description, title, urlToImage } = article ?? {};
  const { addToFavList } = useFavStore();
  return (
    <SafeAreaView style={ArticleScreenStyle.safeContainer}>
      <ScrollView style={ArticleScreenStyle.container}>
        <View style={ArticleScreenStyle.header}>
          <TouchableOpacity style={ArticleScreenStyle.backBtn} onPress={goBack}>
            {/* <Text style={ArticleScreenStyle.goBackText}>Go Back</Text> */}
            <Ionicons name="chevron-back-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: urlToImage }}
          style={ArticleScreenStyle.coverImage}
        />
        <View style={ArticleScreenStyle.dataContainer}>
          <Text style={ArticleScreenStyle.title}>{title}</Text>
          <Text style={ArticleScreenStyle.description}>{description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={ArticleScreenStyle.addToFavBtn}
        onPress={() => {
          addToFavList(article);
          ToastExample.showToast('Added to Favourites ❤️');
        }}
      >
        <Text style={ArticleScreenStyle.addToFavText}>Add To Favourite</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
