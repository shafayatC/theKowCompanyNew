import BlogPage from "@/component/BlogPage/BlogPage"
import BlogPageDetails from "@/component/BlogPage/BlogPageDetails"
import GetUpdate from "@/component/GetUpdate/GetUpdate"
import Layout from "@/component/layout/layout"

export default function blogPage() {
    return (
      <>
      <div className="bg-[#DEE2E2]  flex flex-col">
    <BlogPage/>
    <BlogPageDetails/>
    <GetUpdate/>
    </div>
      </>
    )
  }
  
  blogPage.getLayout = function getLayout(page) {
    return (
      <Layout>{page}</Layout>
    )
  }