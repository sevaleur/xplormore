"use server";

export const getCurrent = async (query: string) => {
  const res = await fetch(
    `${process.env.WEATHER_BASEURL}/current.json?key=${process.env.WEATHER_KEY}&q=${query}&aqi=no`
  );

  const data = await res.json();
  return data;
};

export const getForecast = async (query: string) => {
  const res = await fetch(
    `${process.env.WEATHER_BASEURL}/forecast.json?key=${process.env.WEATHER_KEY}&q=${query}&days=7&aqi=no`
  );

  const data = await res.json();
  return data;
};
