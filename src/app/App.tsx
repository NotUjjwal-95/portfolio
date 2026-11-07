import { useState } from "react";

type World = "home" | "test-dark";

export default function App() {
  const [world, setWorld] = useState<World>("home");

  const toggleWorld = () => {
    setWorld((currentWorld) =>
      currentWorld === "home" ? "test-dark" : "home",
    );
  };

  return (
    <main
      data-world={world}
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-8 px-6 py-16">
        <header className="space-y-3">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            REIGNAX · Theme system
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Hello, Ujjwal.
          </h1>
          <p className="font-body text-base text-foreground/75">
            One component tree. Two worlds. Tokens handle the transformation.
          </p>
        </header>

        <section className="rounded-2xl border border-line bg-muted p-6">
          <p className="font-body text-sm text-foreground/70">
            Active world
          </p>
          <p className="mt-1 font-display text-xl font-semibold">
            {world}
          </p>
          <p className="mt-3 font-body text-sm text-accent">
            This text uses the world-specific accent color and body font.
          </p>
        </section>

        <div>
          <button
            type="button"
            onClick={toggleWorld}
            aria-pressed={world === "test-dark"}
            className="rounded-lg bg-primary px-5 py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Switch to {world === "home" ? "dark" : "home"} world
          </button>
        </div>
      </div>
    </main>
  );
}
