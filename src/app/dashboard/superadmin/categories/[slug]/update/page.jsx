export default async function UpadeCategory({ params }) {
  const { slug } = await params;

  return <div>Product Update Id: {slug}</div>;
}
