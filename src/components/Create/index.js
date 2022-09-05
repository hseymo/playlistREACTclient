import React from "react";
import "./style.css";

function Create() {
  return (
    <div className="Create">
      <h1 className="center">Add your song!</h1>
      <form id="addForm">
        <label for="songName">Song Title:</label>
        <input type="text" name="songName" placeholder="song title" id="songName" />
        <label for="artist">Artist:</label>
        <input type="text" name="artist" placeholder="artist" id="artist" />
        <label for="genre">Genre:</label>
        <input type="text" name="genre" placeholder="genre" id="genre" />
        <label for="user">Your Name:</label>
        <input type="text" name="user" placeholder="your name" id="user" />
        <button id="addFormSubmit">Submit!</button>
      </form>
      <a href="/" className="center homeRedirect"><button>Take Me to Home Page</button></a>
    </div>
  );
}

export default Create;
