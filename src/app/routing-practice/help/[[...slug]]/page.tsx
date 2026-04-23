export default async function HelpPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Help Page</h1>
      <p>Path: {slug ? slug.join("/") : "Home"}</p>
    </div>
  );
}
