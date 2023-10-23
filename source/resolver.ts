import {
  getAiringSchedule,
  getEpisodeLink,
  getInfo,
  getPopular,
  getRandom,
  getTrending,
} from "./provider/meta/anilist";
import { AiringSchedule } from "./types/Anilist";

export const resolver = {
  // META ANILIST
  anilist: {
    getInfo: async ({ id }) => await getInfo({ id }),
    getEpisodeLink: async ({ id }) => await getEpisodeLink({ id }),
    getTrending: async ({ page, perPage }) => await getTrending({ page, perPage }),
    getPopular: async ({ page, perPage }) => await getPopular({ page, perPage }),
    getRandom: async () => await getRandom(),
    getAiringSchedule: async (props: AiringSchedule) =>
      await getAiringSchedule(props),
  },
};
