"use client";
import Link from "next/link";

import logoImage from "@/public/images/logo.png";
import fbImage from "@/public/images/fb.png";

import Image from "next/image";



                  




export default function Footer() {
  return (

<footer className="footer-99382">
      
      <div className="container">
        <div className="row">
          <div className="col-md-4 pr-md-5">
          <Image loading="lazy"  src={logoImage} alt="logo" width={200} height={50} />
            <p>Where Sri Lanka Finds Its Wheels. </p>
           
          </div>
          <div className="col-md">
            <h3>Discover</h3>
            <ul className="list-unstyled nav-links">
            <li><Link href="/">Home</Link></li>
              <li><Link href="/vehicles/cars">Cars</Link></li>
              <li><Link href="/vehicles/bikes">Bikes</Link></li>
              <li><Link href="/vehicles/threeWheelers">Three Wheelers</Link></li>
              <li><Link href="/vehicles/vans">Vans</Link></li>
              <li><Link href="/vehicles/buses">Buses</Link></li>
              <li><Link href="/vehicles/lorries-and-trucks">Lorries & TRucks</Link></li>
              <li><Link href="/vehicles/heavy-vehicles">Heavy Vehicles & Machinery</Link></li>
              <li><Link href="/vehicles/rentals">Rentals</Link></li>
              <li><Link href="/vehicles/car-spare-parts">Car Spare Parts</Link></li>
              <li><Link href="/vehicles/bike-spare-parts">Bike Spare Parts</Link></li>
              <li><Link href="/vehicles/three-wheeler-spare-parts">Three Wheeler Spare Parts</Link></li>
              <li><Link href="/vehicles/van-spare-parts">Van Spare Parts</Link></li>

            </ul>
          </div>
          <div className="col-md">
            <h3>About</h3>
            <ul className="list-unstyled nav-links">
            <li><Link href="/about" >About us</Link></li>
            <li><Link href="/rules" >Posting Rules</Link></li>
            
            </ul>
          </div>
          <div className="col-md">
            <h3>Help</h3>
            <ul className="list-unstyled nav-links">
            <li><Link href="/privacy" >Privacy Policy</Link></li>
              <li><Link href="/terms" >Terms &amp; Conditions</Link></li>
              <li><Link href="/faqs" >FAQs</Link></li>
              <li><Link href="/safety" >Safety</Link></li>
              <li><Link href="/contact" >Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md">
            <h3>Follow Us</h3>
            <ul className="social list-unstyled">
              <li><a href="https://www.facebook.com/adoraAds" target="_blank" aria-label="facebook"><Image loading="lazy"  src={fbImage} alt="fb" width={40} height={40} /></a></li>
              {/* <li><a href="https://www.youtube.com/channel/UCsC6RtSqGOjow84H7hT3GOw"target="_blank" aria-label="youtube"><img src="" alt="" width="30" height="30"/></a></li> */}
              {/* <li><a href="#" aria-label="twitter"><img src={twitterLogo} alt="" width="30" height="30"/></a></li> */}
            </ul>
          </div>
        </div> 

        <div className="row ">
          <div className="col-12 text-center">
            <div className="copyright mt-5 pt-5">
              <p><small>&copy; 2024&mdash;2025 All Rights Reserved.</small></p>
              100% Sri Lankan Web Platform 🇱🇰 🇱🇰
            </div>
          </div>
        </div> 
      </div>
      
    </footer>
); }





