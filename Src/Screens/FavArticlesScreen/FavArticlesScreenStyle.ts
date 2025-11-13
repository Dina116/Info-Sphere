import { StyleSheet } from 'react-native';

const FavArticlesScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:100,
  },
cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: 'brown',
    paddingEnd: 10,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom:10,
  },
  cardArticleName: {
    textAlign: 'left',
    flex: 1,
  },
  cardArticleImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
export default FavArticlesScreenStyle;
