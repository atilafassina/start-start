import { cache } from "@solidjs/router";

async function goFetch() {
  return await fetch("https://dog.ceo/api/breeds/list/all").then((r) => {
    if (!r.ok) {
      throw new Error("bad response");
    }
    return r.json();
  });
}

export const getData = cache(async () => {
  "use server";

  try {
    const dogs = await goFetch();
    return Object.keys(dogs.message);
  } catch (error) {
    return null;
  }
}, "cache-key-all-dogs");
