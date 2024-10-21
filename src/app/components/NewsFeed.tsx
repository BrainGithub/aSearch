import Image from 'next/image';

interface NewsItem {
  title: string;
  source: string;
  imageUrl: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Scientists discover new deep-sea species",
    source: "Science Daily",
    imageUrl: "/news-1.jpg",
  },
  {
    title: "Tech giant announces major breakthrough",
    source: "Business Weekly",
    imageUrl: "/news-2.jpg",
  },
  {
    title: "International Space Station welcomes first AI assistant",
    source: "Space News",
    imageUrl: "/news-3.jpg",
  },
  {
    title: "Electric vehicle sales hit record high",
    source: "Auto World",
    imageUrl: "/news-4.jpg",
  },
  {
    title: "World's tallest building to begin construction in Dubai",
    source: "Architecture Today",
    imageUrl: "/news-5.jpg",
  },
  {
    title: "New study reveals health benefits of meditation",
    source: "Health Journal",
    imageUrl: "/news-6.jpg",
  },
  {
    title: "Breakthrough in renewable energy technology",
    source: "Green Tech",
    imageUrl: "/news-7.jpg",
  },
  {
    title: "Global markets react to economic changes",
    source: "Financial Times",
    imageUrl: "/news-8.jpg",
  },
  {
    title: "New species of dinosaur discovered in Argentina",
    source: "Paleontology Today",
    imageUrl: "/news-9.jpg",
  },
  {
    title: "Advancements in AI technology reshape industries",
    source: "Tech Today",
    imageUrl: "/news-10.jpg",
  },
  {
    title: "Major city implements new public transport system",
    source: "Urban News",
    imageUrl: "/news-11.jpg",
  },
  {
    title: "Scientists develop vaccine for rare disease",
    source: "Medical News",
    imageUrl: "/news-12.jpg",
  },
  {
    title: "New archaeological findings in ancient Egypt",
    source: "History Channel",
    imageUrl: "/news-13.jpg",
  },
  {
    title: "Breakthrough in quantum computing research",
    source: "Science Daily",
    imageUrl: "/news-14.jpg",
  },
  {
    title: "New regulations for data privacy announced",
    source: "Tech Policy",
    imageUrl: "/news-15.jpg",
  },
  {
    title: "Innovative solutions for climate change",
    source: "Environmental News",
    imageUrl: "/news-16.jpg",
  },
  {
    title: "New trends in remote work culture",
    source: "Business Insider",
    imageUrl: "/news-17.jpg",
  },
  {
    title: "Exploration of Mars reveals new insights",
    source: "Space Exploration",
    imageUrl: "/news-18.jpg",
  },
  {
    title: "New culinary trends emerging in 2023",
    source: "Food Magazine",
    imageUrl: "/news-19.jpg",
  },
  {
    title: "Major sporting event set to take place this summer",
    source: "Sports Weekly",
    imageUrl: "/news-20.jpg",
  },
];

export default function NewsFeed() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Today's News</h2>
      {newsItems.map((item, index) => (
        <div key={index} className="flex items-center mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
          <div className="flex-grow pr-4">
            <h3 className="font-medium text-sm mb-1 line-clamp-2">{item.title}</h3>
            <p className="text-xs text-gray-600">{item.source}</p>
          </div>
          <div className="w-20 h-20 relative flex-shrink-0">
            <Image
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
