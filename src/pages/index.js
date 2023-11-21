import Layout from "@/component/layout/layout"
import WelcomePage from "@/component/welcomePage/welcomePage"


export default function Home() {
  return (
   <>
   <WelcomePage/>
   </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}