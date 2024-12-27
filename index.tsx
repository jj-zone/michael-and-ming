import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

// Mock data - replace with actual YouTube API data
const mockVideos = [
  {
    id: '1',
    title: 'Latest Adventure in Taiwan',
    thumbnail: '/api/placeholder/320/180',
    description: 'Join Michael and Ming as they explore the night markets of Taipei and sample incredible street food...',
    date: '2024-12-20'
  },
  {
    id: '2',
    title: 'Traditional Tea Ceremony',
    thumbnail: '/api/placeholder/320/180',
    description: 'Experience a traditional Chinese tea ceremony with us as we learn about the ancient art of tea making...',
    date: '2024-12-18'
  },
  {
    id: '3',
    title: 'Street Food Tour',
    thumbnail: '/api/placeholder/320/180',
    description: 'We take you on a mouthwatering tour of the best street food spots in our neighborhood...',
    date: '2024-12-15'
  },
  {
    id: '4',
    title: 'Cultural Festival Vlog',
    thumbnail: '/api/placeholder/320/180',
    description: 'Join us at an amazing cultural festival where we witness traditional performances...',
    date: '2024-12-12'
  },
  {
    id: '5',
    title: 'Cooking Traditional Dishes',
    thumbnail: '/api/placeholder/320/180',
    description: 'Learn how to make authentic Chinese dishes with us in this cooking special...',
    date: '2024-12-10'
  }
];

const VlogSite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Carousel */}
      <div className="relative h-64 mb-8 overflow-hidden rounded-lg bg-gray-100">
        <div 
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {mockVideos.map((video) => (
            <div 
              key={video.id}
              className="min-w-full h-full relative cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {mockVideos.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>

      {/* Video posts */}
      <div className="space-y-6">
        {mockVideos.slice(0, 4).map((video) => (
          <div 
            key={video.id}
            className="flex gap-6 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative w-80 h-44 flex-shrink-0">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">{video.title}</h2>
              <p className="text-gray-600 mb-4">{video.description}</p>
              <p className="text-sm text-gray-500">{video.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video overlay */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <div className="relative pt-[56.25%]">
              {/* Replace with actual YouTube embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <p className="text-white">YouTube video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VlogSite;
