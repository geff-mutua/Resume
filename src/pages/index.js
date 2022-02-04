import Head from "next/head";
import MainContent from "../components/MainContent";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Geoffrey Resume</title>
      </Head>
      <main className="m-10">
        {/* Menu */}
        <div className=" mb-4">
          <Menu />
        </div>
        <div className="bg-geff_color-light rounded  lg:flex md:flex">
          <div className="col-span-2 ">
            <Sidebar />
          </div>
          <div className="ml-3 ">
            <MainContent />
          </div>
        </div>
      </main>

    </div>
  );
}
