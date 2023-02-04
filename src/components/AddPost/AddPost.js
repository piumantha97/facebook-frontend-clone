import React from "react";
import "./AddPost.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/images/1.jpg" alt="" className="addPostPic" />
          <input
            placeholder="What is this ?...."
            type="texxt"
            className="addPostInput"
          />
        </div>
        <hr className="postHr" />
        <div className="addPostBottom">
          <div className="addPostOption">
            <InsertPhotoIcon htmlColor="orange" className="addPhoto" />
            <span className="addPostOptionText"> Add Photo/Video</span>
          </div>
          <div className="addPostOption">
            <AddLocationAltIcon htmlColor="red" className="addPhoto" />
            <span className="addPostOptionText"> Add Location</span>
          </div>
          <div className="addPostOption">
            <LocalOfferIcon htmlColor="blue" className="addPhoto" />
            <span className="addPostOptionText"> Add Tag</span>
          </div>
          <div className="addPostOption">
            <LiveTvIcon htmlColor="tomato" className="addPhoto" />
            <span className="addPostOptionText"> Go Live</span>
          </div>
          <button className="PostBUtton">Post</button>
        </div>
      </div>
    </div>
  );
}
