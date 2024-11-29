export type AnimeType = {
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


export type TrendingType = {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    description: string;
    coverImageTopOffset: number;
    titles: {
      en: string;
      en_jp: string;
      en_us: string;
      ja_jp: string;
    };
    canonicalTitle: string;
    abbreviatedTitles: string[];
    averageRating: string;
    ratingFrequencies: Record<string, string>;
    userCount: number;
    favoritesCount: number;
    startDate: string;
    endDate: string;
    nextRelease: string | null;
    popularityRank: number;
    ratingRank: number;
    ageRating: string;
    ageRatingGuide: string;
    subtype: string;
    status: string;
    tba: string | null;
    posterImage: {
      tiny: string;
      large: string;
      small: string;
      medium: string;
      original: string;
      meta: {
        dimensions: {
          tiny: { width: number; height: number };
          large: { width: number; height: number };
          small: { width: number; height: number };
          medium: { width: number; height: number };
        };
      };
    };
    coverImage: {
      tiny: string;
      large: string;
      small: string;
      original: string;
      meta: {
        dimensions: {
          tiny: { width: number; height: number };
          large: { width: number; height: number };
          small: { width: number; height: number };
        };
      };
    };
    episodeCount: number;
    episodeLength: number;
    totalLength: number;
    youtubeVideoId: string;
    showType: string;
    nsfw: boolean;
  };
  relationships: {
    [key: string]: {
      links: {
        self: string;
        related: string;
      };
    };
  };
};
