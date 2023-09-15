import {axiosInstance} from "../../axios";

export async function getInfo({ id }) {
  const { data } = await axiosInstance(`/meta/anilist/info/${id}`);
  return data;
}

export async function getEpisodeLink({ id }) {
  const { data } = await axiosInstance(`/meta/anilist/watch/${id}`);
  return data;
}

export async function getRecentEpisode({ page, perPage, provider }) {
  const { data } = await axiosInstance(`meta/anilist/recent-episodes?page=${page || 1}&perPage=${perPage || 20}&provider=${provider || "gogoanime"}`);
  return data;
}