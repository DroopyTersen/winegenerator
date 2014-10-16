var favoritesService = function($localStorage) {
    var key = "wg-favorites"
    var favs = $localStorage.getObject(key) || [];
    
    var save = function(favorite) {
        favorite.id = (new Date()).toJSON();
        favs.push(favorite);
        console.log(JSON.stringify(favs));
        $localStorage.setObject(key, favs);
    };

    var getById = function(id) {
        var matches = favs.filter(function(fav) {
            return (fav.id === id);
        })

        return matches.length ? matches[0] : null;
    };

    var getAll = function() {
        return favs;
    };

    return {
        save: save,
        getById: getById,
        getAll: getAll
    };
};

window.ionicApp.factory('favoritesService', ['$localStorage', favoritesService]);