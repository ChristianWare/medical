import MegaMenu from "@/components/Frontend/MegaMenu";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-blue-600'>
      <div className='max-w-5xl mx-auto py-3 bg-blue-600'>
        <MegaMenu />
      </div>
      <div>{children}</div>
    </div>
  );
}
