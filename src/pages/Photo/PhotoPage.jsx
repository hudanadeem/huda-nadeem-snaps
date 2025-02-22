import "./PhotoPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { useState, useEffect } from "react";
import tags from "../../data/tags.json";
import Form from "../../components/Form/Form";
import Comment from "../../components/Comment/Comment";

function PhotoPage() {
  const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "?api_key=325ecbce-cb56-4c39-8333-877b3e1bfb3b";
  const [photos, setPhotos] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/photos/${id}${API_KEY}`)
      .then((response) => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API_URL}/photos/${id}/comments${API_KEY}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]);

  if (loading || !photos) {
    return <div>Loading photo...</div>;
  }

  return (
    <>
      <Header
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        tags={tags}
        showFilters={false}
        showHomeLink={true}
      />
      <PhotoCard photos={photos} />
      <Form API_URL={API_URL} API_KEY = {API_KEY} id={id} setComments={setComments} comments={comments}/>
      <div className="comments">
        <div className="comment__count"> {comments?.length} Comments</div>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default PhotoPage;
