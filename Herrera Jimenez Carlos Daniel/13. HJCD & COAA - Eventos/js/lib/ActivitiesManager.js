var ActivitiesManager = {
    collection: [],
    idCounter: 0,

    addActivity: function(name, date, timeStart, timeEnd, description) {
        this.collection.push({
            id: ++(this.idCounter),
            name: name,
            date: date,
            timeStart: timeStart,
            timeEnd: timeEnd,
            description: description
        });

        return this.collection[this.collection.length - 1].id;
    },

    deleteActivityByID: function(id) {
        let index = this.collection.findIndex(event => id === event.id);
        this.collection.splice(index, 1);
    },

    getCollection: function() {
        return this.collection;
    },

    setCollection: function(vector) {
        this.collection = vector;
    },

    clear: function() {
        this.collection = [];
        this.idCounter = 0;
    }
};