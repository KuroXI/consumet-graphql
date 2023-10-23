export type SearchProps = {
  query: string;
  page?: number;
};

export type AiringScheduleProps = {
  page?: number;
  perPage?: number;
  weeekStart?: string;
  weekEnd?: string;
  notYetAired?: boolean;
};
