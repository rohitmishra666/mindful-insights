import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block transform transition-transform hover:scale-105">
      <div className="w-full bg-[#EAB2A0] rounded-xl p-4">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="rounded-xl"
        />
      </div>
      <h2 className="text-xl font-bold text-white mt-2">{title}</h2>
    </Link>
  );
}

export default PostCard;
