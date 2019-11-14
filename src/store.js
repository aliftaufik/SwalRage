import Vue from "vue";
import Vuex from "vuex";
import db from "../config/firebase";
import * as firebase from "firebase/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    roomList: []
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_ROOM_LIST(state, roomList) {
      state.roomList = roomList;
    }
  },
  actions: {
    joinRoom(context, roomName) {
      const roomRef = db.collection("rooms").doc(roomName);

      return db.runTransaction(transaction => {
        return transaction.get(roomRef).then(roomDoc => {
          if (roomDoc.exists) {
            const players = roomDoc.data().players;
            if (players.length >= 4)
              return Promise.reject("Maximum player reached");

            players.push({
              username: context.state.username,
              score: 0
            });
            transaction.update(roomRef, { players });
            return Promise.resolve(roomRef);
          } else {
            transaction.set(roomRef, {
              players: [
                {
                  username: context.state.username,
                  score: 0
                }
              ]
            });
            return Promise.resolve(roomRef);
          }
        });
      });
    },
    loadRooms(context) {
      db.collection("rooms").onSnapshot(rooms => {
        context.commit(
          "SET_ROOM_LIST",
          rooms.docs.map(room => {
            return {
              id: 1,
              roomName: room.id
            };
          })
        );
      });
    }
  }
});
