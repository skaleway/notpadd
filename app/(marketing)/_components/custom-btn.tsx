import { ReactNode } from "react";

interface CustomProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children }: CustomProps) => {
  return (
    <button className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-200  dark:text-zinc-900 bg-gradient-to-r dark:from-white/80 from-black/80 via-black to-black/80 dark:via-white dark:to-white/80 hover:bg-zinc-400 group">
      {children}
    </button>
  );
};
