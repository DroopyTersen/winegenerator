//angular.module('ionicApp', [])
window.ionicApp
  .controller('DashCtrl', function($scope, reviewGenerator, favoritesService) {
    var review = reviewGenerator.generate();
    $scope.review = review;
    $scope.generateReview = function() {
      $scope.review = reviewGenerator.generate();
    };
    $scope.addFavorite = function() {
      var fav = {
        title: $scope.review.substring(0, 25) + "...",
        text: $scope.review
      };
      favoritesService.save(fav);
    };
  })

.controller('FavoritesCtrl', function($scope, favoritesService) {
  var favorites = favoritesService.getAll();
  console.log(JSON.stringify(favorites));
  $scope.favorites = favoritesService.getAll();
})

.controller('FavoritesDetailsCtrl', function($scope, $stateParams, favoritesService) {
  $scope.favorite = favoritesService.getById($stateParams.favoriteId);
})

.controller('AccountCtrl', function($scope) {});
