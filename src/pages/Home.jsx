import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const nav = useNavigate();
  const state = useSelector(state => state.status)
  useEffect(() => {
     appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    }, []);
  });

  if (!state && posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center h-[50vh]">
        <Container>
          <div className="flex flex-wrap ">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold text-white hover:text-gray-500"
              onClick={()=>nav('/login')}
              >
                LOGIN TO VIEW BLOGS
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  else if (state && posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center h-[50vh]">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold text-white hover:text-gray-500">
                NO POSTS TO VIEW
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 mx-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
