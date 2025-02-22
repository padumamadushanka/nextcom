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

export default function ({ product }) {
    return (
       
            <div className="container ">
        
             <Link href={`/ad/${product?.slug}/${product?._id}`} >
             <div className="ad-card-div" key={product._id}>
                <img src={product.imageUrl1} className="ad-card-main-img "/>
                <div className="ad-card-inner-description-div">
                    <h5 className="adcard-title">{product.title}</h5>
                    <h6 className="ad-card-price-text">Rs : {new Intl.NumberFormat().format(product.price)}</h6>
                    
                    <div className="ad-card-location-text-div">
                    <img src="/images/location.png" alt="" className="ad-card-location-img"/><p className="ad-card-district-text">{product.district}</p>
                    </div>
                    {
                (() => {
                    if (product.hasOwnProperty('mileage'))
                        return <div className="ad-card-mileage-text-div">
                        <img src="/images/mileage.png" alt="" className="ad-card-mileage-img"/><p className="ad-card-mileage-text">{product.mileage} Km</p>
                    </div>
                })()
                }
                   
                
                
                    
                    <div className="ad-card-time-ago-div">
                      <ReactTimeAgo date={product.createdAt} locale="en-US" className="ad-card-time-ago-text"/>
                    </div>
                </div>
                
               
            </div>
          </Link>
        
        </div>


    ); }