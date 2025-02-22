"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function About() {
 
return (
    <div className="container">
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <div class=" my-5">
                <div class="text-center mb-4">
                    <h1 class="fw-bold">About Us</h1>
                    <p class="lead">Sri Lanka’s premier online marketplace for buying and selling vehicles</p>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h2>Who We Are</h2>
                        <p>Riyalanka.lk is a trusted and user-friendly classified ads platform dedicated to providing the best deals on vehicles across Sri Lanka. Whether you are looking for a brand-new car, a budget-friendly used vehicle, or even auto parts and accessories, Riyalanka.lk is your go-to destination.</p>
                    </div>
                    <div class="col-md-6">
                        <img src="images/logo.png" class="img-fluid rounded" alt="About Us"/>
                    </div>
                </div>

                <div class="my-5">
                    <h2>Our Mission</h2>
                    <p>Our mission is to revolutionize the way Sri Lankans buy and sell vehicles by offering a digital marketplace that is simple, reliable, and accessible to everyone. We aim to empower users with the tools they need to find their ideal vehicle at the best price.</p>
                </div>

                <div class="my-5">
                    <h2>Why Choose Riyalanka.lk?</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">🚗 <strong>Wide Selection</strong> – Explore thousands of listings, from cars and motorcycles to trucks and auto parts.</li>
                        <li class="list-group-item">⚡ <strong>Easy to Use</strong> – Post your ad in just a few clicks and reach potential buyers instantly.</li>
                        <li class="list-group-item">🕒 <strong>24/7 Accessibility</strong> – Browse listings anytime, anywhere, at your convenience.</li>
                    </ul>
                </div>

                <div class="text-center my-5">
                    <h2>Join the Riyalanka.lk Community</h2>
                    <p>At Riyalanka.lk, we are committed to providing a smooth and hassle-free vehicle trading experience. Whether you are an individual seller, a car dealer, or a buyer searching for the perfect ride, our platform is designed to cater to all your needs.</p>
                    <a href="/dashboard/user/ad" class="btn btn-primary btn-lg">Start Buying & Selling Today</a>
                </div>
                </div>

            </div>
            <div className="col-md-3">

            </div>
        </div>
    </div>
    
); }