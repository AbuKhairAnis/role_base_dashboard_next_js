async function ProductUpdate(params) {
  const { slug } = await params;
  return <div>Product Update Id {slug} </div>;
}

export default ProductUpdate;
