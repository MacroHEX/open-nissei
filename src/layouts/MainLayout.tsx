import {Header} from "@/layouts/Header.tsx";
import {ReactNode} from "react";
import {Menu} from "@/layouts/Menu.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";

interface Props {
  children?: ReactNode;
}

export const MainLayout = ({children}: Props) => {
  return (
    <div className="flex">
      <div className="min-h-[100dvh] bg-[#f1f1f1] w-full">
        <Header/>
        <Menu/>
        <div className="flex">
          <div className="flex flex-col flex-1 justify-center items-center overflow-auto p-5 gap-4">{children}</div>
          <Toaster/>
        </div>
      </div>
    </div>
  );
};
