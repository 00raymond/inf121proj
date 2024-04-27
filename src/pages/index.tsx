import Image from "next/image";
import { Inter } from "next/font/google";
import Search from "@/components/searchbar";
import BrowseHeader from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className={"h-screen w-screen fixed flex  pt-3 pr-3"}>
        <BrowseHeader />
      </div>
    </div>
  );
}
