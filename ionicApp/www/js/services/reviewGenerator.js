var reviewGenerator = function(seedData) {
    var getRandom = function(array) {
        var randomIndex = Math.round(Math.random() * (array.length - 1));
        return array[randomIndex];
    };

    var getNote = function() {
        return getRandom(seedData.notes);
    }

    var getMiddle = function() {
        return getRandom(seedData.middles);
    };

    var getOpening = function() {
        return getRandom(seedData.openings);
    };

    var populateNotes = function(middle) {
        var i = 0;
        for (i = middle.indexOf('~', i); i <= middle.lastIndexOf('~'); i++) {
            if (i = middle.lastIndexOf('~')) {
                middle = middle.replace("~", getNote());
            }
        }

        return middle;
    }

    var generate = function() {
        return getOpening() + populateNotes(getMiddle());
    };

    return {
        generate: generate
    };
};

window.ionicApp.factory('reviewGenerator', ['seedData', reviewGenerator]);