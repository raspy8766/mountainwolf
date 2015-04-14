var data = require('../data/testData');

module.exports = {
  getRestaurantsWithName: function(req, res, next) {

    var restaurants = data.data.restaurants;
    var list = [];
    restaurants.forEach(function(restaurant){
      if (restaurant.name === req.query.name) {
        list.push(restaurant);
      }

    })
    res.end(JSON.stringify(list));
  },

  getRestaurantWithID: function(req, res, next) {
    var restaurants = data.data.restaurants;
    var list = [];
    restaurants.forEach(function(restaurant) {

      if (restaurant.id === Number(req.params.id)) {
        list.push(restaurant);
      }

    })
    res.end(JSON.stringify(list[0]));
  },

  getReviewsWithRestaurantID: function(req, res, next) {
    var reviews = data.data.reviews;

    var list = [];
    var id = Number(req.params.id);
    console.log(req.url, id)
    reviews.forEach(function(review) {
      if (review.restaurantID === id) {
        list.push(review);
      }
      console.log(list);
    })
    res.end(JSON.stringify(list));
  },

  postReview: function(req, res, next) {
    res.status(202).send('post request was heard');
  }

}
