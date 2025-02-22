"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Rules() {
 
return (
    <div className="container">
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <div class=" my-5">
        <div class="row">
        <div class="col-12">
            <h2 class="mb-4">Important Posting Rules</h2>
            
            <div class="list-group">
            <div class="list-group-item">
                <h5>1. Vehicle Condition and Accuracy</h5>
                <ul>
                <li>Provide accurate details about the vehicle (make, model, year, mileage, etc.).</li>
                <li>State the condition of the vehicle clearly and mention any damage or issues.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>2. Clear and Honest Descriptions</h5>
                <ul>
                <li>Write a detailed description of the vehicle, including important features and condition.</li>
                <li>Avoid misleading or false information about the vehicle.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>3. Vehicle Photos</h5>
                <ul>
                <li>Upload high-quality, clear photos that accurately represent the vehicle.</li>
                <li>Do not use stock photos; only upload actual photos of your vehicle.</li>
                <li>Include a minimum of 4 photos of the exterior, interior, and any special features.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>4. Pricing Guidelines</h5>
                <ul>
                <li>Set a reasonable and realistic price based on the vehicle’s condition and market value.</li>
                <li>All prices must be listed in Sri Lankan Rupees (LKR).</li>
                <li>Avoid overpricing that is not aligned with the vehicle’s actual value.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>5. No Spam or Duplicate Listings</h5>
                <ul>
                <li>Do not post duplicate ads for the same vehicle. Only post one listing per vehicle.</li>
                <li>Refrain from posting irrelevant or unrelated content.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>6. No Illegal or Prohibited Vehicles</h5>
                <ul>
                <li>Ensure that the vehicle listed is not stolen, counterfeit, or illegal.</li>
                <li>Do not list parts or accessories—only entire vehicles are allowed.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>7. Contact Information</h5>
                <ul>
                <li>Provide accurate and reliable contact information (phone number, email, etc.).</li>
                <li>Avoid posting personal information such as home addresses or bank details.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>8. Respectful Communication</h5>
                <ul>
                <li>Respond to inquiries in a professional, respectful manner.</li>
                <li>Do not use offensive language or discriminatory terms in your listing or messages.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>9. Local Listings Only</h5>
                <ul>
                <li>All listings must be for vehicles located in Sri Lanka. International listings will be removed.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>10. Ad Approval</h5>
                <ul>
                <li>All ads are subject to moderation. We reserve the right to remove ads that violate our rules.</li>
                <li>Violating users may face account suspension or a permanent ban.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>11. Updating Your Listing</h5>
                <ul>
                <li>You can edit your ad at any time to update the price, condition, or other details.</li>
                <li>Remove your listing if the vehicle is sold or no longer available to avoid confusion.</li>
                </ul>
            </div>

            <div class="list-group-item">
                <h5>12. Report Suspicious Ads</h5>
                <ul>
                <li>If you see any suspicious or fraudulent ads, please report them immediately.</li>
                <li>We take all reports seriously and will investigate any violations promptly.</li>
                </ul>
            </div>
            </div>

            <hr/>

            <h3>By posting an ad on Riyalanka.lk, you agree to follow these posting rules.</h3>
            <p class="lead">Thank you for being part of our community! We aim to provide a safe and trustworthy marketplace for all users.</p>
        </div>
        </div>
                </div>
            </div>
            <div className="col-md-3">

            </div>
        </div>
    </div>
    
); }