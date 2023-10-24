import {
  getAiringSchedule,
  getEpisodeLink,
  getInfo,
  getPopular,
  getRandom,
  getTrending,
  search,
} from "./provider/meta/anilist";
import {
  AiringScheduleProps,
  SearchProps,
  TrendingPopularProps,
} from "./types/Anilist";

export const resolver = {
  // META ANILIST
  anilist: {
    search: async ({ query, page }: SearchProps) =>
      await search({ query, page }),

    getInfo: async ({ id }: { id: string }) => await getInfo({ id }),

    getEpisodeLink: async ({ id }: { id: string }) =>
      await getEpisodeLink({ id }),

    getTrending: async ({ page, perPage }: TrendingPopularProps) =>
      await getTrending({ page, perPage }),

    getPopular: async ({ page, perPage }: TrendingPopularProps) =>
      await getPopular({ page, perPage }),

    getRandom: async () => await getRandom(),

    getAiringSchedule: async (props: AiringScheduleProps) =>
      await getAiringSchedule(props),
  },
};
