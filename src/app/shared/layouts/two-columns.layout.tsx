import { SectionHeader } from '../ui/section-header.ui';

export class TwoColumnsProps {
  title: string = '';
  textColor?: string = '';
  children: any = null;
  id?: string = '';
}

export function TwoColumns({ title, textColor, children, id }: TwoColumnsProps) {
  const colorText = textColor || 'text-gray-light';

  return (
    <section className='flex flex-col relative w-full' id={id}>
      <SectionHeader name={title} />
      <div className={`${colorText} text-sm mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2`}>
        { children }
      </div>
    </section>
  );
}