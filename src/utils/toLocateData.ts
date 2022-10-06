export const toLocateData = (value: string): string =>
  new Date(value).toLocaleDateString('ru-Ru');
