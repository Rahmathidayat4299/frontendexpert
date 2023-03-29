/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import CONFIG from '../../global/config';

const createRestaurantItemTemplate = (restaurant) => `
<section tabindex="0" class="box">
  <div class="card">
	<img class="lazyload" data-src="${
    CONFIG.BASE_IMAGE_URL + restaurant.pictureId
  }" 
      alt="${restaurant.name}" />
    <div class="card-body">
      <h2 class="title">${restaurant.name}</h2>
      <div class="card-info">
        <div class="place-info">
          <i class='bx bxs-map' style='color:#B0B0B0'></i>
          <p class="icon-info">${restaurant.city}</p>
        </div>
        <div class="rating-info">
          <i class='bx bxs-star' style='color:#FFD700'></i>
          <p class="icon-info">${restaurant.rating}</p>
        </div>
      </div>
      <p class="description">${restaurant.description}</p>
      <button onclick="document.location='${`/#/detail/${restaurant.id}`}'">Lihat Selengkapnya</button>
    </div>
  </div>
</section>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
<style>
/* CSS for Heading Details */

.heading-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.pic-detail {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-bottom: 2rem;
}

.pic-detail img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.desc-details {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.head-detail {
  width: 100%;
  margin-bottom: 1rem;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

.info-details {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.city-info,
.address-info,
.rating-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
}

.city-info p,
.address-info p,
.rating-info p {
  margin-left: 0.5rem;
  font-size: 1.2rem;
}

.restaurant-description {
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
}

.restaurant-description h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.restaurant-description p {
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
  margin: 0;
}

.category-details {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.category-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.category-item p {
  margin: 0 1rem;
  font-size: 1.2rem;
  background-color: #333;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

</style>
  <div class="heading-details">
    <div class="pic-detail">
		<img tabindex="0" class="lazyload" data-src="${
      CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    }" 
        alt="${restaurant.name}" />
    </div>
    <div class="desc-details">
      <div class="head-detail">
        <h1 tabindex="0" class="title">${restaurant.name}</h1>
      </div>
      <div class="info-details">
        <div class="city-info">
          <i class="bx bxs-city"></i>
          <p tabindex="0"> ${restaurant.city}</p>
        </div>
        <div class="address-info">
          <i class="bx bxs-map"></i>
          <p>${restaurant.address}</p>
        </div>
        <div class="rating-info">
          <i class="bx bxs-star" style="color: #ffd700"></i>
          <p tabindex="0">  ${restaurant.rating}</p>
        </div>
      </div>
      <div class="restaurant-description">
        <h2>Deskripsi</h2>
        <p tabindex="0">  ${restaurant.description}</p>
      </div>
      <div class="category-details">
        <div class="category-item">
          ${restaurant.categories.map((m) => `<p>${m.name}</p>`).join('')}
        </div>
      </div>
    </div>
  </div>
  <style>
  .menu-details {
    background-color: #f1f1f1;
    padding: 20px;
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .item-details {
    display: flex;
    justify-content: space-between;
  }
  
  .menu-col-1, .menu-col-2 {
    width: 48%;
  }
  
  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .eat-menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .eat-item {
    font-size: 18px;
    margin-bottom: 5px;
  }  
  </style>
  <div class="menu-details">
    <h3>Menu</h3>
    <div class="item-details">
      <div class="menu-col-1">
        <h4>Makanan</h4>
        ${restaurant.menus.foods
          .map(
            (m) => `<ol class="eat-menu">
          <li class="eat-item">${m.name}</li>
        </ol>`
          )
          .join('')}
      </div>
      <div class="menu-col-2">
        <h4>Minuman</h4>
        ${restaurant.menus.drinks
          .map(
            (m) => `<ol class="eat-menu">
          <li class="eat-item">${m.name}</li>
        </ol>`
          )
          .join('')}
        
      </div>
    </div>
  </div>
<style>
.review-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
}

.view-details {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-details {
  display: flex;
  align-items: center;
  padding: 20px;
}

.picture-details img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 20px;
}

.user-details h4 {
  font-size: 18px;
  margin-bottom: 5px;
}

.comment-details {
  padding: 0 20px 20px;
}

.comment-details p {
  font-size: 16px;
  line-height: 1.5;
}

.comment-interaction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
}

.comment-reply-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  margin-right: 10px;
  min-width: 44px;
  min-height: 44px;
}

.comment-share-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
}

.comment-share-btn:hover {
  background-color: #0069d9;
}
//review detail
/* Gaya umum untuk semua elemen form */
.customer-review form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  min-width: 44px;
  min-height: 44px;
}

.customer-review input[type="text"],
.customer-review textarea {
  padding: 12px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
  min-width: 44px;
  min-height: 44px;
}

.customer-review textarea {
  resize: none;
}

.customer-review button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  min-width: 44px;
  min-height: 44px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.customer-review button[type="submit"]:hover {
  background-color: #3e8e41;
}

/* style untuk judul */
.customer-review h4 {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}

/* style untuk label input */
.customer-review .text-heading {
  font-size: 20px;
  margin-bottom: 5px;
}

/* style untuk label komentar */
.customer-review .text-heading.heading-2 {
  margin-top: 20px;
}
      
</style>
  <div class="review-details">
    <h3>Review</h3>
    <div class="customer-details">
    ${restaurant.customerReviews
      .map(
        (m) => `<div class="view-details">
        <div class="profile-details">
          <div class="picture-details">
            <img src="../public/profiles/user.png" alt="${m.name}" />
          </div>
          <div class="user-details">
            <h4>${m.name}</h4>
            <p>${m.date}</p>
          </div>
        </div>
        <div class="comment-details">
          <p>${m.review}</p>
        </div>
        <div class="comment-interaction">
          <a href="#" class="comment-reply-link">Balas</a>
          <button class="comment-share-btn">Bagikan</button>
        </div>
      </div>`
      )
      .join('')}
      </div>
      <div class="customer-review">
        <h4>Leave a Reply</h4>
        <form method="post"
          class="post-review">
          <p class="text-heading">Name</p>
          <input type="text" id="name" required />
          <p class="text-heading heading-2">Comment</p>
          <input type="text" id="review" required />
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class='bx bx-heart' style='color:#db0000' aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class='bx bxs-heart' style='color:#db0000' ></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
