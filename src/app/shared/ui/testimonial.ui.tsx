import { FaLinkedinIn } from 'react-icons/fa6';

export class TestimonialProps {
  name: string = '';
  text: string = '';
  company: string = '';
  position: string = '';
  className?: string;
}

export function Testimonial({ name, text, company, position, className }: TestimonialProps) {
  return (
    <div>
      <p>{ text }</p>
      <div className='flex mt-3'>
        <span className='border-[1px] rounded w-[40px] h-[40px] flex justify-center items-center'>
          <FaLinkedinIn />
        </span>
        <div className='flex flex-col ml-3 flex-1'>
          <b>{ name }</b>
          <span>
            { position }
            { company && ` at ${ company }` }
          </span>
        </div>
      </div>
    </div>
  )
}