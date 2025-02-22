import Head from "next/head"; // Add Head for SEO

import Slider from "@/components/slider/Slider";
import Link from "next/link";

import RelatedAd from "@/components/related/RelatedAd";
//import { useState } from "react";


import { Navigation, Pagination, Autoplay } from "swiper/modules";
  async function getProducts(id) {
    try {
      const response = await fetch(`${process.env.API}/ad/${id}`, {
        method: "GET",
        next: { revalidate: 1 },
  });
      if (!response.ok) {
        throw new Error(`Failed to fetch products`);
  }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Dynamic metadata generation
  export async function generateMetadata({ params }) {
    const product = await getProducts(params.id);
  
    if (!product) {
      return {
        title: "Ad Not Found | Riyalanka",
        description: "This ad is no longer available on Riyalanka.",
        openGraph: {
          title: "Ad Not Found | Riyalanka",
          description: "This ad is no longer available on Riyalanka.",
          url: `https://riyalanaka.lk/ad/${params.id}`,
          type: "article",
          images: [{ url: "https://riyalanaka.lk/default-thumbnail.jpg", width: 1200, height: 630 }],
        },
        twitter: {
          card: "summary_large_image",
          title: "Ad Not Found | Riyalanka",
          description: "This ad is no longer available on Riyalanka.",
          images: ["https://riyalanaka.lk/default-thumbnail.jpg"],
        },
      };
    }
  
    // Ensure product image URL is absolute
    const imageUrl = product.imageUrl1?.startsWith("http")
      ? product.imageUrl1
      : `https://riyalanaka.lk${product.imageUrl1}`;
  
    return {
      title: `${product.title} for Sale in ${product.district} | Riyalanka.lk`,
      description: product.description.slice(0, 150),
      openGraph: {
        title: `${product.title} for Sale in ${product.district} | Riyalanka.lk`,
        description: product.description.slice(0, 150),
        url: `https://riyalanaka.lk/ad/${params.id}`,
        type: "article",
        images: [{ url: imageUrl, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${product.title} for Sale in ${product.district} | Riyalanka.lk`,
        description: product.description.slice(0, 150),
        images: [imageUrl],
      },
    };
  }
  
  
  export default async function ProductViewPage({ params }) {
    //const [relatedAd, setrelatedAd] = useState([]);

    // console.log("params id >>>"+params.id)
    
    
    const {id} = await params
    const product = await getProducts(id);
    const slides = [
        product.imageUrl1,
        product.imageUrl2,
        product.imageUrl3,
        product.imageUrl4,
        product.imageUrl5
    ].filter(url => url);

  

    return (
      <div className="container mb-5">
        
      
        <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-lg-5 mb-4">
                <div className="card">
                {/* images and preview modal */}
                {/* <ProductImage product={product} /> */}
                {/* card body */}
                <div class="container mt-5">
                <h4 className="card-title">{product.title}</h4>
                <Slider slides={slides} autoplay={{ delay: 3000 }} loop={true}/>

    </div>
                <div className="card-body">
                   
                    <div className="card-text">
                    <p className="single-ad-description">{product.description}</p>
                    </div>
    </div>
                
            
            </div>
            </div>
            <div className="col-lg-3 col-md-12">
  <div className="card mb-3">
    <div className="card-body">
      <div className="single-ad-right-upper-div-text-div d-flex align-items-center mb-3">
        <img src="/images/phone.png" alt="" className="single-ad-attribute-img me-2" />
        <a href={`tel:+94${product.tpOne}`} className="single-ad-district">{product.tpOne}</a>
      </div>
      {product.tpTwo && (
        <div className="single-ad-right-upper-div-text-div d-flex align-items-center mb-3">
          <img src="/images/phone.png" alt="" className="single-ad-attribute-img me-2" />
          <a href={`tel:+94${product.tpTwo}`} className="single-ad-district">{product.tpTwo}</a>
        </div>
      )}
      <div className="single-ad-right-upper-div-text-div d-flex align-items-center mb-3">
        <img src="/images/price.png" alt="" className="single-ad-attribute-img me-2" />
        <h3 className="single-ad-price">Rs : {new Intl.NumberFormat().format(product.price)}</h3>
      </div>
      <div className="single-ad-right-upper-div-text-div d-flex align-items-center mb-3">
        <img src="/images/location.png" alt="" className="single-ad-attribute-img me-2" />
        <h4 className="single-ad-district">{product.district}</h4>
      </div>

      {product.carBrand && (
        <div className="single-ad-right-down-image-div mb-3">
          <img src="/images/brand.png" alt="" className="single-ad-attribute-img" />
          <p className="single-ad-right-down-para">Brand</p>
          <div className="single-ad-right-down-image-text-div">
            <p className="single-ad-right-down-para single-ad-right-down-para-text">{product.carBrand}</p>
          </div>
        </div>
      )}

      {product.engine && (
        <div className="single-ad-right-down-image-div mb-3">
          <img src="/images/capacity.png" alt="" className="single-ad-attribute-img" />
          <p className="single-ad-right-down-para">Engine Capacity</p>
          <div className="single-ad-right-down-image-text-div">
            <p className="single-ad-right-down-para single-ad-right-down-para-text">{product.engine}</p>
          </div>
        </div>
      )}

      {product.bodyType && (
        <div className="single-ad-right-down-image-div mb-3">
          <img src="/images/bodyType.png" alt="" className="single-ad-attribute-img" />
          <p className="single-ad-right-down-para">Body</p>
          <div className="single-ad-right-down-image-text-div">
            <p className="single-ad-right-down-para single-ad-right-down-para-text">{product.bodyType}</p>
          </div>
        </div>
      )}

      {product.mileage && (
        <div className="single-ad-right-down-image-div mb-3">
          <img src="/images/mileage.png" alt="" className="single-ad-attribute-img" />
          <p className="single-ad-right-down-para">Mileage</p>
          <div className="single-ad-right-down-image-text-div">
            <p className="single-ad-right-down-para single-ad-right-down-para-text">{product.mileage}</p>
          </div>
        </div>
      )}

      {product.condition && (
        <div className="single-ad-right-down-image-div mb-3">
          <img src="/images/condition.png" alt="" className="single-ad-attribute-img" />
          <p className="single-ad-right-down-para">Condition</p>
          <div className="single-ad-right-down-image-text-div">
            <p className="single-ad-right-down-para single-ad-right-down-para-text">{product.condition}</p>
          </div>
        </div>
      )}

      {product.year && (
        <div className="single-ad-right-down-image-div mb-3">
          <img src="/images/year.png" alt="" className="single-ad-attribute-img" />
          <p className="single-ad-right-down-para">Year</p>
          <div className="single-ad-right-down-image-text-div">
            <p className="single-ad-right-down-para single-ad-right-down-para-text">{product.year}</p>
          </div>
        </div>
      )}

      {product.gear && (
        <div className="single-ad-right-down-image-div mb-3">
          <img src="/images/gear.png" alt="" className="single-ad-attribute-img" />
          <p className="single-ad-right-down-para">Transmission</p>
          <div className="single-ad-right-down-image-text-div">
            <p className="single-ad-right-down-para single-ad-right-down-para-text">{product.gear}</p>
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Safety and security tips */}
  <div className="card user-card mb-3">
    <div className="row g-0">
      <div className="col-md-2 col-sm-3 col-lg-2">
        <img src="/images/safety.png" className="img-fluid rounded-start user-card-img" alt="Safety Icon" />
      </div>
      <div className="col-md-10 col-sm-9">
        <div className="card-body">
          <h5 className="card-title">Safety and Security Tips</h5>
          <p>
            Only trade with sellers you can meet in person, and never send or wire money.{" "}
            <Link href={'/safety'} ><span class="badge text-bg-secondary">Find more helpful hints here.</span></Link>
          </p>
        </div>
      </div>
    </div>
  </div>
            </div>

            </div>
           
      <div className="row">
        <div className="col-md-2">

        </div>
        <div className="col my-5">
          <RelatedAd id={product._id} carModel={product.carModel} bikeModel={product.bikeModel} rentalVType={product.rentalVType} threeWheelBrand={product.threeWheelBrand} lorryBrand={product.lorryBrand} busBrand={product.busBrand}/>
        </div>
        <div className="col-md-2">

        </div>
      </div>
    </div>
); }
 