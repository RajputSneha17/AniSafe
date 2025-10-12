import React, { useRef, useEffect } from "react";
import { FaHeart, FaComment, FaBookmark } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const posts = [
  {
    id: 1,
    name: "Sneha Rajput",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    location: "Rajasthan, India",
    video: "./video1.mp4",
    description: "Limsy X Shampy Billa KC Fast!",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    location: "Delhi, India",
    video: "./video2.mp4",
    description: "There’s no beauty in animal cruelty.",
  },
  {
    id: 3,
    name: "Anita Verma",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    location: "Jaipur, India",
    video: "./video3.mp4",
    description: "Kya aap ka maksad bhagana hai ya dard pahunchana hai?",
  },
  {
    id: 4,
    name: "Neha Verma",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    location: "Jaipur, India",
    image: "./pet-care.webp",
    description: "Today I saved a dog from street, feeling happy!",
  },
];

const Post = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    // Intersection Observer for auto-play/pause
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // auto-play
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 } // 60% visible -> play
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    // Cleanup
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  useEffect(() => {
    // Enable audio after first user interaction
    const enableAudio = () => {
      videoRefs.current.forEach((video) => {
        if (video) video.muted = false;
      });
      window.removeEventListener("scroll", enableAudio);
      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("scroll", enableAudio, { once: true });
    window.addEventListener("click", enableAudio, { once: true });
  }, []);

    const notify = () => toast("Sorry, this feature is not implemented yet!");
  

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <ToastContainer />
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="bg-white w-[90%] md:w-[600px] rounded-2xl shadow-md mb-10 overflow-hidden"
        >
          {/* --- Header --- */}
          <div className="flex items-center gap-3 px-4 py-3">
            <img
              src={post.profilePic}
              alt={post.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">{post.name}</h2>
              {post.location && (
                <p className="text-sm text-gray-500">{post.location}</p>
              )}
            </div>
          </div>

          {/* --- Image or Video --- */}
          <div>
            {post.video ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={post.video}
                controls
                muted // start muted, auto-unmute after first interaction
                className="w-full max-h-[500px] object-cover"
                playsInline
                loop
              />
            ) : (
              <img
                src={post.image}
                alt="Post"
                className="w-full max-h-[500px] object-cover"
              />
            )}
          </div>

          {/* --- Description --- */}
          <div className="px-5 py-3 text-gray-800 text-base">
            <p>{post.description}</p>
          </div>

          {/* --- Buttons --- */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200">
            <div className="flex items-center gap-6 text-gray-700 text-xl">
              <button onClick={notify} className="hover:text-red-500 transition">
                <FaHeart />
              </button>
              <button onClick={notify} className="hover:text-blue-500 transition">
                <FaComment />
              </button>
            </div>
            <button onClick={notify} className="text-xl text-gray-700 hover:text-yellow-500 transition">
              <FaBookmark />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
