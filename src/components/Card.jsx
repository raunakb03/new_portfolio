/* eslint-disable react/prop-types */
import { FiExternalLink } from 'react-icons/fi'
import Button from './Button'
const ProjectCard = ({ data, index, currentHoverIndex, setCurrentHoverIndex, currentHovering, setCurrentHovering }) => {

  const handleMouseOver = () => {
    setCurrentHovering(true);
    setCurrentHoverIndex(index);
  }
  return (
    <div className={`project-card flex flex-row items-start justify-start gap-5 group px-5 py-5 rounded-md transition-all duration-300 ${currentHovering && currentHoverIndex !== index && 'opacity-50'}`} onMouseOver={() => handleMouseOver()} onMouseLeave={() => setCurrentHovering(false)}>
      <div className="flex-[2] mt-2 rounded-lg group-hover:border-2 border-rgba(226,232,240,.3)]">
        <img src={data.imgUrl} alt="" className="bg-cover rounded-md" />
      </div>
      <div className="flex-[5]">
        <div className="text-slate-200 text-xl mb-2 font-normal flex items-center justify-start gap-3 group-hover:text-teal-300 transition-all duration-150">{data.title}  <span><FiExternalLink className='group-hover:translate-x-[2px] group-hover:-translate-y-[3px] transition-all duration-150' /></span></div>
        <div className="text-slate-400 text-sm tracking-wider">{data.desc}</div>
        <div className='flex flex-row flex-wrap gap-4 mt-5'>{data.stack.map((st) => (
          <Button key={st} text={st} />
        ))}</div>
      </div>
    </div>
  )
}

export default ProjectCard
