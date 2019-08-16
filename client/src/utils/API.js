import axios from "axios";

export default {
  getEvents: function() {
    return axios.get("/api/events");
  },
  getClassifieds: function() {
    return axios.get("/api/classifieds");
  },
  updateUserEvent: function(user, savedEvents){
    return axios.put("/api/users/" + user, savedEvents);
  },
  getLocalEvents: function(city) {
    return axios.get("https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address="+city+"&location.within=10mi&include_all_series_instances=on&token=45R2QWVW4HNS3IKSFGIK");
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function() {
    return axios.get("/api/users");
  },

};

// ABOVE IS AN EXAMPLE OF THE API HELPER
