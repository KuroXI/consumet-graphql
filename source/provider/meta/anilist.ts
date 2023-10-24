import { axiosInstance } from "../../axios";
import {
  AiringScheduleProps,
  SearchProps,
  TrendingPopularProps,
} from "../../types/Anilist";
import "dotenv/config";

export async function search({ query, page }: SearchProps) {
  const { data } = await axiosInstance(`/meta/anilist/${query}`, {
    params: {
      page: page ?? 1,
    },
  });
  return data;
}

export async function getInfo({ id }: { id: string }) {
  const { data } = await axiosInstance(`/meta/anilist/info/${id}`);
  return data;
}

export async function getEpisodeLink({ id }: { id: string }) {
  const { data } = await axiosInstance(`/meta/anilist/watch/${id}`);
  return data;
}

export async function getTrending({ page, perPage }: TrendingPopularProps) {
  const { data } = await axiosInstance("/meta/anilist/trending", {
    params: {
      page: page ?? 1,
      perPage: perPage ?? 20,
    },
  });
  return data;
}

export async function getPopular({ page, perPage }: TrendingPopularProps) {
  const { data } = await axiosInstance("/meta/anilist/popular", {
    params: {
      page: page ?? 1,
      perPage: perPage ?? 20,
    },
  });
  return data;
}

export async function getRandom() {
  const { data } = await axiosInstance(`/meta/anilist/random-anime`);
  return data;
}

export async function getAiringSchedule({
  page,
  perPage,
  weeekStart,
  weekEnd,
  notYetAired,
}: AiringScheduleProps) {
  const { data } = await axiosInstance("/meta/anilist/airing-schedule", {
    params: {
      page: page ?? 1,
      perPage: perPage ?? 20,
      weeekStart: weeekStart,
      weeekEnd: weekEnd,
      notYetAired: notYetAired ?? false,
    },
  });

  return data;
}
