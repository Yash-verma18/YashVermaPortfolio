"use client";

import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("hello");

  return (
    <main className="flex min-h-sc reen flex-col items-center justify-between p-24">
      <h1 className="bg-red-500 text-2xl sm:bg-green-500 md:bg-orange-500 lg:bg-rose-500  xl:bg-indigo-500">
        Home page
      </h1>
    </main>
  );
}
