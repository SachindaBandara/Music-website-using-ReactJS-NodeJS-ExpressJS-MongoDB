import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams(); // get album id from URL parameters
  const [albumData, setAlbumData] = useState(null); // Initialize as null or an empty object
  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    // Find the album that matches the ID from the URL
    const selectedAlbum = albumsData.find((item) => item._id === id);
    if (selectedAlbum) {
      setAlbumData(selectedAlbum);
    }
  }, [id, albumsData]); // Added albumsData as a dependency

  return albumData ? (
    <>
      <NavBar />

      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.image}
          alt={albumData.name}
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5 mr-1"
              src={assets.Tunes_logo}
              alt="Spotify Logo"
            />
            <b>Tunes</b> 1,235,458 likes <b>50 songs,</b> about 2 hr 30 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock Icon" />
      </div>
      <hr />

      {songsData
        .filter((item) => item.album === albumData.name) // Filter songs that belong to the selected album
        .map((item, index) => (
          <div
            onClick={() => playWithId(item._id)} // Play song when clicked
            key={item._id} // Use song ID as key
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img
                className="inline w-10 mr-5"
                src={item.image}
                alt={item.name}
              />
              {item.name}
            </p>
            <p className="text-[15px]">{albumData.name}</p>
            <p className="text-[15px] hidden sm:block">5 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
    </>
  ) : null;
};

export default DisplayAlbum;
