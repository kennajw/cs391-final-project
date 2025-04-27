// Daniel Davydov's work
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center h-20 bg-[#22223B] border border-dashed">
      <h2 className="text-4xl text-[#FAF9FF] font-semibold p-4 text-center">
        <Link href="/">CS391 Final Project</Link>
      </h2>
    </header>
  );
}
