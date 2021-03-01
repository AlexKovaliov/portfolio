import imgSocial from '../../../assets/img/socil-img.jpg'
import imgToDo from '../../../assets/img/ToDoList.png'
import imgEstate from '../../../assets/img/real_estate_project.jpg'
import imgMeditation from '../../../assets/img/Meditation.jpg'

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
        description: "React, Hooks, TypeScript, Redux, Thunk, Axios",
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
    },
    {
        title: "Meditation app",
        description: "HTML, CSS, JS",
        img: imgMeditation,
        linkWayGit: "https://github.com/AlexKovaliov/Meditation-App",
        linkWayPages: "#"
    }
]