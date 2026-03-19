import Profile from "../components/UserProfile"
// import myBackgroundVideo from '/video/video.mp4';
import MusicPlayer from "../components/MusicPlayer";
const Home = () => {
  return (

    <div className="relative h-screen w-full overflow-y-auto text-white font-sans">
      <Profile/>
      <MusicPlayer />
    </div>
  );
};

export default Home;