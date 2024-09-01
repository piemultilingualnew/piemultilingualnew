import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/multilingual-outsourcing-contact-us/");
  }, [router]);

  return null;
};

export default Index;
