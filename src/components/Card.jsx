/* eslint-disable react/prop-types */
import { FiExternalLink } from 'react-icons/fi'
import Button from './Button'
const ProjectCard = ({ data }) => {
  return (
    <div className=" project-card flex flex-row items-start justify-start gap-5 group px-5 py-5 rounded-md">
      <div className="flex-1 pt-2 rounded-lg">
        <img src={data.imgUrl} alt="" className="bg-cover rounded-md" />
      </div>
      <div className="flex-[3]">
        <div className="text-slate-200 text-xl mb-2 font-normal flex items-center justify-start gap-3">{data.title}  <span><FiExternalLink /></span></div>
        <div className="text-slate-400 text-sm tracking-wider">{data.desc}</div>
        <div className='flex flex-row flex-wrap gap-4 mt-5'>{data.stack.map((st) => (
          <Button key={st} text={st} />
        ))}</div>
      </div>
    </div>
  )
}

export default ProjectCard
