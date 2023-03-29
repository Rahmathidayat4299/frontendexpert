Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found'
  );
});

Scenario('like one restaurant', ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found'
  );

  I.amOnPage('/');
  I.wait(1);
  I.scrollTo('.box');

  I.seeElement('.card');
  I.wait(1);
  I.click(locate('.card-body button').first());
  I.wait(1);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.box');
});

Scenario('unlike one restaurant', ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found'
  );

  I.amOnPage('/');
  I.wait(1);
  I.scrollTo('.box');

  I.seeElement('.card');
  I.wait(1);
  I.click(locate('.card-body button').first());
  I.wait(1);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.box');
  I.click(locate('.card-body button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found'
  );
});
