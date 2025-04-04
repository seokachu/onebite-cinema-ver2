import SearchBar from "@/components/SearchBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
