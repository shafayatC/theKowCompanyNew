import BluePrint from "@/component/BluePrint/BluePrint"
import GetUpdate from "@/component/GetUpdate/GetUpdate"

import IndustryTrends from "@/component/IndustryTrends/IndustryTrends"
import Integration from "@/component/Integration/Integration"
import ProductVideo from "@/component/ProductVideo/ProductVideo"
import Retouched from "@/component/Retouched/Retouched"
import TheSquad from "@/component/TheSquad/TheSquad"
import Layout from "@/component/layout/layout"
import Record from "@/component/record/record"
import DivSliderParrent from "@/component/slider/divSliderParrent"
import WelcomePage from "@/component/welcomePage/welcomePage"


export default function Home() {
  return (
    <>
      <ProductVideo />
      <WelcomePage />
      <div className="bg-[#DEE2E2] py-3 flex flex-col">
        <DivSliderParrent />
        <Record/>
        <Retouched/>
        <Integration/>
        <TheSquad/>
        <BluePrint/>
        <IndustryTrends/>
        <GetUpdate/>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}