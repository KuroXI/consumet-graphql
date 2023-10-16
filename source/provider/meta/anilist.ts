import { axiosInstance } from "../../axios";

export async function getInfo({ id }: { id: string }) {
  const { data } = await axiosInstance(`/meta/anilist/info/${id}`);
  return data;
}

export async function getEpisodeLink({ id }: { id: string }) {
  const { data } = await axiosInstance(`/meta/anilist/watch/${id}`);
  return data;
}

export async function getTrending({ page, perPage }) {
  const { data } = await axiosInstance(
    `/meta/anilist/trending?page=${page || 1}&perPage=${perPage || 20}`
  );
  return data;
}

export async function getPopular({ page, perPage }) {
  const { data } = await axiosInstance(
    `/meta/anilist/popular?page=${page || 1}&perPage=${perPage || 20}`
  );
  return data;
}
