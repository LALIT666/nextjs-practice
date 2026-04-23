export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
