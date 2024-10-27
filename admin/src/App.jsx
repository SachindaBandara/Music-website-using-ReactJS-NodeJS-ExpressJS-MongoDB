import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import AddSong from "./pages/AddSong";
import AddAlbum from "./pages/AddAlbum";
import ListSong from "./pages/ListSong";
import ListAlbum from "./pages/ListAlbum";
import SlideBar from "./components/SlideBar";
import NavBar from "./components/NavBar";

export const url = 'http://localhost:4000'

const App = () => {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />

      <SlideBar />

      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
        <NavBar />
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/add-album" element={<AddAlbum />} />
            <Route path="/list-song" element={<ListSong />} />
            <Route path="/list-album" element={<ListAlbum />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
