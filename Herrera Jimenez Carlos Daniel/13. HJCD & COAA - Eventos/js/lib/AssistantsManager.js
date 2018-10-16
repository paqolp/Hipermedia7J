var AssistantsManager = {
    collection: [],
    idCounter: 0,

    addAssistant: function(name, email) {
        this.collection.push({
            id: ++(this.idCounter),
            name: name,
            email: email
        });

        return this.collection[this.collection.length - 1].id;
    },

    deleteAssistantByID: function(id) {
        let index = this.collection.findIndex(assistant => id === assistant.id);
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