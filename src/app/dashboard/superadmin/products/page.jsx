import DashboardHeader from "@/app/component/Dashboard/Shared/DashboardHeader/DashboardHeader";
import ProductList from "@/app/component/Dashboard/Shared/Products/ProductList";
import { products } from "@/app/utils/Products";

function Products() {
  return (
    <div className="dashboard-content">
      <DashboardHeader
        title="Product Management"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Products", href: "/dashboard/products" },
        ]}
      >
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Add Product
          </button>
        </div>
      </DashboardHeader>
      <div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default Products;
