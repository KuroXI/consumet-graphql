import {
  getEpisodeLink,
  getInfo,
  getRecentEpisode,
} from "./provider/meta/anilist";

export const resolver = {
  // META ANILIST
  anilist: {
    info: async ({ id }) => await getInfo({ id }),
    episodeLink: async ({ id }) => await getEpisodeLink({ id }),
    recentEpisode: async ({ page, perPage, provider }) =>
      await getRecentEpisode({ page, perPage, provider }),
  },
};
