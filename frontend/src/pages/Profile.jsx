import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const navigate = useNavigate();

  const user = {
    name: "Sneha Rajput ❤️",
    about: "Animal lover 🐾 | Helping pets find homes 🏡",
    profileImg: "https://cdn-icons-png.flaticon.com/512/847/847969.png", // default profile
    coverImg:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80", // nature bg
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  };

  const handleToast = (msg) => {
    toast.info(msg, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  const posts = [
    { title: "Rescued Puppy 🐶", content: "Met this cutie today, gave food and care ❤️" },
    { title: "Street Cat", content: "Took her for a check-up, she’s healthy now!" },
  ];

  const adoptions = [
    { title: "Adopted Bruno 🐕", content: "Finally found him a forever home!" },
  ];

  const saved = [
    { title: "Pet Training Tips 🎥", content: "A great reel about puppy behavior!" },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 font-sans">
      <ToastContainer />

      {/* Profile Header */}
      <div
        className="w-full h-60 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${user.coverImg})` }}
      >
        <div className="absolute bottom-0 left-0 flex items-end p-6 bg-gradient-to-t from-black/50 to-transparent w-full">
          <img
            src={user.profileImg}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg mr-4"
          />
          <div className="text-white">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm">{user.about}</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href={user.social.instagram}
          className="text-yellow-600 hover:text-black transition font-semibold"
        >
          Instagram
        </a>
        <a
          href={user.social.twitter}
          className="text-yellow-600 hover:text-black transition font-semibold"
        >
          Twitter
        </a>
        <a
          href={user.social.linkedin}
          className="text-yellow-600 hover:text-black transition font-semibold"
        >
          LinkedIn
        </a>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mt-8 border-b border-gray-300">
        {["posts", "adoption", "saved"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 text-lg font-semibold transition ${
              activeTab === tab
                ? "text-yellow-600 border-b-4 border-yellow-500"
                : "text-gray-600 hover:text-yellow-600"
            }`}
          >
            {tab === "posts"
              ? "Posts"
              : tab === "adoption"
              ? "Make Adoption"
              : "Saved"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "posts" && (
          <div>
            <button
              onClick={() => handleToast("Post creation not available yet!")}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              + Create Post
            </button>

            <div className="mt-6 space-y-4">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
                >
                  <h4 className="font-semibold text-gray-800">{post.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "adoption" && (
          <div>
            <button
              onClick={() => handleToast("Adoption creation not available yet!")}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              + Create Adoption
            </button>

            <div className="mt-6 space-y-4">
              {adoptions.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
                >
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "saved" && (
          <div>
            <button
              onClick={() => navigate("/community")}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Check Community
            </button>

            <div className="mt-6 space-y-4">
              {saved.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
                >
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
