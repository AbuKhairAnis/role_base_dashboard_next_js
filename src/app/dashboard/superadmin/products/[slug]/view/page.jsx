async function ProductView(params) {
  const { slug } = await params;
  return <div>Product View Id {slug}</div>;
}

export default ProductView;
