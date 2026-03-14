import Profile from "../components/UserProfile"
import myBackgroundVideo from '/video/video.mp4';

const Home = () => {
  return (
    // 2. Container: full screen, relative positioning, overflow hidden
    <div className="relative h-screen w-full overflow-y-auto text-white font-sans">
      
      {/* 3. Video Element with Tailwind utility classes */}
      <video 
        autoPlay 
        loop     
        muted   
        className="absolute bottom-0 right-0 min-w-full min-h-full w-auto h-auto z-[-1] object-cover"
      >
        <source src={myBackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Profile/>
    </div>
  );
};

export default Home;