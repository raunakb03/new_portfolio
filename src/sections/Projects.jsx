import ProjectCard from '../components/Card'


const data = [
    {
        imgUrl: "https://res.cloudinary.com/dmnosl5ir/image/upload/v1689184688/fiverr/devconnect-preview_khfj38.png",
        title: "DevConnector",
        desc: "DevConnector is a web application which allows users to login, register,  create posts, like or dislike other's post and write a comment on their post.",
        stack: ["React Js", "Node Js", "MongoDb", "Redux"],
        deployedUrl: "https://raunak-devconnect.netlify.app/",
        githubUrl: "https://github.com/raunakb03/devconnect-mern/tree/raunak"
    },
    {
        imgUrl: "https://res.cloudinary.com/dmnosl5ir/image/upload/v1689184688/fiverr/devconnect-preview_khfj38.png",
        title: "DevConnector",
        desc: "DevConnector is a web application which allows users to login, register,  create posts, like or dislike other's post and write a comment on their post.",
        stack: ["React Js", "Node Js", "MongoDb", "Redux"],
        deployedUrl: "https://raunak-devconnect.netlify.app/",
        githubUrl: "https://github.com/raunakb03/devconnect-mern/tree/raunak"
    },
    {
        imgUrl: "https://res.cloudinary.com/dmnosl5ir/image/upload/v1689184688/fiverr/devconnect-preview_khfj38.png",
        title: "DevConnector",
        desc: "DevConnector is a web application which allows users to login, register,  create posts, like or dislike other's post and write a comment on their post.",
        stack: ["React Js", "Node Js", "MongoDb", "Redux"],
        deployedUrl: "https://raunak-devconnect.netlify.app/",
        githubUrl: "https://github.com/raunakb03/devconnect-mern/tree/raunak"
    },
    {
        imgUrl: "https://res.cloudinary.com/dmnosl5ir/image/upload/v1689184688/fiverr/devconnect-preview_khfj38.png",
        title: "DevConnector",
        desc: "DevConnector is a web application which allows users to login, register,  create posts, like or dislike other's post and write a comment on their post.",
        stack: ["React Js", "Node Js", "MongoDb", "Redux"],
        deployedUrl: "https://raunak-devconnect.netlify.app/",
        githubUrl: "https://github.com/raunakb03/devconnect-mern/tree/raunak"
    },
    {
        imgUrl: "https://res.cloudinary.com/dmnosl5ir/image/upload/v1689184688/fiverr/devconnect-preview_khfj38.png",
        title: "DevConnector",
        desc: "DevConnector is a web application which allows users to login, register,  create posts, like or dislike other's post and write a comment on their post.",
        stack: ["React Js", "Node Js", "MongoDb", "Redux"],
        deployedUrl: "https://raunak-devconnect.netlify.app/",
        githubUrl: "https://github.com/raunakb03/devconnect-mern/tree/raunak"
    },

]

const Projects = () => {
    return (
        <div id="projects-section" className="w-full">
            <div className="w-full flex flex-col justify-center items-start gap-10">
                {data.map((d, i) => (
                    <ProjectCard key={i} data={d} />
                ))}
            </div>
        </div>
    )
}

export default Projects
