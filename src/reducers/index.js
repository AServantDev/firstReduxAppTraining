import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Even Flow", duration: "4:53" },
    { title: "Come As You Are", duration: "3:46" },
    { title: "Black Hole Sun", duration: "5:21" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
