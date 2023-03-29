import '../../component/favorite-content';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <favorite-content></favorite-content>;
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#resto-item');
    // console.log(restaurants);

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML +=
        '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }
  },
};

export default Favorite;
