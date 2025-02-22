"use client";
import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Resizer from 'react-image-file-resizer'
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  // State
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [updatingProduct, setUpdatingProduct] = useState(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  // text search
const [productSearchQuery, setProductSearchQuery] = useState("");
const [productSearchResults, setProductSearchResults] = useState([]);
 
  const uploadImages = (e) => {
    let files = e.target.files;
    let allUploadedFiles = updatingProduct
      ? updatingProduct.images || []
      : product
      ? product.images || []
  : [];
    if (files) {
      // Check if the total combined images exceed 10
      const totalImages = allUploadedFiles.length + files.length;
      if (totalImages > 4) {
        alert("You can't upload more than 4 images.");
  return; }
      setUploading(true);
      const uploadPromises = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const promise = new Promise((resolve) => {
          Resizer.imageFileResizer(
            file,
            1280,
            720,
            "JPEG",
            50,
  0,
  (uri) => {
              fetch(`${process.env.API}/ad/upload/image`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ image: uri }),
              })
              .then((response) => response.json())
              .then((data) => {
                // Insert the new image at the beginning of the array
                allUploadedFiles.unshift(data);
                resolve();
              })
              .catch((err) => {
                console.log("CLOUDINARY UPLOAD ERR", err);
                resolve();
}); },
"base64"
); });
      uploadPromises.push(promise);
    }
    Promise.all(uploadPromises)
      .then(() => {
        // Update the state after all images are uploaded
        updatingProduct
          ? setUpdatingProduct({
              ...updatingProduct,
              images: allUploadedFiles,
            })
          : setProduct({ ...product, images: allUploadedFiles });
        setUploading(false);
      })
      .catch((error) => {
        console.log("Error uploading images: ", error);
        setUploading(false);
}); }
};

const deleteImage = (public_id) => {
    setUploading(true);
    fetch(`${process.env.API}/ad/upload/image`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("IMAGE DELETE RES DATA", data);
        const filteredImages = updatingProduct
          ? updatingProduct.images.filter(
              (image) => image.public_id !== public_id
            )
          : product.images.filter((image) => image.public_id !== public_id);
        updatingProduct
          ? setUpdatingProduct({
            ...updatingProduct,
            images: filteredImages,
          })
        : setProduct({ ...product, images: filteredImages });
    })
    .catch((err) => {
      toast.error("Image delete failed");
      console.log("CLOUDINARY DELETE ERR", err);
    })
    .finally(() => {
      setUploading(false);
    });
};
  const createProduct = async () => {
    try {
      const response = await fetch(`${process.env.API}/ad/user`, {
        method: "POST",
        body: JSON.stringify(product),
});
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.err,{
            style: {
              border: '1px solid #0BBF65',
              padding: '20px',
              color: '#FF0000',
            },
            iconTheme: {
              primary: '#0BBF65',
              secondary: '#FFFAEE',
            },
          });
      } else {
        toast.success(`Product "${data?.title}" created`,{
            style: {
              border: '1px solid #0BBF65',
              padding: '20px',
              color: '#0BBF65',
            },
            iconTheme: {
              primary: '#0BBF65',
              secondary: '#FFFAEE',
            },
          });
        // router.push("/dashboard/admin/products");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
};
  const fetchProducts = async (page = 1) => {
    try {
      const response = await fetch(`${process.env.API}/ad?page=${page}`, {
        method: "GET",
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data?.err);
      } else {
        setProducts(data?.products);
        setCurrentPage(data?.currentPage);
        setTotalPages(data?.totalPages);
      }
    } catch (err) {
      console.log(err);
    }
};
const fetchUserProducts = async (page = 1,userId) => {
    try {
      const response = await fetch(`${process.env.API}/userAds?page=${page}?userId=${userId}`, {
        method: "GET",
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data?.err);
      } else {
        setProducts(data?.products);
        setCurrentPage(data?.currentPage);
        setTotalPages(data?.totalPages);
      }
    } catch (err) {
      console.log(err);
    }
};
  const updateProduct = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/ad/user/${updatingProduct?._id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatingProduct),
        }
    );
    const data = await response.json();
    if (!response.ok) {
      toast.error(data?.err);
    } else {
      toast.success(`Product "${data?.title}" updated`);
      router.back();
    }
  } catch (err) {
    console.log(err);
  }
};
const deleteProduct = async () => {
  try {
    const response = await fetch(
      `${process.env.API}/ad/user/${updatingProduct?._id}`,
      {
        method: "DELETE",
      }
);
    const data = await response.json();
    if (!response.ok) {
      toast.error(data?.err);
    } else {
      toast.success(`Product "${data?.title}" deleted`);
      router.back();
    }
  } catch (err) {
    console.log(err);
  }
};

const fetchProductSearchResults = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.API}/search/ads?productSearchQuery=${productSearchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProductSearchResults(data);
      // console.log("search results => ", data);
      router.push(`/search/ads?productSearchQuery=${productSearchQuery}`);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
return (
    <ProductContext.Provider
      value={{
        fetchUserProducts,
        product,
        setProduct,
        products,
        setProducts,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        updatingProduct,
        setUpdatingProduct,
        uploading,
        setUploading,
        uploadImages,
        deleteImage,
        createProduct,
        fetchProducts,
        updateProduct,
        deleteProduct,
        productSearchQuery,
        setProductSearchQuery,
        productSearchResults,
        setProductSearchResults,
        fetchProductSearchResults
        
}} >
{children}
    </ProductContext.Provider>
); };
export const useProduct = () => useContext(ProductContext);