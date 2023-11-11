export class ButtonProps {
  text: string = '';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export function Button({ text, onClick, type, className, bgColor, textColor }: ButtonProps) {
  const classes = className || '';
  const background = bgColor || 'warning';
  const buttonType = type || 'button';
  const color = textColor || 'gray-dark';

  return (
    <button
      className={ `cursor-pointer hover:opacity-80 bg-${background} text-${color} font-regular py-2 px-4 rounded-sm ${classes}` }
      type={ buttonType }
      onClick={ onClick }
    >
      { text }
    </button>
  )
}