import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import TopNewsStyle from './TopNewsStyle';
import { ArticleType } from '../../types/ArticleType';
import { get } from '../../utils/helpers/apiService';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/mainStack';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/Stacks/StackNames';

export default function TopNews() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const { navigate } =
    useNavigation<NavigationProp<MainStackParamList, ScreenNames.HomeScreen>>();

  useEffect(() => {
    getNews();
  }, []);
  function getNews() {
    const url = '/everything?domains=techcrunch.com,thenextweb.com';
    get(url)
      .then(response => {
        console.log('Full Response:', response.data);
        const articles = response.data?.articles.filter(
          (article: ArticleType) => article?.urlToImage !== null,
        );
        setArticles(articles);
      })
      .catch(error => {
        console.log('Response Error: ', error);
      });
  }
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
        style={TopNewsStyle.cardContainer}
        onPress={() => goToArticleDetails(item)}
      >
        <Image
          style={TopNewsStyle.cardArticleImage}
          source={{ uri: item.urlToImage }}
        />
        <Text
          style={TopNewsStyle.cardArticleName}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {articles[0].title}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={TopNewsStyle.container}>
      <Text style={TopNewsStyle.sectionTitle}>Top News</Text>
      <FlatList
        data={articles}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={TopNewsStyle.listContainer}
        scrollEnabled={false}
      />
    </View>
  );
}
