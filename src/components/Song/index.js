import React from "react";
import './style.css';

function Song({songs}) {
    console.log(songs)
  return (
    <div className="Song container listContainer">
        {songs.map((song)=> (
            <section class="songCard card" key={song.id}>
              {/* <a href="/songs/{{song.id}}"></a> */}
            <h1>{song.song_name}</h1>
            <h2>Artist: {song.artist}</h2>
            <h3>Genre: {song.genre}</h3>
            <h3>Picked by: {song.user}</h3>
            </section>
        ))}

    </div>
  );
}

export default Song;
