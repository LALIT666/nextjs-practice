export default async function CatchAllRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const parameters = await params;
  return (
    <div>
      <h1>Docs Page</h1>
      <p>Path: {parameters.slug.join("/")}</p>
    </div>
  );
}
