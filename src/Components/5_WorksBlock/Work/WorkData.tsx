import imgSocial from '../../../assets/img/socil-img.jpg'
import imgToDo from '../../../assets/img/ToDoList.png'
import imgEstate from '../../../assets/img/real_estate_project.jpg'

export type workDataType = {
    title: string
    description: string
    img: string
    linkWayGit: string
    linkWayPages: string
} []

export const worksData: workDataType = [
    {
        title: "Social network",
        description: "React, Hooks, TypeScript",
        img: imgSocial,
        linkWayGit: "https://github.com/AlexKovaliov/social-network",
        linkWayPages: ""
    },
    {
        title: "To do lists",
        description: "The to-do list is designed to help you plan your tasks to maximize your efficiency.",
        img: imgToDo,
        linkWayGit: "https://github.com/AlexKovaliov/TodoList",
        linkWayPages: ""
    },
    {
        title: "Estate project",
        description: "React, Hooks, JS",
        img: imgEstate,
        linkWayGit: "https://github.com/AlexKovaliov/real_estate_project",
        linkWayPages: "https://AlexKovaliov.github.io/real_estate_project"
    }
]