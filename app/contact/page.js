"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Contact() {
 
return (
    <div className="container">
        <Head>
        <title>Test Page</title>
        <meta name="description" content="This is a test" />
      </Head>
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
            <div class=" mt-5">
        <h2 class="text-center mb-4">Contact Us - Riyalanka.lk</h2>
        <p class="text-center">We’d love to hear from you! Whether you have questions, feedback, or need support, feel free to get in touch with us.</p>
        
        <div class="row mt-4">
            <div class="col-md-6">
                <h4>Contact Information</h4>
                <p><strong>Email:</strong> <a href="mailto:riyalankainfo@gmail.com">riyalankainfo@gmail.com</a></p>
                <div className="contact-fb-div">
                <h4>Join our Facebook community and drop your feedbacks</h4>
                <p><li><a href="https://www.facebook.com/adoraAds" target="_blank" aria-label="facebook"><img src="/images/fb.png" alt="" width="100" height="100"/></a></li></p>
                </div>
               
               
            </div>
        </div>
                </div>

            </div>
            <div className="col-md-3">

            </div>
        </div>
    </div>
    
); }