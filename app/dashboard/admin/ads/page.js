"use client";
import ProductList from "@/components/admin/ProductList";
export default function AddProduct() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-3">

        </div>
        <div className="col-md-6">
          <p className="lead mb-4">List of Products</p>
          <ProductList />
        </div>
        <div className="col-md-3">

        </div>
      </div>
</div>
); }