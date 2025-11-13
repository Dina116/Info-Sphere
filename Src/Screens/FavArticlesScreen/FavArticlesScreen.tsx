import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import FavArticlesScreenStyle from './FavArticlesScreenStyle';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/Stacks/StackNames';
import useFavStore from '../../Store/useFavStore';
import { ArticleType } from '../../types/ArticleType';
export default function FavArticlesScreen() {
  const { navigate } = useNavigation();
  const { favList } = useFavStore();

  function goToArticleDetails(article: ArticleType) {
    navigate(StackNames.SharedStack, {
      screen: ScreenNames.ArticleDetailsScreen,
      params: {
        article,
      },
    });
  }
  function renderItem(item: ArticleType) {
    return (
      <TouchableOpacity
        style={FavArticlesScreenStyle.cardContainer}
        onPress={() => goToArticleDetails(item)}
      >
        <Image
          style={FavArticlesScreenStyle.cardArticleImage}
          source={{ uri: item.urlToImage }}
        />
        <Text
          style={FavArticlesScreenStyle.cardArticleName}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {favList[0].title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={FavArticlesScreenStyle.container}>
      <FlatList data={favList} renderItem={({ item }) => renderItem(item)} />
    </View>
  );
}
