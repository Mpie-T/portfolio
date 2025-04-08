"use client";
import React, { useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js, Bootstrap, Tailwind CSS</li>
        <li>Node.js, Spring Boot</li>
        <li>SQL Server, MySQL</li>
        <li>HTML/CSS, JavaScript</li>
        <li>Git, Visual Studio Code</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FPT University (2021 - 2025)</li>
        <li>GPA: 7.355</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>TRANS 6 English Certificate</li>
        <li>Certificate of Completion from Course</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (tabId) => {
    setTab(tabId);
  };

  return (
    <div className="about-section">
      <h2 className="text-2xl font-bold">About Me</h2>
      <p className="mt-4 text-[#ADB7BE]">
        Tôi mong muốn nâng cao kỹ năng Front-End và học hỏi thêm kiến thức mới
        để hỗ trợ công việc hiệu quả, tăng năng suất và đóng góp tích cực vào sự
        phát triển của công ty. Ngoài ra, tôi cũng muốn mở rộng kỹ năng Back-End
        để cải thiện khả năng xây dựng và đóng góp vào các dự án web toàn diện
        và hiệu quả.
      </p>
      <div className="flex flex-row justify-start mt-8">
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          Certifications
        </TabButton>
      </div>
      <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
  );
};

export default AboutSection;
