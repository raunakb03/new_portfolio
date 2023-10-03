import Button from "../components/Button"

const mySkills = ["C++", "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React Js", "Next Js", "Node Js", "Express", "MongoDb", "Git / Github"]

const Skills = () => {
    return (
        <div id="skills-section" className="w-full flex flex-col gap-10 text-lg text-slate-400 tracking-wider">
            <div><span className="text-slate-200 font-semibold">Programming Languages</span> & <span className="text-slate-200 font-semibold"> Technologies</span> I{`'`}m familiar with :</div>
            <div className="w-full flex flex-row flex-wrap gap-5">
                {mySkills.map((skill) => (
                    <Button key={skill} text={skill} />
                ))}
            </div>
        </div>
    )
}

export default Skills
