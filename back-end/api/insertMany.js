import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { db } from "./connect.js";

const newArtistsArray = artistArray.map((currentArtistObj) =>{
    const newArtistObj = {...currentArtistObj}
    delete newArtistObj.id
    return newArtistObj
})

const newSongsArray = songsArray.map((currentSongObj) =>{
    const newSongObj = {...currentSongObj}
    delete newSongObj.id
    return newSongObj
})

// const responseSong= await db.collection("songs").insertMany(newSongsArray)
const responseArtist= await db.collection("artists").insertMany(newArtistsArray)