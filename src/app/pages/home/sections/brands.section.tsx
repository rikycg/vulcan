import { Banner } from '@/app/shared/ui/banner.ui';

export function Brands() {
  return (
    <>
      <Banner
        desktopImage={{
          url: '/imgs/brands.png',
          alt: 'Brands',
        }}
        mobileImage={{
          url: '/imgs/brands-icons.png',
          alt: 'Brands',
        }}
      />
    </>
  )
}