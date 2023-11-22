import ProductVideo from "@/component/ProductVideo/ProductVideo"
import Layout from "@/component/layout/layout"
import DivSliderParrent from "@/component/slider/divSliderParrent"
import WelcomePage from "@/component/welcomePage/welcomePage"


export default function Home() {
  return (
    <>
      <ProductVideo />
      <WelcomePage />
      <div className="bg-[#DEE2E2] py-3 flex flex-col">
        <DivSliderParrent />
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}