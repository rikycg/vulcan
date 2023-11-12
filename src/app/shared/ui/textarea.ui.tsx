export class TextareaProps {
  name: string = '';
  label?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e?: any) => void = () => {};
}

export function Textarea({ name = '', label = '', rows = 10, cols = 3, placeholder = '', value = '', onChange = () => {} }: TextareaProps) {
  return (
    <div className='flex flex-col w-full'>
      <label className='mb-1 text-xs text-gray-light'>
        { label }
      </label>
      <textarea
        className="border-[1px] bg-gray-dark border-gray-light rounded-[2px] outline-0 p-[10px] w-full text-white"
        id={name}
        name={name}
        rows={rows || 10}
        cols={cols || 3}
        placeholder={placeholder || ''}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}