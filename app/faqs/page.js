"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Faq() {
 
return (
    <div className="container">
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <div class="container my-5">
        <div class="row">
        <div class="col-12">
            <h2 class="mb-4">Common Questions</h2>
            
            <div class="accordion" id="faqAccordion">
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading1">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    1. How do I create an account on Riyalanka.lk?
                </button>
                </h2>
                <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    To create an account:
                    <ul>
                    <li>Go to the <strong>Register</strong> page on our website.</li>
                    <li>Enter your details (name, email, password).</li>
                    <li>Choose a secure password.</li>
                    <li>Click the <strong>Register</strong> button</li>
                    </ul>
                </div>
                </div>
            </div>

            
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading2">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    2. How do I post an ad for my vehicle?
                </button>
                </h2>
                <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    Posting an ad is simple:
                    <ol>
                    <li>Log in to your account.</li>
                    <li>Click the <strong>Post an Ad</strong> button.</li>
                    <li>Fill in the vehicle details (make, model, year, price, condition, etc.).</li>
                    <li>Upload clear photos of your vehicle.</li>
                    <li>Review your ad and click <strong>create</strong> to post it.</li>
                    </ol>
                    Your ad will be live on Riyalanka.lk and visible to potential buyers!
                </div>
                </div>
            </div>

            
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading3">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    3. Is there a fee to post an ad?
                </button>
                </h2>
                <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                     posting an ad on Riyalanka.lk is free!
                </div>
                </div>
            </div>

            
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading4">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    4. How can I contact the seller or buyer?
                </button>
                </h2>
                <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    To contact a seller or buyer:
                    <ol>
                    <li>Go to the listing of the vehicle you're interested in.</li>
                    <li>Click on the <strong>Phone Number</strong> </li>
                    <li>You can either call the seller directly </li>
                    </ol>
                    Make sure to communicate securely and never share personal details like your home address or financial information until you're sure about the transaction.
                </div>
                </div>
            </div>

            
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading5">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    5. How do I delete or edit my ad?
                </button>
                </h2>
                <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    To delete or edit your ad:
                    <ol>
                    <li>Log in to your account.</li>
                    <li>click on your profile name</li>
                    <li>Go to <strong>Manage your Ads</strong> in your dashboard.</li>
                    <li>Select the ad you want to edit or delete.</li>
                    <li>Click <strong>Edit/delete/update  button</strong> to update, delete  your ad details</li>
                    </ol>
                </div>
                </div>
            </div>
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