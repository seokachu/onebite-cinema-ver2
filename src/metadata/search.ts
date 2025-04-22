import { Metadata } from "next";

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}): Promise<Metadata> => {
  const { q } = await searchParams;

  if (!q) {
    return {
      title: "한입 시네마 - 검색 결과",
      description: "검색 결과 페이지입니다.",
      openGraph: {
        title: "한입 시네마 - 검색 결과",
        description: "검색 결과 페이지입니다.",
        images: ["/thumbnail.png"],
      },
    };
  }

  return {
    title: `${q} : 검색 결과`,
    description: `${q}에 대한 검색 결과입니다.`,
    openGraph: {
      title: `${q} : 검색 결과`,
      description: `${q}에 대한 검색 결과입니다.`,
      images: ["/thumbnail.png"],
    },
  };
};
