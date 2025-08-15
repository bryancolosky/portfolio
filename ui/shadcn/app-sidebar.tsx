'use client';

import * as React from 'react';
import {
  BookOpen,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Palette
} from 'lucide-react';

import { NavMain } from '@/ui/shadcn/nav-main';
import { NavProjects } from '@/ui/shadcn/nav-projects';
import { NavSecondary } from '@/ui/shadcn/nav-secondary';
import { NavUser } from '@/ui/shadcn/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/ui/shadcn/components/sidebar';
import { APP_NAME } from '@/lib/constants';

import {
  LogoFigmaIcon,
  PhotographyIcon,
  ResumeIcon,
  UXIcon
} from '@/ui/components/Icon';

import Text from '@/ui/components/Typography';

import { Flags } from '@/ui/components/Logo';

const data = {
  user: {
    name: APP_NAME,
    email: 'hello@bryancolosky.com',
    avatar: 'https://www.gravatar.com/avatar/823811c7dedcd8bf752cfe686563f439'
  },
  navMain: [
    {
      title: 'UX',
      url: '#',
      icon: UXIcon,
      isActive: true,
      items: [
        {
          title: 'Applications',
          url: '#'
        },
        {
          title: 'Ecommerce',
          url: '#'
        },
        {
          title: 'Maps',
          url: '#'
        }
      ]
    },
    {
      title: 'Figma',
      url: '#',
      icon: LogoFigmaIcon,
      items: [
        {
          title: 'Mastercraft',
          url: '#'
        },
        {
          title: 'Handcraft',
          url: '#'
        },
        {
          title: 'Spacecraft',
          url: '#'
        }
      ]
    },
    {
      title: 'Photography',
      url: '#',
      icon: PhotographyIcon,
      items: [
        {
          title: 'Landscape',
          url: '#'
        },
        {
          title: 'Street',
          url: '#'
        },
        {
          title: 'Nature',
          url: '#'
        },
        {
          title: 'Pattern',
          url: '#'
        }
      ]
    },
    {
      title: 'Overview',
      url: '#',
      icon: ResumeIcon,
      items: [
        {
          title: 'Introduction',
          url: '#'
        },
        {
          title: 'Resume',
          url: '#'
        },
        {
          title: 'Education',
          url: '#'
        }
      ]
    }
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send
    }
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar text-sidebar-primary-foreground flex aspect-auto size-10 items-center justify-center rounded-lg">
                  <Flags flag={'ca'} size="medium" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <Text element="h6" variant="headline-6" truncate>
                    <small>Portfolio</small>
                  </Text>
                  <Text element="span" variant="fine" color="subdued" truncate>
                    My work & designs
                  </Text>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
