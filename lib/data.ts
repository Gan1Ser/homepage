import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Blog from "@/public/blog.png";
import Cloud from "@/public/cloud.png";
import Memos from "@/public/memos.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    // {
    //     title: "MSc in Computing and IT",
    //     location: "University of St Andrews, UK",
    //     description:
    //         "Achieved a Master's degree in Computing and IT, acquiring in-depth knowledge in areas such as Human Computer Interaction, Computer Communication Systems, and Information Security. Developed strong capabilities in computational thinking, user-centred design, and data visualisation, preparing for effective application in technology-driven environments",
    //     icon: React.createElement(LuGraduationCap),
    //     date: "2023 Sep - 2024 May",
    // },
    // {
    //     title: "Frontend Intern",
    //     location: React.createElement("span", {},
    //         React.createElement("a", {
    //             href: "https://www.nio.com/",
    //             style: { textDecoration: 'underline' },
    //             target: "_blank"
    //         }, "NIO Inc."),
    //         " Wuhan, China"
    //     ),
    //     description:
    //         "Developed NIO's third-generation station list and detail pages using Vue3, TypeScript, and Baidu Maps API. Implemented role-based access control for the Task Wizard page, enhancing system security. Collaborated effectively within a Jira-managed environment, utilizing Jenkins for deployment processes.",
    //     icon: React.createElement(FaVuejs),
    //     date: "2022 Aug - 2022 Dec",
    // },
    // {
    //     title: "Frontend Assistant",
    //     location: "Wuhan University | Wuhan, China",
    //     description:
    //         "Developed and maintained Finknow, a Financial Knowledge Graph Query and Analysis Platform using umi (React framework) and Ant Design Pro. Utilized graphin, a React toolkit for graph analysis based on G6, to develop an Equity Network Penetration Graph, enhancing data visualization capabilities.",
    //     icon: React.createElement(FaReact),
    //     date: "2022 May - 2022 July",
    // },
    {
        title: "Undergraduate College",
        location: "Henan University of Technology, China",
        description:
            "Junior undergraduate students are studying at Henan University of Technology.",
        icon: React.createElement(LuGraduationCap),
        date: "2021 Sep - 2024 Jun",
    },

]

export const experiencesDataZn = [
    {
        "title": "努力考上研究生ing",
        "location": "奋斗争取考上研究生",
        "description": "大三备战考研中...",
        "icon": React.createElement(FaReact),
        "date": "2024年6月 - 2024年12月"
    },
    {
        "title": "本科在读",
        "location": "河南工业大学",
        "description": "大三本科学生就读于河南工业大学",
        "icon": React.createElement(LuGraduationCap),
        "date": "2021年9月 - 2024年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "Personal Blog",
        title_zh: '个人博客',
        description:
            "My personal blog is an ordinary college student about knowledge, technology, life related records and sharing, as well as extra-curricular learning and fun.",
        desc_zh: "我的个人博客，是一名普通大学生关于知识、科技、生活相关的记录和分享，还有课外学习和搞怪。",
        tags: ["HTML", "TypeScript", "CSS", 'Framer Motion'],
        imageUrl: Blog,
        projectUrl: 'https://github.com/Gan1Ser/Gan1Ser.github.io',
        demoUrl: 'https://www.gan1ser.top',
    },
    {
        title: "Ripple Cloud",
        title_zh: '涟漪云',
        description: "A responsive game grid application that offers search and filter functionality, and features infinite scrolling using React Query. It also includes robust form validation with Zod and efficient state management with Zustand.",
        desc_zh: "基于蓝凑云的私人文件管理，采用Redis后端，可实现直链解析、文件上传和删除等功能。",
        tags: ["Redis", "TypeScript", "Zod", "React Query", "Chakra UI"],
        imageUrl: Cloud,
        projectUrl: 'https://github.com/Gan1Ser/Ripplecloud',
        demoUrl: 'https://file.gan1ser.top:444/',


    },
    {
        title: "Memos Planet Quest",
        title_zh: "Memos探索星球",
        description: "Build your own exploration planet based on Memos note-taking software, and connect its API to your personal blog, using Telegram to send instant comments in real time.",
        desc_zh: "基于Memos笔记软件构建自己的探索星球，并将其API连接到您的个人博客，使用Telegram实时发送即刻说说。",
        tags: ["JavaScript", "HTML", "CSS3"],
        imageUrl: Memos,
        projectUrl: 'https://github.com/Gan1Ser/memos',
        demoUrl: 'https://memos.gan1ser.top:444/',
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Matlab",
    "C",
    "C++",
    "Node",
    "Git",
    "Github",
    "Conda",
    "Redis",
    "MongoDB"
] 
