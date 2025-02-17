import "./App.scss";
import { useState } from "react";
import photos from "./data/photos.json";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PhotoList from "./components/PhotoList/PhotoList";
import Footer from "./components/Footer/Footer";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <>
      <Header
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <Hero />
      <PhotoList filteredPhotos={filteredPhotos} drawerOpen={drawerOpen} />
      <Footer />
    </>
  );
}

export default App;
