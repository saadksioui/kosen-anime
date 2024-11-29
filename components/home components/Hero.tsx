"use client"

import { AnimeType, TrendingType } from "@/types/HeroTypes";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";



const Hero = () => {

  const [animes, setAnimes] = useState<AnimeType[]>([]);
  const [trending, setTrending] = useState<TrendingType[]>([]);
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

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
    const fetchTrending = async () => {
      try {
        const response = await fetch('https://kitsu.io/api/edge/trending/anime');
        const data = await response.json();
        setTrending(data.data);
      } catch (error) {
        console.error('Error fetching trending:', error);
      }
    };

    fetchAnimes();
    fetchTrending()
  }, [])

  return (
    <section className="py-4 w-[85%] lg:w-[95%] mx-auto">
      <div id="new-animes">
        <h2 className="text-xl font-bold mb-4 text-white font-poppins flex items-center gap-2">
          <Sparkles color="yellow" size={20} />
          <span>New Animes</span>
        </h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {animes.map((anime, index) => (
              <div key={index} className="mb-4 relative shadow-[inset_0px_-50px_50px_rgba(0,0,0,0.9)] rounded-md embla__slide">
                <img src={anime.coverImage} alt={anime.title} className="w-full h-full object-cover rounded-md relative z-[-2]" />
                <div className="absolute bottom-0 left-0 w-full px-4 py-2 z-10">
                  <h3 className="text-lg font-semibold font-epilogue text-white">{anime.title}</h3>
                  <p className="font-poppins text-xs text-white">{anime.synopsis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="trending">
        <h2 className="text-xl font-bold my-4 text-white font-poppins flex items-center gap-2">
          <Sparkles color="yellow" size={20} />
          <span>Trending Now</span>
        </h2>
        <div className="embla w-full" ref={emblaRef}>
          <div className="embla__container w-1/2">
          {trending?.map((trend, index) => (
            <div key={index} className="mb-4 relative shadow-[inset_0px_-50px_50px_rgba(0,0,0,0.9)] rounded-md embla__slide">
              <img src={trend?.attributes?.posterImage?.original} alt={trend?.attributes?.titles?.en} className="w-full h-full object-cover rounded-md relative z-[-2]" />
              <div className="absolute bottom-0 left-0 w-full px-4 py-2 z-10">
                <h3 className="text-lg font-semibold font-epilogue text-white">{trend?.attributes?.titles?.en || trend?.attributes?.titles?.en_jp}</h3>
                <p className="font-poppins text-xs text-white line-clamp-3">{trend?.attributes?.synopsis}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero
