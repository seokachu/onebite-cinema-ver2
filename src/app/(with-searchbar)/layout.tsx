import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<div>로딩중...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </>
  );
}
