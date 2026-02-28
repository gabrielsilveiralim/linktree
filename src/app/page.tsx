import About from "../components/about/About";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <>
    <main className="flex flex-col mb-2.5 mt-2.5 mx-auto">
      <Header />
      <About />
    </main>
 
    </>    
  );
}
