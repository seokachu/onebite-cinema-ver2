export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const paramsId = await params;
  return <div>movie 페이지 번호 : {String(paramsId.id)}</div>;
}
