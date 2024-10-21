import Image from "next/image";
import SearchBar from './components/SearchBar';
import SocialIcons from './components/SocialIcons';
import NewsFeed from './components/NewsFeed';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-md mx-auto bg-gray-100">
      <SearchBar />
      <SocialIcons />
      <NewsFeed />
    </div>
  );
}
