import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'focus-visible:secondary flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-white transition-colors aria-disabled:cursor-not-allowed aria-disabled:opacity-50 hover:bg-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-active',
        className,
      )}
    >
      {children}
    </button>
  );
}
