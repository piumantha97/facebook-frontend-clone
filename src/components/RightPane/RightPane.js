import React from "react";
import "./RightPane.css";
export default function RightPane() {
  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer"></div>
      <div className="adContainer">
        <span className="sponsered">Sponsered</span>
        <img src="./images/dominos.jpg" alt="" className="adImage" />
        <span className="adText">Order Your Food with Dominoz Pizza</span>
      </div>
      <div className="birthdayContainer">
        <img src="./images/gift.jpg" alt="" className="birthdayImage" />
        <span className="birthdayText">
          <b>Kasun Kalhara</b> and two others having birthdays today
        </span>
      </div>
      <div className="friendList">
        <li className="onlineFriend">
          <div className="onlineFriendImageContainer">
            <img src="./images/person.jpg" alt="" className="onlineFriendImg" />
            <span className="onlineStatus"></span>
          </div>
          <span className="onlineFriendName"> Vidushan Thennakoon</span>
        </li>
        <li className="onlineFriend">
          <div className="onlineFriendImageContainer">
            <img
              src="./images/person1.jpg"
              alt=""
              className="onlineFriendImg"
            />
            <span className="onlineStatus"></span>
          </div>
          <span className="onlineFriendName">Kushani Yatigammana</span>
        </li>
        <li className="onlineFriend">
          <div className="onlineFriendImageContainer">
            <img src="./images/person.jpg" alt="" className="onlineFriendImg" />
            <span className="onlineStatus"></span>
          </div>
          <span className="onlineFriendName"> Tharusha Geethanjana</span>
        </li>
        <li className="onlineFriend">
          <div className="onlineFriendImageContainer">
            <img
              src="./images/person2.jpg"
              alt=""
              className="onlineFriendImg"
            />
            <span className="onlineStatus"></span>
          </div>
          <span className="onlineFriendName"> Vimukthi Kulasekara</span>
        </li>
        <li className="onlineFriend">
          <div className="onlineFriendImageContainer">
            <img
              src="./images/person3.jpg"
              alt=""
              className="onlineFriendImg"
            />
            <span className="onlineStatus"></span>
          </div>
          <span className="onlineFriendName"> Pramuditha Gunarathne</span>
        </li>
      </div>
    </div>
  );
}
