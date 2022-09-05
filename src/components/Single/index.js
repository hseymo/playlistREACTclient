import React from "react";
import "./style.css";

function Single() {
  return (
    <div className="Single singleContainer container">
      <section class="singleSong card">
        <h1>Song Title: </h1>
        <h2>Artist: </h2>
        <section class="subsection">
          <h3>Genre: </h3>
          <h3>Picked by: </h3>
        </section>
        <section class="btnSection">
          <button class="updateBtn" data-id="1">
            Update
          </button>
          <button class="deleteBtn" data-id="2">
            Delete
          </button>
        </section>
        <section>
          <a href="https://www.spotify.com" target="_blank">
            <button>Click here to listen on Spotify!</button>
          </a>
          <a href="https://www.applemusic.com" target="_blank">
            <button>Click here to listen on Apple Music!</button>
          </a>
        </section>
      </section>
    </div>
  );
}

export default Single;
