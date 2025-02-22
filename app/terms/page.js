"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Terms() {
 
return (
    <div className="container">
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <div class=" my-5">
            <h1 class="text-center mb-4">Terms & Conditions - Riyalanka.lk</h1>
            
            <div class="mb-4">
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing and using Riyalanka.lk, you accept and agree to be bound by these terms. If you do not agree, please refrain from using our services.</p>
            </div>

            <div class="mb-4">
                <h3>2. User Eligibility</h3>
                <ul>
                    <li>You must be at least 18 years old to use our platform.</li>
                    <li>You agree to provide accurate and complete information when registering an account or posting an advertisement.</li>
                </ul>
            </div>

            <div class="mb-4">
                <h3>3. Account and Security</h3>
                <ul>
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>Riyalanka.lk is not liable for any unauthorized access or activity on your account.</li>
                    <li>If you suspect unauthorized use, contact us immediately.</li>
                </ul>
            </div>

            <div class="mb-4">
                <h3>4. Posting Ads</h3>
                <ul>
                    <li>Users may post ads for vehicles and related products/services.</li>
                    <li>All ads must comply with Sri Lankan laws and our content policies.</li>
                    <li>Misleading, fraudulent, or illegal advertisements are strictly prohibited.</li>
                    <li>Riyalanka.lk reserves the right to remove or reject any ad without prior notice.</li>
                </ul>
            </div>

            <div class="mb-4">
                <h3>5. Prohibited Activities</h3>
                <p>You agree not to:</p>
                <ul>
                    <li>Post false or misleading information.</li>
                    <li>Use the platform for illegal or fraudulent activities.</li>
                    <li>Violate intellectual property rights.</li>
                    <li>Engage in spam, harassment, or abusive behavior.</li>
                </ul>
            </div>

            <div class="mb-4">
                <h3>6. Payments and Transactions</h3>
                <ul>
                    <li>Riyalanka.lk does not process payments for vehicle transactions. Buyers and sellers are responsible for completing transactions independently.</li>
                    <li>We are not responsible for any disputes arising between buyers and sellers.</li>
                </ul>
            </div>

            <div class="mb-4">
                <h3>7. Limitation of Liability</h3>
                <p>Riyalanka.lk acts as a classifieds listing platform and is not responsible for the accuracy of ads posted by users. We do not guarantee the quality, safety, or legality of vehicles listed. Users are advised to exercise caution and conduct due diligence before making transactions.</p>
            </div>

            <div class="mb-4">
                <h3>8. Termination of Service</h3>
                <p>Riyalanka.lk reserves the right to suspend or terminate any user account at its discretion for violations of these terms or for any other reason deemed necessary.</p>
            </div>

            <div class="mb-4">
                <h3>9. Changes to Terms & Conditions</h3>
                <p>We may update these Terms & Conditions from time to time. Continued use of our platform constitutes acceptance of the revised terms.</p>
            </div>

            <div class="mb-4">
                <h3>10. Contact Us</h3>
                <p>If you have any questions or concerns about these Terms & Conditions, please contact us at:</p>
                <p><strong>Email:</strong>riyalankainfo@gmail.com                </p>
            </div>
                </div>

            </div>
            <div className="col-md-3">

            </div>
        </div>
    </div>
    
); }