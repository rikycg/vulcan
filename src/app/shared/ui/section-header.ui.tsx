import Image from 'next/image';

export function SectionHeader({ name }: { name: string}) {
  return (
    <div>
      <h2 className='text-white text-xl font-bold'>
        { name }
      </h2>
      <Image src="/imgs/underline-d.png" alt="Underline" width={110} height={7} className='' />
    </div>
  )
}