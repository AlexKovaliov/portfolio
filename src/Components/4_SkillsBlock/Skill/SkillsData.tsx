import iconHtml from '../../../assets/iconsFonts/Logo-HTML5-CSS3-200.png'
import iconReact from '../../../assets/iconsFonts/icon-reactjs.svg'
import iconRedux from '../../../assets/iconsFonts/redux.svg'
import iconTS from '../../../assets/iconsFonts/typescript.svg'
import iconAxios from '../../../assets/iconsFonts/axios.svg'
import iconSB from '../../../assets/iconsFonts/storybook.svg'

export type skillsDataType = {
    title: string
    description: string
    icon: string
} []

export const skillsData: skillsDataType = [
    {
        title: "HTML, CSS",
        description: "HTML is a markup language for creating a webpage." +
            "CSS it is a style sheet language used to describe the appearance of a document.",
        icon: iconHtml,
    },
    {
        title: "React",
        description: "A JavaScript library for building user interfaces",
        icon: iconReact,
    },
    {
        title: "Redux",
        description: "A Predictable State Container for JS Apps",
        icon: iconRedux,
    },
    {
        title: "TypeScript",
        description: "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
        icon: iconTS,
    },
    {
        title: "Axios",
        description: "Axios is one of the most popular HTTP clients for browsers and promises-based node.js.",
        icon: iconAxios,
    },
    {
        title: "StoryBook",
        description: "Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more.",
        icon: iconSB,
    }
]