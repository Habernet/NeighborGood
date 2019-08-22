import axios from "axios";

export default {
   // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
     // Gets all classifieds

  getClassifieds: function() {
    return axios.get("/api/classifieds");
  },
     // Gets logged in user details

  getUser: function(user) {
    return axios.get("/api/users/" + user);
  },
   // Gets events posted by logged in user details

  getEvent: function(user) {
    console.log(user);
    return axios.get("/api/events/" + user);
  },
   // Gets classifieds posted by logged in user details

  getClassified: function(user) {
    return axios.get("/api/classifieds/" + user);
  },
  //Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  //Save new userData
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  //Saves events to logged in user
  updateUserEvent: function(user, savedEvents) {
    return axios.put("/api/users/" + user, savedEvents);
  },

  //EventBrite API call to get local events based on user address-city,state
  getLocalEvents: function(city) {
    return axios.get(
      "https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=" +
        city +
        "&location.within=10mi&include_all_series_instances=on&token=45R2QWVW4HNS3IKSFGIK"
    );
  },
  //MapQuest API call to get lat lng coordinates corresponding to the logged in user's address
  getUserAddrLatLong: function(address) {
    return axios.get(
      "https://www.mapquestapi.com/geocoding/v1/address?key=dhqUSipT8jFl3NGid7eL6SwE8YhAcdY9&location=" +
        address
    );
  },
  //Update or edit logged in user information
  editUser:function(user, userData){
    return axios.put("/api/users/" + user, userData);
  }
};
