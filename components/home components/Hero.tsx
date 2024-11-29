"use client"

import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";


type AnimeType = {
  title: string;
  synopsis?: string;
  genres: string[];
  episodes: number;
  status: "ongoing" | "completed";
  releaseDate: string;
  studio: string;
  averageRating: number;
  coverImage: string;
};

type AnimesType = AnimeType[];

const Hero = () => {

  const [animes, setAnimes] = useState<AnimesType>([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch('/data/Anime.json');
        const data = await response.json();
        setAnimes(data);
      } catch (error) {
        console.error('Error fetching animes:', error);
      }
    };

    fetchAnimes();
  }, [])

  return (
    <section className="py-4 w-[85%] lg:w-[95%] mx-auto">
      <div id="new-animes">
      <h2 className="text-xl font-bold mb-4 text-white font-poppins flex items-center gap-2">
        <Sparkles color="yellow" size={20}/>
        <span>New Animes</span>
      </h2>
        <div>
        {animes.map((anime, index) => (
          <div key={index} className="mb-4 relative shadow-[inset_0px_-50px_50px_rgba(0,0,0,0.9)] rounded-md">
            <img src={anime.coverImage} alt={anime.title} className="w-full h-fit object-cover rounded-md relative z-[-2]" />
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 z-10">
            <h3 className="text-lg font-semibold font-epilogue text-white">{anime.title}</h3>
            <p className="font-poppins text-xs text-white">{anime.synopsis}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div id="trending">

      </div>
    </section>
  )
};

export default Hero
