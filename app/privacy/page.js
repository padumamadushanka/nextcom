"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Privacy() {
 
return (
    <div className="container">
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <div class=" py-5">
            <h1 class="text-center mb-4">Privacy Policy - Riyalanka.lk</h1>

            <p>Welcome to <strong>Riyalanka.lk</strong>. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our website.</p>

            <h2 class="mt-4">1. Information We Collect</h2>
            <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and location when you create an account or post an ad.</li>
                <li><strong>Transaction Data:</strong> Details of the vehicles you list, purchase, or inquire about.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies to enhance user experience.</li>
            </ul>

            <h2 class="mt-4">2. How We Use Your Information</h2>
            <ul>
                <li>Facilitate buying and selling of vehicles on Riyalanka.lk.</li>
                <li>Verify user accounts and prevent fraudulent activity.</li>
                <li>Provide customer support and respond to inquiries.</li>
                <li>Improve our platform, services, and security.</li>
                <li>Send relevant notifications, updates, and promotional offers (if opted in).</li>
            </ul>

            <h2 class="mt-4">3. How We Protect Your Information</h2>
            <p>We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or misuse. However, while we strive to secure your information, no method of transmission over the internet is 100% secure.</p>

            <h2 class="mt-4">4. Sharing of Information</h2>
            <ul>
                <li><strong>Service Providers:</strong> To help operate our platform (e.g., hosting, analytics, and payment processing services).</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our platform and users.</li>
                <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or sale of assets.</li>
            </ul>

            <h2 class="mt-4">5. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to improve your experience, analyze website traffic, and personalize content. You can manage your cookie preferences through your browser settings.</p>

            <h2 class="mt-4">6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing communications.</li>
            </ul>
            <p>To exercise these rights, contact us at [Insert Contact Email].</p>

            <h2 class="mt-4">7. Third-Party Links</h2>
            <p>Riyalanka.lk may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.</p>

            <h2 class="mt-4">8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised date.</p>

            <h2 class="mt-4">9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <ul>
                <li><strong>Email:</strong> riyalankainfo@gmail.com</li>
            </ul>
                </div>

            </div>
            <div className="col-md-3">

            </div>
        </div>
    </div>
    
); }