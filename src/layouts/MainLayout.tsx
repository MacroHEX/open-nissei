import {Header} from "@/layouts/Header.tsx";
import {ReactNode} from "react";
import {Menu} from "@/layouts/Menu.tsx";

interface Props {
  children?: ReactNode;
}

export const MainLayout = ({children}: Props) => {
  return (
    <div className="flex">
      <div className="min-h-[100dvh] bg-[#212227] w-full">
        <Header/>
        <Menu/>
        <div className="flex gap-x-5">
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};
