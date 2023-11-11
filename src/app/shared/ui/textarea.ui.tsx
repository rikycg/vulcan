export interface ITextareaProps {
  name: string;
  label?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea(props: ITextareaProps) {
  return (
    <div className='flex flex-col w-full'>
      <label className='mb-1 text-xs text-gray-light'>
        { props.label }
      </label>
      <textarea
        className="border-[1px] bg-gray-dark border-gray-light rounded-[2px] outline-0 p-[10px] w-full text-white"
        id={props.name}
        name={props.name}
        rows={props.rows || 10}
        cols={props.cols || 3}
        placeholder={props.placeholder || ''}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}