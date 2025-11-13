import { create } from 'zustand';
import { ArticleType } from '../types/ArticleType';

type FavStoreState = {
  favList: ArticleType[];
  addToFavList: (article: ArticleType) => void;
};
const useFavStore = create<FavStoreState>(set => ({
  favList: [],
  addToFavList: article =>
    set(state => ({ favList: [...state.favList, article] })),
}));

export default useFavStore;
