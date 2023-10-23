import {
  getAiringSchedule,
  getEpisodeLink,
  getInfo,
  getPopular,
  getRandom,
  getTrending,
  search,
} from "./provider/meta/anilist";

export const resolver = {
  // META ANILIST
  anilist: {
    search: async ({ query, page }) => await search({ query, page }),

    getInfo: async ({ id }) => await getInfo({ id }),

    getEpisodeLink: async ({ id }) => await getEpisodeLink({ id }),

    getTrending: async ({ page, perPage }) => await getTrending({ page, perPage }),

    getPopular: async ({ page, perPage }) => await getPopular({ page, perPage }),

    getRandom: async () => await getRandom(),

    getAiringSchedule: async ({ page, perPage, weeekStart, weekEnd, notYetAired }) =>
      await getAiringSchedule({ page, perPage, weeekStart, weekEnd, notYetAired }),
  },
};
