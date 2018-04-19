var playlist = { artistName: "songTitle" };



//This function destrucively adds the song and artist as a key-value pair to the playlist object
function updatePlaylist (playlist, artistName, songTitle) {
                        //obj, key, value
  //obj [key] = value;
  playlist [artistName] = songTitle;
  
  //return obj;
  return playlist;
}





function removeFromPlaylist (playlist, artistName) {
  
  delete playlist[artistName];
  return playlist;
}