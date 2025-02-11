"use server";

export const getSuggestions = async (query: string) => {
  const res = await fetch(
    `${process.env.WEATHER_BASEURL}/search.json?key=${process.env.WEATHER_KEY}&q=${query}`
  );

  const data = await res.json();
  return data;
};
