"use client";
import { useEffect } from "react";
import { useProduct } from "@/context/product";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import TimeAgo from 'javascript-time-ago'
import Pagination from "../product/Pagination";
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en'
import Image from "next/image";
TimeAgo.addDefaultLocale(en)

export default function ProductList() {
  const {
    products,
    currentPage,
    totalPages,
    fetchProducts,
    setUpdatingProduct,
  } = useProduct();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  useEffect(() => {
    fetchProducts(page);
}, [page]);
const handleClick= product =>{
    setUpdatingProduct(product)
    router.push("/dashboard/user/ad")
}
  return (
    <div className="container my-5">
        {products?.map((product) => (
            // <Link href={`/product/${product?.slug}`} >
            <div class="card mb-3" key={product._id}>
            <div class="row no-gutters">
              {/* <!-- Image Section --> */}
              <div class="col-md-4">
                <img src={product?.imageUrl1 || "/images/default.jpeg"} class="card-img" alt="Ad Image/"/>
              </div>
              {/* <!-- Details Section --> */}
              <div class="col-md-8">
                <div class="card-body">
                  <h4 class="card-title" onClick={()=>handleClick(product)}>
                  {product?.title}
                </h4>
        
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="h5 card-price ">Rs : {new Intl.NumberFormat().format(product.price)}</span>
                  </div>
                  {
                (() => {
                    if (product.hasOwnProperty('district'))
                        return <div class="d-flex justify-content-between align-items-center">
                    <span class="h5 text-success">{product?.district}</span>
                  </div>
                })()
                }
                <div className="ad-card-time-ago-div">
                      <ReactTimeAgo date={product.createdAt} locale="en-US" className="ad-card-time-ago-text"/>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
         // </Link>
        ))}
        <div className="row">
            <div className="col text-center">
<Pagination currentPage={currentPage}
  totalPages={totalPages}
  pathname={pathname}/>
            </div>

        </div>
     
    </div>
); }