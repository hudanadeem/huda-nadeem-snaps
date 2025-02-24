import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PhotoList from "../../components/PhotoList/PhotoList";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import DesktopDrawer from "../../components/DesktopDrawer/DesktopDrawer";
import "./HomePage.scss";

function HomePage() {
  const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "?api_key=325ecbce-cb56-4c39-8333-877b3e1bfb3b";
  const [photos, setPhotos] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/photos${API_KEY}`)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/tags${API_KEY}`)
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
  }, []);

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
        tags={tags}
        showFilters={true}
        showHomeLink={false}
      />

      <div className={`main__container${drawerOpen ? "--desktop" : ""}`}>
        <div className={`photo__container${drawerOpen ? "--desktop" : ""}`}>
          <Hero drawerOpen={drawerOpen} />
          <PhotoList filteredPhotos={filteredPhotos} drawerOpen={drawerOpen} />
        </div>
        <DesktopDrawer
          drawerOpen={drawerOpen}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          tags={tags}
        />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
