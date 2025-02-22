"use client";
import { useState,useEffect } from "react";
import Carousel from 'react-multi-carousel';
import Link from "next/link";

import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default function RelatedAd({ id,carModel,bikeModel,rentalVType,threeWheelBrand,lorryBrand ,busBrand}) {
    const [relatedAd, setrelatedAd] = useState([]);

    async function getFilteredAds  (id) {
       // console.log("before req send to server filters "+JSON.stringify(filters))
        const data = {
            id,carModel,bikeModel,rentalVType,threeWheelBrand,lorryBrand,busBrand
        };
        console.log("filtered data >>>"+JSON.stringify(data))

        return fetch(`${process.env.API}/vehicles/related`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };
    async function loadRelatedAds (id) {
      
       const data= await getFilteredAds( id)
       console.log("related ads view ar>>"+JSON.stringify(data))
            if (data.error) {
                // setError(data.error);
            } else {
                
                setrelatedAd(data.data)
            }
        // });
    };
    useEffect(() => {
            loadRelatedAds(id)
        }, []);

    return (
         <Carousel responsive={responsive}>
         {relatedAd.map((ad, i) => (       
                                <Link href={`/ad/${ad?.slug}/${ad?._id}`} >                   
                                                      <div class="cont m-1">
                                                      <div class="product-card">
                                                          <div class="product-card__image">
                                                              <img src={ad.imageUrl1} alt="Red Nike Shoes"/>
                                                          </div>
                                                          <div class="product-card__info">
                                                              <h2 class="product-card__title adcard-title">{ad.title}</h2>
                                                              <p class="product-card__description">{ad.district}</p>
                                                              <div class="product-card__price-row">
                                                                  <span class="product-card__price">Rs : {new Intl.NumberFormat().format(ad.price)}</span>
                                                                  
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                </Link>   
                                                  
             ))} 
         </Carousel>
                                          

         
    );
  }