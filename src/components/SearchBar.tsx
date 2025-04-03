"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search) return alert("검색어를 입력해 주세요.");
    if (q === search) return;

    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            {/* <span>영화제목 검색</span> */}
            <input
              type="text"
              value={search}
              onChange={onChangeSearch}
              placeholder="검색어를 입력해 주세요."
            />
          </label>
          <button type="submit">검색</button>
        </div>
      </form>
    </div>
  );
}
