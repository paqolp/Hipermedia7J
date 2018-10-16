var EventsManager = {
    KEY: "EVENTS",
    collection: [],
    idCounter: 0,

    loadEventsFromSessionStorage: function() {
        let str = sessionStorage.getItem(this.KEY);

        if (str !== null) {
            this.collection = JSON.parse(str);
            this.idCounter = this.collection[this.collection.length - 1].id;
        } else {
            this.collection = [];
            this.idCounter = 0;
        }
    },

    saveEventsToSessionStorage: function() {
        if (this.collection.length != 0)
            sessionStorage.setItem(this.KEY, JSON.stringify(this.collection));
    },

    /*
     * name: String = name of the event.
     * date: String = date of the event.
     * time: String = time of the event.
     * location: String = location of the event.
     * address: String = address of the event.
     * description: String = Brief summary of the event.
     * host: String = name of the event host.
     * email: String = email of the event host.
     * gallery: Array = urls representing the images of the event.
     * activities: Array = information about the activities of the event.
     * assistants: Array = information of the event assistants.
     */
    addEvent: function(name, date, time, location, address, summary, host, email, gallery, activities, assistants) {
        this.collection.push({
            id: ++(this.idCounter),
            name: name,
            date: date,
            time: time,
            location: location,
            address: address,
            summary: summary,
            host: host,
            email: email,
            gallery: gallery,
            activities: activities,
            assistants: assistants
        });

        return this.collection[this.collection.length - 1].id;
    },

    updateEventByID: function(id, name, date, time, location, address, summary, host, email, gallery, activities, assistants) {
        let index = this.collection.findIndex(event => event.id === id);
        this.collection[index] = {
            id: id,
            name: name,
            date: date,
            time: time,
            location: location,
            address: address,
            summary: summary,
            host: host,
            email: email,
            gallery: gallery,
            activities: activities,
            assistants: assistants
        };

        return id;
    },

    getNumberOfEvents: function() {
        return this.collection.length;
    },

    getEventsColletion: function() {
        return this.collection;
    },

    forEach: function(callback) {
        for (let i = 0; i < this.collection.length; ++i)
            callback(this.collection[i]);
    },

    getEventByID: function(id) {
        let index = this.collection.findIndex(event => id === event.id);
        return this.collection[index];
    },

    clear: function() {
        this.collection = [];
        this.idCounter = 0;
    },

    toJSON: function(str) {
        return JSON.parse(str);
    },

    toString: function(json) {
        return JSON.stringify(json);
    }
};