import axios from "axios";

export default {
//   // Gets all books
  getEvents: function() {
    return axios.get("/api/events");
  },
  
  getClassifieds: function() {
    return axios.get("/api/classifieds");
  },  
  getUser: function(user) {
    return axios.get("/api/users/"+user);
  },
  getEvent: function(user) {
    console.log(user)
    return axios.get("/api/events/"+user);
  },
  getClassified: function(user) {
    return axios.get("/api/classifieds/"+user);
  },

  getUsers: function() {
    return axios.get("/api/users");
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  updateUserEvent: function(user, savedEvents){
    return axios.put("/api/users/"+user, savedEvents);

  },
  getLocalEvents: function(city) {
    return axios.get("https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address="+city+"&location.within=10mi&include_all_series_instances=on&token=45R2QWVW4HNS3IKSFGIK");
  },

  getUserAddrLatLong:function(address){
    return axios.get("http://www.mapquestapi.com/geocoding/v1/address?key=dhqUSipT8jFl3NGid7eL6SwE8YhAcdY9&location="+address)
  }
  


//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};

// ABOVE IS AN EXAMPLE OF THE API HELPER
