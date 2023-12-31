/* eslint-disable react/prop-types */
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'


const LeftSection = ({ activeSection, setActiveSection }) => {

    const handleClick = (section) => {
        setActiveSection(section);
        const targetSection = document.getElementById(section)
        if (targetSection === 'about-section') {
            window.scrollTo(0, 0);
            return;
        }
        else if (targetSection !== 'about-section') {
            const yOffset = (window.innerHeight / 4);
            window.scrollTo({
                top: targetSection.offsetTop - yOffset,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className="flex-1 sticky top-0 h-[100vh] py-[100px]">
            <div className="h-full w-full flex flex-col justify-between items-start">
                {/* top heading section */}
                <div className="flex flex-col justify-center items-start">
                    <div className="text-5xl text-slate-200 font-bold mb-2">Raunak Bhalotia</div>
                    <div className="text-2xl text-slate-200 font-medium mb-4">Lead Engineer at Upstatement</div>
                    <div className="text-lg text-slate-400 w-[70%]">I build accessible, inclusive products and digital experiences for the web.</div>
                </div>
                {/* middle navigation section */}
                <div className="flex flex-col justify-center items-start gap-4">
                    <div className="flex flex-row justify-center items-center gap-4 cursor-pointer group" onClick={() => handleClick("about-section")}>
                        <span className={`h-[2px] ${activeSection === 'about-section' ? "bg-[#E2E8F0] w-16" : "bg-[#64748B] w-8"} group-hover:w-16 group-hover:bg-[#E2E8F0] transition-all duration-200 group-focus:w-16 group-focus:bg-[#E2E8F0]`}></span>
                        <span className={`text-[12px] font-bold ${activeSection === 'about-section' ? "text-slate-200" : "text-slate-400"} tracking-widest group-hover:text-slate-200 group-focus:text-slate-200`}>ABOUT</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4 cursor-pointer group" onClick={() => handleClick("skills-section")}>
                        <span className={`h-[2px] ${activeSection === 'skills-section' ? "bg-[#E2E8F0] w-16" : "bg-[#64748B] w-8"} group-hover:w-16 group-hover:bg-[#E2E8F0] transition-all duration-200 group-focus:w-16 group-focus:bg-[#E2E8F0]`}></span>
                        <span className={`text-[12px] font-bold ${activeSection === 'skills-section' ? "text-slate-200" : "text-slate-400"} tracking-widest group-hover:text-slate-200 group-focus:text-slate-200`}>SKILLS</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4 cursor-pointer group" onClick={() => handleClick("projects-section")}>
                        <span className={`h-[2px] ${activeSection === 'projects-section' ? "bg-[#E2E8F0] w-16" : "bg-[#64748B] w-8"} group-hover:w-16 group-hover:bg-[#E2E8F0] transition-all duration-200 group-focus:w-16 group-focus:bg-[#E2E8F0]`}></span>
                        <span className={`text-[12px] font-bold ${activeSection === 'projects-section' ? "text-slate-200" : "text-slate-400"} tracking-widest group-hover:text-slate-200 group-focus:text-slate-200`}>PROJECTS</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4 cursor-pointer group" onClick={() => handleClick("contact-section")}>
                        <span className={`h-[2px] ${activeSection === 'contact-section' ? "bg-[#E2E8F0] w-16" : "bg-[#64748B] w-8"} group-hover:w-16 group-hover:bg-[#E2E8F0] transition-all duration-200 group-focus:w-16 group-focus:bg-[#E2E8F0]`}></span>
                        <span className={`text-[12px] font-bold ${activeSection === 'contact-section' ? "text-slate-200" : "text-slate-400"} tracking-widest group-hover:text-slate-200 group-focus:text-slate-200`}>CONTACT ME</span>
                    </div>
                </div>
                {/* bottom social section */}
                <div className='flex gap-5 justify-center items-center'>
                    <AiOutlineTwitter className='cursor-pointer text-[#64748B] hover:text-[#E2E8F0]' size={28} />
                    <AiFillGithub className='cursor-pointer text-[#64748B] hover:text-[#E2E8F0]' size={28} />
                    <AiFillLinkedin className='cursor-pointer text-[#64748B] hover:text-[#E2E8F0]' size={28} />
                    <SiLeetcode className='cursor-pointer text-[#64748B] hover:text-[#E2E8F0]' size={28} />
                    <SiCodeforces className='cursor-pointer text-[#64748B] hover:text-[#E2E8F0]' size={28} />
                </div>
            </div>
        </div>
    )
}

export default LeftSection
