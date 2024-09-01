import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Footer = dynamic(() => import("@/components/Footer/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const Blog = dynamic(() => import("@/components/blog/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const NotFound = dynamic(() => import("@/components/layout/NotFound"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});

export default function Blogdetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { blogDetail, loadingBlogDetail, errorBlogDetail } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    const fetching = async () => {
      if (router.asPath) {
        const { fetchBlogDetail } = await import("@/Redux/actions/blogActions");
        let searchurl = router.asPath;
        dispatch(fetchBlogDetail(searchurl));
      }
    };

    fetching();
  }, [router.asPath, dispatch]);

  if (loadingBlogDetail) {
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

  if (errorBlogDetail) {
    return <NotFound />;
  }

  return blogDetail ? (
    <div className="">
      <div className="main-container flex justify-center items-center">
        <Blog detail={true}></Blog>
      </div>
      <Footer></Footer>
    </div>
  ) : loadingBlogDetail ? (
    <div className="main-container justify-center items-center">
      <div className="main-container flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-[#F60]"></span>
      </div>
    </div>
  ) : (
    errorBlogDetail && (
      <NotFound />
      // <>Null</>
    )
  );
}
