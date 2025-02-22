

import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";
import SearchComponent from "@/components/ads/SearchComponent";
import Link from "next/link";
import carImage from "@/public/images/car.png";
import bikeImage from "@/public/images/bike.png";
import rentImage from "@/public/images/rent.png";
import wheelImage from "@/public/images/wheel.png";
import vanImage from "@/public/images/van.png";
import busImage from "@/public/images/bus.png";
import lorryImage from "@/public/images/lorry.png";
import heavyImage from "@/public/images/heavy.png";
import sparesImage from "@/public/images/spares.svg";
import carSparesImage from "@/public/images/carSpares.png";
import bikeSparesImage from "@/public/images/bikeSpares.png";
import tukSparesImage from "@/public/images/tukSpares.png";
import vanSparesImage from "@/public/images/vanSpares.png";
import carPromo1Img from "@/public/images/car-promo1.svg";
import carPromo2Img from "@/public/images/car-promo2.svg";





// async function getProducts(searchParams) {

//   const searchQuery = new URLSearchParams({
//     page: searchParams?.page || 1,
//   }).toString();
//   const response = await fetch(`${process.env.API}/ad?
// ${searchQuery}`, {
//     method: "GET",
//     next: { revalidate: 1 },
//   });
//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
// }
//   const data = await response.json();
//   return data;
// }
// This function generates SEO metadata
export function generateMetadata() {
  return {
    title: "Riyalanka.lk - Buy and Sell Vehicles and Spare Parts in Sri Lanka",
    description: "Riyalanka.lk is your local marketplace for buying and selling cars, bikes, vans, buses, lorries, and spare parts in Sri Lanka. Find the best deals today!",
    openGraph: {
      type: "website",
      title: "Riyalanka.lk - Buy and Sell Vehicles and Spare Parts",
      description: "Explore a wide range of vehicles and spare parts on Riyalanka.lk, Sri Lanka’s top marketplace for vehicles.",
      url: "https://riyanka.lk",
      images: [
        {
          url: "https://riyanka.lk/og-image.jpg", // Add the correct URL for the image
          alt: "Riyalanka.lk Homepage",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Riyalanka.lk - Buy and Sell Vehicles and Spare Parts",
      description: "Explore a wide range of vehicles and spare parts on Riyalanka.lk.",
      image: "https://riyanka.lk/og-image.jpg",
    },
    canonical: "https://riyanka.lk",
  };
}
export default  function Home({ searchParams }) {
   // console.log("searchParams => ", searchParams);
   //const {products,currentPage,totalPages} = await getProducts(searchParams);
  //console.log(products);
  
  return (
    <div>
     

       <SearchComponent/>
       
       <div className="d-flex justify-content-center my-5">
        <a href="/dashboard/user/ad" className="btn btn-primary btn-lg">
          Post Your Ad
        </a>
      </div>

    <div className="container ">
     
      <div className="row">
        <div className="col-md-2">

        </div>
        <div className="col-md-2">
                <Link  href="/vehicles/cars">

              <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
                  {/* <img className="home-cat-img" src="/images/car.png"></img> */}
                  <Image loading="lazy" className="home-cat-img" src={carImage} alt="Car" width={100} height={100} />
              </div>
              <div className="home-cat-text-div d-flex justify-content-center align-items-center">
                  <h5>Cars</h5>
              </div>
              </Link>
        </div>
        <div className="col-md-2">
             <Link  href="/vehicles/bikes">
            <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
            <Image loading="lazy" className="home-cat-img" src={bikeImage} alt="Car" width={100} height={100} />
             </div>
             <div className="home-cat-text-div d-flex justify-content-center align-items-center">
                  <h5>Bikes</h5>
              </div>
              </Link>
        </div>
        <div className="col-md-2">
        <Link  href="/vehicles/rentals">
            <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
            <Image loading="lazy" className="home-cat-img" src={rentImage} alt="Car" width={100} height={100} />
             </div>
             <div className="home-cat-text-div d-flex justify-content-center align-items-center">
                  <h5>Rentals</h5>
              </div>
              </Link>
        </div>
        <div className="col-md-2">
        <Link  href="/vehicles/threeWheelers">
            <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
            <Image loading="lazy" className="home-cat-img" src={wheelImage} alt="Car" width={100} height={100} />
             </div>
             <div className="home-cat-text-div d-flex justify-content-center align-items-center">
                  <h5>Three Wheelers</h5>
              </div>
              </Link>
        </div>
        <div className="col-md-2">

        </div>

      </div>
     
      <div className="row mt-5">
        <div className="col-md-2">

        </div>
        <div className="col-md-2">
        <Link  href="/vehicles/vans">

        <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
        <Image loading="lazy" className="home-cat-img" src={vanImage} alt="Car" width={100} height={100} />
        </div>
        <div className="home-cat-text-div d-flex justify-content-center align-items-center">
            <h5>Vans</h5>
        </div>
        </Link>
           
        </div>
        <div className="col-md-2">
          <Link  href="/vehicles/buses">

          <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
          <Image  loading="lazy" className="home-cat-img" src={busImage} alt="Car" width={100} height={100} />
          </div>
          <div className="home-cat-text-div d-flex justify-content-center align-items-center">
              <h5>Buses</h5>
          </div>
          </Link>
        </div>
        <div className="col-md-2">
        <Link  href="/vehicles/lorries-and-trucks">

        <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
        <Image loading="lazy" className="home-cat-img" src={lorryImage} alt="Car" width={100} height={100} />
        </div>
        <div className="home-cat-text-div d-flex justify-content-center align-items-center">
            <h5>Lorries & Trucks</h5>
        </div>
        </Link>
        </div>
        <div className="col-md-2">
        <Link  href="/vehicles/heavy-vehicles">

        <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
        <Image loading="lazy" className="home-cat-img" src={heavyImage} alt="Car" width={100} height={100} />
        </div>
        <div className="home-cat-text-div d-flex justify-content-center align-items-center">
            <h5>Heavy Vehicles & Machinery</h5>
        </div>
        </Link>
        </div>
        <div className="col-md-2">

      </div>

      </div>
      <div className="row text-center mt-150 mb-100">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <Image loading="lazy" alt="Buy & Sell Spare Parts in Sri Lanka" className="home-promo-img-spare" src={sparesImage}  width={400} height={500} />
        </div>

        <div className="col-12 col-md-6  justify-content-center align-items-center">
          <h2 className="mb-5">Buy & Sell Car Spare Parts with Ease , Get the Best Deals on Riyalanka.lk! </h2>
          <div className="row">
                <div className="col-md-4 spare-col">
                  <Link  href="/vehicles/car-spare-parts">
                      <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
                      <Image loading="lazy" alt="Buy & Sell Spare Parts in Sri Lanka" className="home-cat-img" src={carSparesImage} width={100} height={100} />
                      </div>
                      <div className="home-cat-text-div d-flex justify-content-center align-items-center">
                            <h5>Car Spare Parts</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 spare-col">
                  <Link  href="/vehicles/bike-spare-parts">
                      <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
                      <Image  alt="Buy & Sell Spare Parts in Sri Lanka" loading="lazy" className="home-cat-img" src={bikeSparesImage}  width={100} height={100} />
                      </div>
                      <div className="home-cat-text-div d-flex justify-content-center align-items-center">
                            <h5>Bike Spare Parts</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 spare-col">
                  <Link  href="/vehicles/three-wheeler-spare-parts">
                      <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
                      <Image alt="Buy & Sell Spare Parts in Sri Lanka" loading="lazy" className="home-cat-img" src={tukSparesImage}  width={100} height={100} />
                      </div>
                      <div className="home-cat-text-div d-flex justify-content-center align-items-center">
                            <h5>Three Wheeler Spare Parts</h5>
                        </div>
                    </Link>
                </div>
          </div>
          <div className="row">
                <div className="col-md-4 spare-col">
                  <Link  href="/vehicles/van-spare-parts">
                      <div className="home-cat-ico-div d-flex justify-content-center align-items-center">
                      <Image alt="Buy & Sell Spare Parts in Sri Lanka" loading="lazy" className="home-cat-img" src={vanSparesImage}  width={100} height={100} />
                      </div>
                      <div className="home-cat-text-div d-flex justify-content-center align-items-center">
                            <h5>Van Spare Parts</h5>
                        </div>
                    </Link>
                </div>
          </div>
        </div>
      </div>
      <div className="row text-center">
  <div className="col-12 col-md-6 pd-top justify-content-center align-items-center mb-4 mb-md-0">
    <h1>Ready to find your next ride?</h1>
    <a href="dashboard/user/ad" className="btn btn-primary btn-lg">Post Your Ad Today</a>
  </div>

  <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
  <Image  loading="lazy" className="home-promo-img" src={carPromo1Img} alt="Car" width={400} height={500} />
  </div>
      </div>

      <div className="row text-center">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
        <Image loading="lazy" className="home-promo-img" src={carPromo2Img} alt="Car" width={400} height={500} />
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <h1>Search thousands of ads on Sri Lanka’s local motors marketplace</h1>
        </div>
      </div>


      <div className="row">
      {/* <pre>{JSON.stringify(data.products, null, 4)}</pre> */}
      {/* {
                (() => {
                    if (data.hasOwnProperty('products'))
                      {data.products?.map((product)=>(
                        <ProductCard product={product}/>
                      ))}
                })()
                } */}
        {/* {products?.map((product)=>(
          <ProductCard product={product}/>
        ))} */}
        </div>
    </div>
    </div>
  );
}
