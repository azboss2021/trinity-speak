import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4">
      <Navbar />
      <div className="flex flex-col gap-8">
        <h2></h2>
        <button className="btn btn-primary">Caleb Wilson</button>
      </div>
    </main>
  );
}
