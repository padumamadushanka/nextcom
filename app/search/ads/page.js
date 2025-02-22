"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { useSearchParams } from "next/navigation";
import { useProduct } from "@/context/product";

export default function ProductsSearchPage() {
  const { setProductSearchQuery, productSearchResults, setProductSearchResults } = useProduct();
  const productSearchParams = useSearchParams();
  const query = productSearchParams.get("productSearchQuery");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setProductSearchQuery(query);
      fetchProductResults(query, 1, true);
    }
  }, [query]);

  const fetchProductResults = async (query, page, reset = false) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.API}/search/ads?productSearchQuery=${query}&page=${page}&limit=2`
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      // Ensure it's always an array
      setProductSearchResults((prev) =>
        reset ? data.products || [] : [...(prev || []), ...(data.products || [])]
      );

      setTotalPages(data.totalPages || 1);
      setCurrentPage(data.currentPage || 1);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">

        </div>
        <div className="col-md-6">
          <p>Search Results ({Array.isArray(productSearchResults) ? productSearchResults.length : 0})</p>

          {/* Debugging: Show Raw Data */}
          {/* {JSON.stringify(productSearchResults)} */}

          {/* Show "No ads found" if empty */}
          {Array.isArray(productSearchResults) && productSearchResults.length === 0 && !loading && (
            <p className="text-center text-muted">No ads found</p>
          )}

          {/* Render Ads */}
          {Array.isArray(productSearchResults) &&
            productSearchResults.map((ad, i) => (
              <div key={i}>
                <ProductCard product={ad} />
              </div>
            ))}

          {/* Load More Button */}
          {currentPage < totalPages && productSearchResults.length > 0 && (
            <div className="d-flex justify-content-center mt-4">
              <button
                className="btn btn-primary"
                onClick={() => fetchProductResults(query, currentPage + 1)}
                disabled={loading}
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
        <div className="col-md-3">

        </div>
      </div>
    </div>
  );
}
