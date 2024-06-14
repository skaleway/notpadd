import { ReactNode } from "react";

interface CustomProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children }: CustomProps) => {
  return (
    <button className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group">
      {children}
    </button>
  );
};
