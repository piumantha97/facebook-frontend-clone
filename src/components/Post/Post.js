import React from "react";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";

export default function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <img src="./images/person.jpg" alt="" className="postImage" />
          <span className="postUserName">Piumantha Pamunuwa</span>
          <span className="postTime">5 mins ago</span>
        </div>
        <div className="postCenter">
          <div className="postCaption">Feeling happy in KDU</div>
        </div>
        <img src="./images/person.jpg" alt="" className="postedImage" />
        <hr className="postedImageDownLine" />
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./images/like.png" alt="" className="reactionPic" />
            <img src="./images/love.png" alt="" className="reactionPic" />
            <img src="./images/hh.png" alt="" className="reactionPic" />
            <span className="likeCount">BatMan and 225 Other</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">15 comments</span>
            <span className="commentCount">11 shares</span>
          </div>
        </div>
        <hr className="commentLineTop" />
        <div className="likeCommentShare">
          <div className="like">
            <ThumbUpOffAltIcon className="readActionPic" />
            <span className="likeCommentShare">Like</span>
          </div>
          <div className="comment">
            <ChatBubbleOutlineIcon className="readActionPic" />
            <span className="likeCommentShare">Comment</span>
          </div>
          <div className="share">
            <ReplyIcon className="readActionPic" />
            <span className="likeCommentShare">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}
