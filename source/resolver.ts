import {
  getEpisodeLink,
  getInfo,
  getPopular,
  getTrending,
} from "./provider/meta/anilist";

export const resolver = {
  // META ANILIST
  anilist: {
    info: async ({ id }) => await getInfo({ id }),
    episodeLink: async ({ id }) => await getEpisodeLink({ id }),
    trending: async ({ page, perPage }) => await getTrending({ page, perPage }),
    popular: async ({ page, perPage }) => await getPopular({ page, perPage }),
  },
};
