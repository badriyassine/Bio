import Profile from "../components/UserProfile";
import MusicPlayer from "../components/MusicPlayer";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-y-auto text-white font-sans">
      <Profile />
      <div className="hidden sm:hidden md:block">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Home;
