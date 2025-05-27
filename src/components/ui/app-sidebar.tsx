"use client"

import * as React from "react"
import {
  Bot,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/ui/nav-main"
import { NavUser } from "@/components/ui/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Organic Ads Admin",
    email: "contact@organicads.in",
    avatar: "https://res.cloudinary.com/djiki7tvo/image/upload/v1745214703/shadcn_hoepq2.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
 
  ],
  navMain: [
    {
      title: "SEO Pages",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/admin/dashboard",
        },
        {
          title: "Domestic Pages",
          url: "/admin/domestic",
        },
        {
          title: "International Pages",
          url: "/admin/international",
        },
        {
          title: "Import Pages",
          url: "/admin/import",
        },
        {
          title: "Generate Sitemap",
          url: "/admin/generate-sitemap",
        },
      ],
    },
    {
      title: "Digital Marketing",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Domestic Pages",
          url: "#",
        },
        {
          title: "International Pages",
          url: "#",
        },
        {
          title: "Import Pages",
          url: "#",
        },
      ],
    },
    
    
  ],

  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
       <SidebarHeader className="flex items-center justify-center p-4">
        <img
          src="https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png"
          alt="OrganicAds Logo"
          className="h-10 w-auto"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
    
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
