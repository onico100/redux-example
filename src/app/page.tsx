"use client";

import CounterDisplay from "../components/CounterDisplay";
import CounterButtons from "../components/CounterButtons";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Redux Counter App</h1>
      <CounterDisplay />
      <CounterButtons />
    </main>
  );
}
