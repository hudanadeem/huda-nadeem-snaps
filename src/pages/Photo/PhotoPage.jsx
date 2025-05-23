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
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(`${baseURL}/photos/${id}`);
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    if (id) fetchPhoto();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${baseURL}/photos/${id}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (id) fetchComments();
  }, [id]);

  let tags;
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(`${baseURL}/tags`);
        tags = response.data;
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  if (!photo || !comments) {
    return <div>Loading ...</div>;
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
      <PhotoCard photo={photo} />
      <Form
        baseURL={baseURL}
        id={id}
        setComments={setComments}
        comments={comments}
      />
      <section className="comments">
        <div className="comment__count"> {comments?.length} Comments</div>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </section>
      <Footer />
    </>
  );
}

export default PhotoPage;
