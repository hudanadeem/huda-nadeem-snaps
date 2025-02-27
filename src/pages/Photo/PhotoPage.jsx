import "./PhotoPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import Comment from "../../components/Comment/Comment";

const baseURL = import.meta.env.VITE_API_URL;


function PhotoPage() {
  const [photos, setPhotos] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/photos/${id}`)
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
      .get(`${baseURL}/photos/${id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]);

  let tags;
  useEffect(() => {
    axios
      .get(`${baseURL}/tags`)
      .then((response) => {
        tags = response.data;
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
      <Form baseURL={baseURL} id={id} setComments={setComments} comments={comments}/>
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
