import { Intervals } from "../interfaces";

export const formatTimeAgo = (dateString: string) => {
  const intervals: Intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  const countIntervalSeconds: number = Math.floor(
    (new Date().getTime() - new Date(dateString).getTime()) / 1000
  );

  for (const [key, value] of Object.entries(intervals)) {
    const intervalCount: number = Math.floor(countIntervalSeconds / value);
    if (intervalCount >= 1) {
      switch (key) {
        case "year":
          return `${intervalCount} ${
            intervalCount === 1 ? "год" : intervalCount < 5 ? "года" : "лет"
          } назад`;
        case "month":
          return `${intervalCount} ${
            intervalCount === 1
              ? "месяц"
              : intervalCount < 5
              ? "месяца"
              : "месяцев"
          } назад`;
        case "day":
          return `${intervalCount} ${
            intervalCount === 1 ? "день" : intervalCount < 5 ? "дня" : "дней"
          } назад`;
        case "hour":
          return `${intervalCount} ${
            intervalCount === 1 ? "час" : intervalCount < 5 ? "часа" : "часов"
          } назад`;
        case "minute":
          return `${intervalCount} ${
            intervalCount === 1
              ? "минута"
              : intervalCount < 5
              ? "минуты"
              : "минут"
          } назад`;
      }
    }
  }
  return `${countIntervalSeconds} секунд назад`;
};
