import Image from 'next/image';
import NuxtIcon from '@/src/components/icons/nuxt';
import ReactIcon from '@/src/components/icons/react';
import { VueIcon } from '@/src/components/icons/icons';
import dashboardVersions from '@/src/data/versions.json';
import TailwindIcon from '@/src/components/icons/tailwind';
import ThemeSwitcher from '@/src/components/themeSwitcher';

import {
  Sidenav,
  SidenavItem,
  SidenavSection,
} from '@/src/components/ui/sidenav';

export default function Sidenavigation() {
  return (
    <Sidenav>
      <SidenavSection className="mb-4">Theme</SidenavSection>
      <SidenavItem isLink={false}>
        <ThemeSwitcher />
      </SidenavItem>
      <SidenavSection className="mb-4 mt-16">Techno</SidenavSection>
      <SidenavItem href="/techno/react">
        <ReactIcon className="mt-1 w-4 h-4" />
        <span className="mt-0.5 pl-2">React</span>
      </SidenavItem>
      <SidenavItem href="/techno/vue">
        <VueIcon className="mt-0.5 w-4 h-4" />
        <span className="pl-2">Vue</span>
      </SidenavItem>
      <SidenavItem href="/techno/nuxt">
        <NuxtIcon className="mt-0.5 w-4 h-4" />
        <span className="pl-2">Nuxt</span>
      </SidenavItem>
      <SidenavItem href="/techno/next">
        <Image
          src="/images/others/next.png"
          width={20}
          height={20}
          alt="Next.js"
        />
        <span className="pl-2">Next.js</span>
      </SidenavItem>
      <SidenavSection className="mb-4 mt-16">Versions</SidenavSection>
      {dashboardVersions.map((item) => (
        <SidenavItem href={item.link} key={item.id}>
          <TailwindIcon className="w-5 h-5" />
          <span className="pl-2">{item.name}</span>
        </SidenavItem>
      ))}
    </Sidenav>
  );
}
