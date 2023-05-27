import apart from '../public/projects/apart.svg'
import apple from '../public/projects/apple.svg'
import weather from '../public/projects/weather.png'
import facereco from '../public/projects/facereco.svg'
import rw from '../public/projects/dekarstwo.svg'
export const projects = [
    {
        project_image: apart,
        project_tittle:"APART",
        project_subtittle:"E-commerce platform",
        project_description: " A reproduction of the APART jewelry store. The website has implemented functionalities such as login, registration, wish list, shopping cart, STRIPE payments, content management system to facilitate product management and mo0re.",
        tech_array: ["Javascript", "TypeScript", "React", "Next", "Redux", "Tailwind", "Sanity CMS", "MongoDB", "Stripe", "MUI"]
    },
    {
        project_image: apple,
        project_tittle:"APPLE",
        project_subtittle:"E-commerce platform with new design proposal",
        project_description: "This is a new design proposal for the APPLA store. With this project, I focused on implementing functionalities such as logging in via Google, shopping cart, shopping via the STRIPE platform. In addition, with the help of the SANITY content management system, it was possible to manage products using an external system without the need to change the code.",
        tech_array: ["Javascript", "TypeScript", "React", "Next", "Redux", "Tailwind", "Sanity CMS", "Stripe"]
    },
    {
        project_image: weather,
        project_tittle:"Weather App",
        project_subtittle:"Weather forecasting application",
        project_description: "It is an application that shows the current weather with a forecast for the next seven days. Several APIs were used here, such as PlacesAPI, GeoLocationAPI OpenMeteoApI and others. The Front End of the Application was created with the help of React and the BackEnd with the help of Node.js + Express.js.",
        tech_array: ["Javascript", "TypeScript", "React", "SASS", "Node.js", "Express.js"]
    },
    {
        project_image: facereco,
        project_tittle:"Face recognition",
        project_subtittle:"Face detection",
        project_description: "An application that allows face detection on provided photos and images with the ability to log in, register and save your progress in the application.",
        tech_array: ["Javascript", "TypeScript", "React", "Next", "Redux", "Tailwind", "Sanity CMS", "PostgreSQL"]
    },
    {
        project_image: rw,
        project_tittle:"APART",
        project_subtittle:"E-commerce platform",
        project_description: " A reproduction of the APART jewelry store. The website has implemented functionalities such as login, registration, wish list, shopping cart, STRIPE payments, content management system to facilitate product management and mo0re.",
        tech_array: ["Javascript", "TypeScript", "React", "Next", "Redux", "Tailwind", "Sanity CMS"]
    },
]