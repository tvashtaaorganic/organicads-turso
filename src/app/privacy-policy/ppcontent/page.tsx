"use client";

import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator"

const PpContent = () => {
 

  return (
    <div className="font-poppins">
      {/* Header Section */}
      <section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center sm:text-3xl md:text-4xl lg:text-4xl">
          Privacy Policy

          </h1>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mt-4">
            <Breadcrumb>
              <BreadcrumbList className="flex justify-center space-x-2 text-gray-600">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-blue-500">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-blue-500 font-semibold">
                  Privacy Policy

                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="container mx-auto mt-10 mb-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        
      <div className="container mx-auto p-6 text-justify">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-medium text-blue-600 mb-5">Privacy Policy</h2>
        <Separator className="my-4" />
        <p>We respect our users privacy. Hence, we have created this Privacy Policy. We have access to the information of the users through various ways. OrganicAds collects the information of users. This is only used to contact them in the future. We collect email and other contact details. We keep them very confidential and do not pass them to third parties.</p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Use of Information</h3>
        <p>OrganicAds is a provider of SEO services in India and other digital marketing services. The clients are invited to contact us through the website. They share their personal data while using our website. Their information is used only in reference to our services.</p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Collection of Information</h3>
        <p>Users share their personal data with their own will for our services. Information is also shared by sending us an inquiry. The users give personal data in the following manners:</p>
        <ul className="list-disc pl-6">
          <li>Through contact form</li>
          <li>Through a request for quotation</li>
          <li>Through use of our website and cookies</li>
        </ul>
        <p className="mt-2">Some technical information is with us through cookies. We do not use it and relate it further with users personal information.</p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Security</h3>
        <p>OrganicAds takes all possible efforts to protect users personal data. At the same time, we expect our users to provide information only if needed. We request our users not to disclose their personal information unless required. We will not be responsible for the data given to any third-party vendors through our website.</p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Contact Us</h3>
        <p>Any user might have any query or question with our privacy policy. In such case, he/she should contact us first. Our contact details are available on our website.</p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Notification of Changes</h3>
        <p>Along with this privacy policy, we hold all rights to make any change in the policy. No prior notice to the users is required for this. The users require reading our privacy policy before using our website. When our users or clients provide us data, they agree with this policy. If not agree with our privacy policy, the user should not share their information and use our website.</p>
      
        <h2 className="text-3xl font-medium text-blue-600 mt-8 mb-5">Refund Policy</h2>
        <Separator className="my-4" />
        <p>OrganicAds uses a complete transparent cancellation and refund policy. Following are the policies with regard to cancellation of orders and refunds:</p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Cancellation Policies</h3>
        <ul className="list-disc pl-6">
          <li>No cancellation will be considered valid without counter confirmation. The confirmation should be from the respective department or management of the company.</li>
          <li>Cancellation requests should be made well in advance to the concerned person or department. The necessary response should be sought in this matter.</li>
          <li>The requests will be valid only if the execution of the project is not started.</li>
        </ul>
        <p className="mt-3">Website traffic may drift down due to third-party services like hosting and web development. We will not be responsible in such a case for the low traffic. </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Refund Policies</h3>
        <p>We do not provide a refund for any services that are already fulfilled. While hiring our services, clients are considered to understand the nature of SEO services. A downside in website traffic after execution of our project does not ask for any refund of the fees.</p>
        <p className="mt-2">We will not be liable to entertain any such request for refunds from the client. The website may require maintenance at a later stage. The client may also require any extra fulfillment on the website not specified in the project. In such cases, these tasks will be charged separately from the services already delivered.</p>

        <h2 className="text-3xl font-medium text-blue-600 mt-8 mb-5">Legal Disclaimer</h2>
        <Separator className="my-4" />
        <p>OrganicAds does not guarantee and endorse the correctness and authenticity of any material downloaded from and linked to our website. If the user is accessing any linked material, it shall be at his/her own risk.</p>
        <p className="mt-2">We do not accept any claim made by the client with regard to loss or failure of data. We also do not offer any remedy to such claims. Such claims cover the accidental or unintentional loss of data. Damage to the systems while browsing our site is also not our liability. We will not be liable for any clients claim made for such loss.</p>
        <p className="mt-2">We might enter into a contract with our client for the provision of services. No other third party will have any claim with reference to our contract with our clients. Other information and conditions provided on our website do not guarantee any preciseness and warranty of any kind.</p>
        <p className="mt-2">The client will hold all responsibility for the information they provide to post or upload on their website. We will not be responsible for any copyright violation occurring on the clients website. Any accidental loss of data due to direct or indirect or consequential reasons will not be our liability.</p>
        <p className="mt-2">Due to the nature of our services, our SEO programs also depend on the changes in search engine algorithms. Other factors like network downtime, which are not under our control, may also impact negatively on website rankings. Hence, the client shall agree for positive/negative results to a certain extent due to the presence of such factors which are beyond our control.</p>
        <p className="mt-2">OrganicAds is not liable for any technical issue on the clients website and system that could hinder the effectiveness of our services. </p>

        <h2 className="text-3xl font-medium text-blue-600 mt-8 mb-5">Terms and Conditions</h2>
        <Separator className="my-4" />
        <p>As clients or users use our website and services, they agree with these terms and conditions. We may review and revise these terms as per our policies. The revisions do not require any advance notice.</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">General Terms and Conditions</h3>
        <ul className="list-disc pl-6">
          <li>Users will not use our website for any unlawful purpose.</li>
          <li>Users will not use our website to disable, damage, and impair it in any way.</li>
          <li>All the information provided to us should be genuine and your own. You will not present any third partys information to us.</li>
          <li>The user will not gain illegal access to our account and system.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">System and Data Security</h3>
        <p>We keep our website well secured to protect our users data. But we have no liability if any damage and loss of data happens to the users system while downloading or uploading any material on our site.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Website Content </h3>
        <p>All the content present on our website is our exclusive right. No one can copy and reproduce our content without our written permission. This may account for the violation of copyright laws. </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Jurisdiction</h3>
        <p>Any kind of discord and dispute will be abiding by the laws of the Government of India. All disputes will belong to the jurisdiction of courts in Bangalore.</p>
        <p className="mt-2">Before publishing and filing anything against us with regard to the use of our site and services, you should contact us first.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Services</h3>
        <p>The nature of our services allows us to hold the right to use our clients website. It will be with the clients consent and authorized access. We use our clients websites for providing various services like web design, SEO, web development, and marketing. We stop using our clients websites after project completion. Unless the client specifies so, we do not use their websites.</p>
        <p className="mt-2">OrganicAds strictly follows ethical SEO practices. It will provide services with its own desire. The company is not liable to entertain any undesirable service request from anyone.</p>
        

      </div>
    </div>
        
      </section>
    </div>
  );
};

export default PpContent;
