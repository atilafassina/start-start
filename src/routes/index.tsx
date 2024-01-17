import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import { Index, Show, createEffect } from "solid-js";
import { getData } from "~/lib/db";

export const route = {
  load: () => getData(),
};

export default function Home() {
  const data = createAsync(getData);

  createEffect(() => {
    if (data() === null) {
      throw new Error("404");
    }
  });

  return (
    <main>
      <Title>Good dogs</Title>
      <h1>Good dogs!</h1>
      <Show when={data()}>
        {(dogs) => (
          <>
            <p>I have {dogs().length} 🐶</p>
            <ul>
              <Index each={dogs()}>{(dog) => <li>{dog()}</li>}</Index>
            </ul>
          </>
        )}
      </Show>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
