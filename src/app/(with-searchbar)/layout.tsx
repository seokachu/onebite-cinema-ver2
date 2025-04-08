import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </>
  );
}
