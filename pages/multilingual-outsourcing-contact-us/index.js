import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/contactus/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});

export default function Contactus() {
  return (
    <div>
      <div className="main-container  justify-center items-center">
        <Contact></Contact>
      </div>
    </div>
  );
}
