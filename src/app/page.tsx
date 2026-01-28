import Header from "./components/header";

export default function Home() {
   return (
    <>
    <Header />
    <div
  className="w-screen h-screen bg-center bg-cover text-center"
  style={{ backgroundImage: "url('/images/logo.svg')" }}
>
  {/* Optional content over image */}
</div>
   </>
   )
}
