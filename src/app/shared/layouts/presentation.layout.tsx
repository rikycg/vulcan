import Image from 'next/image';
import { Button } from '../ui/button.ui';

export class PresentationProps {
  name = '';
  role = '';
  img = {
    url: '',
    alt: '',
  };
  options?: PresentationLinkOption[] = [];
}

export class PresentationLinkOption {
  text = '';
  href = '';
}

export function Presentation({ name, role, img, options } = new PresentationProps()) {
  return (
    <section className='h-[300px] flex flex-col justify-center relative'>
      <h1 className='text-white text-xl'>
        { `Hi, I'm ` } 
        <span className='font-semibold ml-1'>
          { name }, { role }
        </span>
      </h1>
      <Image src="/imgs/underline-a.png" alt="Underline" width={300} height={12} className='ml-8' />
      <h2 className='text-5xl text-white font-bold mt-2'>
        { `Let's realize projects together!` }
      </h2>

      <div className="quick-actions flex gap-5 mt-8">
        {
          options?.map((option, index) => (
            <a href={option.href} key={ index }>
              <Button 
                text={ option.text }
                className='w-40'
              />
            </a>
          ))
        }
      </div>

      <div className='absolute -right-48 bottom-0 max-lg:hidden'>
        <Image src={img.url} alt={img.alt} width={500} height={242} />
      </div>
    </section>
  )
}
