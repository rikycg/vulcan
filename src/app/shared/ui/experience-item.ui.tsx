export class ExperienceProps {
  className?: string = '';
  name: string = '';
  start: number = 0;
  level: number = 0;
}

export function ExperienceItem({ className = '', name, start, level }: ExperienceProps) {
  const years = new Date().getFullYear() - start;

  return (
    <div className={`flex justify-between ${className}`}>
      <p className='text-white'>
        { name } 
        <span className='ml-1 text-xs text-gray-light'>
          (+{ years } years)
        </span>
      </p>
      <span className='flex gap-1'>
        {
          Array.from(Array(5)).map((_, i) => {
            const bg = level > i ? 'bg-warning' : 'border-gray-medium';
            
            return (
              <i key={i} className={`text-warning rounded-full border-[1px]  border-solid h-[15px] w-[15px] flex ${bg}`}></i>
            )
          })
        }
      </span>
    </div>
  );
}