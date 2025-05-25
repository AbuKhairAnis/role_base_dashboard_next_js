export default async function UpdateShop({ params }) {
  const { slug } = await params;

  return <div>Product Update Id: {slug}</div>;
}
