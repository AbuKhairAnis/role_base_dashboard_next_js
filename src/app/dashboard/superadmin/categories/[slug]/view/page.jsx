async function ViewCategory({ params }) {
  const { slug } = await params;
  return <div>Product View Id {slug}</div>;
}

export default ViewCategory;
