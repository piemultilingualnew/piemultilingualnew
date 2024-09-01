import { useState, useEffect } from "react";
import Link from "next/link";

const Slider = (props) => {
  const tabs = props.tabs;
  const [activeTab, setActiveTab] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // const tabs = [
  //   {
  //     id: 1,
  //     title: "Market Leader in HFS Horizons CX",
  //     label: "Market Leader",
  //     link: "#",
  //     description:
  //       "This ranking underscores EXL's dedication to driving transformative CX through our deep domain expertise and AI-led solutions. By focusing on personalized customer experiences, we enhance satisfaction and loyalty while simultaneously reducing operational costs. Our innovative approaches not only streamline customer interactions but also provide actionable insights for continuous improvement. Through strategic ",
  //   },
  //   {
  //     id: 2,
  //     title: "Healthcare leaders should start building",
  //     label: "Gen AI Foundation",
  //     link: "#",
  //     description:
  //       "Forrester Opportunity Snapshot reveals that more than 75% of healthcare leaders view implementing generative AI (genAI) as a critical priority for their organizations this year. Embracing genAI is essential for modernizing healthcare operations, optimizing patient outcomes, and streamlining workflows. However, transitioning from trials to full-scale execution poses challenges. It requires a robust strategy, ",
  //   },
  //   {
  //     id: 3,
  //     title: "Celebrating 25 years of excellence and innovation",
  //     label: "25 years of service",
  //     link: "#",
  //     description:
  //       "As we mark 25 years of excellence and innovation, we reflect on the key milestones that have shaped our journey. From pioneering new industry standards to expanding our global reach, our commitment to quality and customer satisfaction has been unwavering. This anniversary celebrates not just our past achievements but also our ongoing dedication to innovation. By continually evolving and embracing new ",
  //   },
  //   {
  //     id: 4,
  //     title: "EXL named a top Leader",
  //     label: "Leader in AI",
  //     link: "#",
  //     description:
  //       "EXL's recognition as a top Leader in the Everest Group Analytics and Artificial Intelligence (AI) Services Specialists PEAK Matrix® is a testament to our strong industry knowledge and innovative IP portfolio. Our approach integrates advanced analytics, machine learning, and AI to deliver superior outcomes for clients across various sectors. By effectively managing talent and leveraging deep domain expertise, EXL ",
  //   },
  // ];

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    setProgress(0);
    setIsRunning(true);
  };

  useEffect(() => {
    let interval;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 50); // Adjust the interval for speed of progress
    } else if (progress >= 100) {
      setIsRunning(false);
      setProgress(0);
      if (activeTab < tabs.length) {
        setActiveTab(activeTab + 1);
      } else {
        setActiveTab(1);
      }
      setIsRunning(true);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress, activeTab, tabs.length]);

  return (
    <div className="relative min-h-fit md:min-h-[500px] w-full md:w-[600px] bg-black/40 backdrop-blur-lg p-2 rounded-lg my-5 py-5 px-6">
      <div
        key={activeTabContent.id}
        className="transition-transform duration-800 ease-in-out animate-slideIn"
      >
        <div className="text-[#ff5a00] text-3xl sm:text-4xl mb-4 font-fira-sans">
          {activeTabContent.title}
        </div>
        <p className="text-gray-300 text-md sm:text-lg mb-8">
          {activeTabContent.description}
        </p>

        <div className="skew-x-[-18deg]">
        <Link
          href={activeTabContent.link}
          className="bg-white text-black py-2 sm:py-3 px-3 sm:px-5 text-sm sm:text-md font-semibold hover:bg-[#ff4a17] hover:text-white transition-colors duration-300 rounded-md border-l-[10px] border-[#ff4a17]"
        >
          Explore more →
        </Link>

        </div>
      </div>

      <div className="flex mt-[1.5rem] w-full justify-between md:absolute md:bottom-10 md:left-0 md:px-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-1 sm:px-4 py-2 text-[14px] sm:font-semibold border-b-2 transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-[#ff5a00] border-[#ff5a00]"
                : "text-gray-300 border-transparent"
            }`}
            onClick={() => handleClick(tab.id)}
          >
            <span className="hidden sm:block">{tab.label}</span>
              <div className="relative min-w-[40px] h-1 bg-gray-300 mt-2">
                <div
                  className={`absolute top-0 left-0 h-full ${tab.id === activeTab ? "bg-[#ff5a00]" : 'bg-gray-200'} transition-all duration-[100ms]`}
                  style={{ width: `${progress}%` }}
                />
              </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
