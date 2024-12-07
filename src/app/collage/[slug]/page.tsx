import { getUserTopArtists } from "@/api/getUserTopArtists";
import CollageClient from "./CollageClient";

export default async function CollagePage({
  params,
  searchParams,
}: Readonly<{
  params: { slug: string }; // Parametro de rota: 'slug' (username)
  searchParams: { grid: string; period: string }; // Parâmetros de consulta
}>) {
  const { slug } = params;
  const { grid, period } = searchParams;

  if (!slug || !grid || !period) {
    return <div>Parâmetros ausentes</div>;
  }

  const response = await getUserTopArtists(slug, period);

  return (
    <div>
      <CollageClient data={response} />
    </div>
  );
}
