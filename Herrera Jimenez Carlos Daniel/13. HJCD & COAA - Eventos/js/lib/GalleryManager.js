var GalleryManager = {
    collection: [],
    idCounter: 0,

    addImage: function(url) {
        this.collection.push({
            id: ++(this.idCounter),
            url: url
        });

        return this.collection[this.collection.length - 1].id;
    },

    deleteURLByID: function(id) {
        let index = this.collection.findIndex(frame => id === frame.id);
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
    }
};