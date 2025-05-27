import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HeroSlider() {
  const slides = [
    { title: "Highly skilled SEO experts", content: "At OrganicAds, our team of experienced SEO professionals is dedicated to helping clients rank higher on Google SERPs. We optimize every aspect of your website-content, images, videos, and URLs-ensuring that search engine crawlers can easily find and index your site, resulting in improved rankings. Our proven SEO strategies are designed to drive traffic, enhance visibility, and boost your online success. With OrganicAds, you’ll achieve measurable results and gain a competitive edge in search engine rankings. " },
    { title: "ROI oriented campaigns", content: "At OrganicAds, we create campaigns that focus on delivering high ROI and driving organic traffic. Our strategies are designed to maximize returns across various online and social media platforms. We target your ideal customer demographics to ensure higher engagement and better sales results. By tailoring each campaign to your specific needs, we guarantee measurable success and long-term growth for your business. With OrganicAds, expect a significant increase in both traffic and revenue. " },
    { title: "Fully transparent process", content: "At OrganicAds, we provide full transparency in all our processes, ensuring you can track your investment every step of the way. We offer flexible update options, whether weekly, bi-weekly, or monthly, based on your preference. This approach fosters a trusting partnership with our clients, driving long-term success and helping us deliver results that exceed expectations. With OrganicAds, you’ll always stay informed and confident about the progress of your campaigns." },
    { title: "Customized SEO packages", content: "At OrganicAds, we understand that each industry has unique SEO needs. To cater to a diverse range of businesses, we offer tailored SEO packages, allowing clients to select the specific services that align with their goals, without paying for unnecessary options. This customization ensures that your business gets the exact SEO solutions it needs to succeed, delivering targeted results and maximizing your ROI. With OrganicAds, you only pay for what truly benefits your business." },
    { title: "Special team of eCommerce SEO", content: "If you run an eCommerce store, your SEO needs are unique. At OrganicAds, our expert team specializes in eCommerce SEO strategies designed to help you outperform your competitors. We also offer a dedicated SEO package tailored specifically for eCommerce businesses looking to establish a strong brand identity. With our proven techniques, we’ll boost your online visibility, drive targeted traffic, and ensure sustainable growth for your store. Let OrganicAds help you dominate the eCommerce landscape with results-driven SEO solutions." },
    { title: "This year updated SEO strategies", content: "Google frequently updates its algorithm, making it challenging for businesses to maintain top rankings on SERPs. At OrganicAds, we stay ahead of these changes with our team of skilled digital marketing experts. We utilize the latest SEO techniques to help your business rank higher and stay competitive. Our future-proof SEO strategies are designed to adapt to algorithm changes, ensuring long-term success and consistent results. With OrganicAds, your SEO efforts will always be aligned with the latest trends and best practices." },
    { title: "Technical SEO expertise", content: "At OrganicAds, our technical SEO team consists of expert professionals dedicated to helping businesses attract organic traffic. We will optimize and fix your website’s links while ensuring seamless navigation for your customers. Our advanced technical SEO strategies are designed to drive organic traffic and convert visitors into long-term, loyal customers. With OrganicAds, you’ll experience improved site performance, higher rankings, and sustainable growth. Let us help you build a solid foundation for lasting SEO success. " },
    { title: "All industries experience", content: "Since our inception, OrganicAds has collaborated with businesses across various industries, from healthcare to education, hospitality to agriculture. Whatever your industry, we have the experience to understand its unique needs. This insight allows us to develop tailored, effective strategies that drive rapid growth and long-term success for your business. With our deep knowledge and expertise, we create SEO solutions that help you stay ahead in your industry and achieve measurable results." },
    { title: "360-Degree SEO Solutions", content: "As a leading SEO company in Bangalore, OrganicAds offers a comprehensive range of SEO services, including keyword research, technical SEO, link building, and content writing. Our SEO strategies cover all aspects of search engine optimization, designed to boost your website's organic visibility. Whether you're looking to improve your search rankings or drive more traffic and leads from various channels, we provide the tailored solutions that ensure measurable results and sustainable growth for your business. Let OrganicAds help you reach your digital marketing goals with proven SEO expertise." },
  ]

  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square justify-center p-6 pt-0 h-full relative mt-7">
                  <h2 className="text-lg font-semibold mt-6 text-[#b70b5e]">{slide.title}</h2>
                  <p className="text-gray-600 text-sm mt-6 flex-grow">{slide.content}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 z-10 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 hover:text-white" />
      <CarouselNext className="absolute right-4 z-10 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 hover:text-white" />
    </Carousel>
  )
}
