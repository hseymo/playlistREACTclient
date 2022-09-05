import React from "react";
import './style.css';
import Song from '../Song/index';
import Create from '../Create'
import Single from '../Single'

const songs = [
    {
        id: 1,
        song_name: "I like apples",
        artist: "tobias",
        genre: "Country",
        user:"Haley"
    },
    {
        id:2,
        song_name: "I like bananas",
        artist: "toby",
        genre: "Country",
        user: 'Brenda'
    },
    {
        id:3,
        song_name: "I like kiwi",
        artist: "matt",
        genre: "Country",
        user: 'Christi'
    }

]

function Home() {
  return (
    <div className="Home">
        <section className="center">
            <h2 className="description">Enjoy our collaborative list of songs!</h2>
            <h2 className="description">Want to listen? Click on a song to see more information, then click for your preferred platform!</h2>
            <a href="/create"><button>Enter your song choice here</button></a>
        </section>
        <Song songs={songs}/>
        <Create></Create>
        <Single></Single>
    </div>
  );
}

export default Home;
