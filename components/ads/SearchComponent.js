"use client";
import { useEffect } from "react";
import { useProduct } from "@/context/product";

// export default   function  SearchComponent(){
//     const { productSearchQuery, setProductSearchQuery,fetchProductSearchResults } = useProduct();


// return(
//     <div className="h-search-form text-center">
//           <form onSubmit={fetchProductSearchResults} role="search" >
//               <input type="search"
//         placeholder="Search vehicles..."
//         aria-label="Search"
//         onChange={(e) => setProductSearchQuery(e.target.value)}
//         value={productSearchQuery}/>
//               <button type="submit">Search</button>
//           </form>
//     </div>
// )

// }
import { useState } from "react";

export default function SearchComponent() {
    const { productSearchQuery, setProductSearchQuery,fetchProductSearchResults } = useProduct();

  return (
    <div className="container mt-150 mb-100">
      <form
        className="row justify-content-center"
        onSubmit={fetchProductSearchResults}
        role="search"
      >
        <div className="col-md-8 col-lg-6">
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded-start"
              placeholder="Search vehicles..."
              aria-label="Search"
              onChange={(e) => setProductSearchQuery(e.target.value)}
              value={productSearchQuery}
            />
            <button className="btn  btn-primary" type="submit">
              search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
