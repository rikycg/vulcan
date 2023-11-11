import Image from 'next/image';

export class BannerProps {
  className?: string = '';
  desktopImage = new BannerImageProps();
  mobileImage = new BannerImageProps();
}

export class BannerImageProps {
  url = '';
  alt = '';
}

export function Banner({ className, desktopImage, mobileImage } = new BannerProps()) {
  return (
    <div className={`flex gap-12 py-8 px-8 justify-center items-center flex-wrap max-xl:gap-8 max-lg:px-0 max-lg:justify-start relative ${className}`}>
      <Image src={desktopImage.url} alt={desktopImage.alt} className='sm:flex hidden' layout='fill' objectFit='contain'/>
      <Image src={mobileImage.url} alt={mobileImage.alt} className='max-sm:flex hidden' layout='fill' objectFit='contain' />
    </div>
  )
}