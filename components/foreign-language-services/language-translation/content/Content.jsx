import dynamic from "next/dynamic";
const RightSection = dynamic(() => import("./RightSection"));
import styles from "./content.module.scss";
const Content = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.left} flex justify-between`}>
        <div className={styles.pageContent}>
          <h1>OUTSOURCE FOREIGN LANGUAGE TRANSLATION SERVICE</h1>
          <p>
            Today, the entire world is coming together to a uniform platform to
            have a progressive future.To have a global connect, and bring
            everyone on same page, language plays a key role. To diminish the
            language barriers, there are{" "}
            <strong className="mycolor">
              <a
                className="mycolor"
                href="https://www.piemultilingual.com/foreign-language-services/document-translation-services/"
              >
                Professional Document Translation Services
              </a>
            </strong>
            , which bridges the language gap and provide you with a diversified
            and multilingual assistance.
          </p>
          <p>
            PIE MULTILINGUAL is one of the fastest growing multilingual service
            providers, whose main motto is to provide excellent quality language
            translation services which are pretty easy on the pocket. Today we
            have expertise to translate the documents and data from one language
            to any other language of the world.
          </p>
          <p>We help you with other translations services, Including:</p>
        </div>
        <div className="w-[340px]">
          <RightSection data={true} />
        </div>
      </div>
    </div>
  );
};

export default Content;
