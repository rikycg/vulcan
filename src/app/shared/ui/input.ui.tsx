export interface IInputProps {
  name: string;
  type?: string;
  label: string;
  value?: string;
  onChange?: (e: any) => void;
}

export function Input({ name, label, type = 'text', value = '', onChange = () => {} }: IInputProps) {
  return (
    <div className='flex flex-col w-full'>
      <label className='mb-1 text-xs text-gray-light'>
        { label }
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='border-[1px] bg-gray-dark border-gray-light rounded-[2px] h-[40px] outline-0 p-[10px] text-white'
      />
    </div>
  );
}