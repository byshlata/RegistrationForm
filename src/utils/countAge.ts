const DAY = 24;
const SECOND = 3600;
const YEAR = 365.25;
const MILLISECONDS = 1000;

export const countAge = (data = ''): number =>
  Math.floor(
    (new Date().getTime() - new Date(data).getTime()) /
      (DAY * SECOND * YEAR * MILLISECONDS),
  );
