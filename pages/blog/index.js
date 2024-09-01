import { fetchBlogData } from "@/Redux/actions/blogActions";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Footer = dynamic(() => import("@/components/Footer/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const Blog = dynamic(() => import("@/components/blog/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
export default function Blogs() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { blogData, loadingBlogData, errorBlogData } = useSelector(
    (state) => state.blog
  );


  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  if (loadingBlogData) {
    return (
      <>
        <div className="main-container justify-center items-center">
          <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
            <span className="loading loading-ring loading-lg text-[#F60]"></span>
          </div>
          <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]"></div>
        </div>
      </>
    );
  }

  if (errorBlogData) {
    return <>No Blogs found!</>;
  }
  return (
    <div className="">
      <div className="main-container flex justify-center items-center">
        <Blog></Blog>
      </div>
      <Footer></Footer>
    </div>
  );
}
