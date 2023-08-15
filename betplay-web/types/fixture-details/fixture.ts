export type Fixture = {
  id: number;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  periods: PeriodsApiDto;
  venue: VenueApiDto;
  status: StatusApiDto;
  league: any;
};

export type PeriodsApiDto = {
  first: number | null;
  second: number | null;
};

export type VenueApiDto = {
  id: number | null;
  name: string | null;
  city: string | null;
};

export type StatusApiDto = {
  long: string;
  short: string;
  elapsed: number | null;
};
