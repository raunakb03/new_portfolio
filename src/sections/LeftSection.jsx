import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'


const LeftSection = () => {
    return (
        <div className="flex-1 sticky top-0 h-[100vh] py-[80px]">
            <div className="h-full w-full flex flex-col justify-between items-start">
                {/* top heading section */}
                <div className="flex flex-col justify-center items-start">
                    <div className="text-6xl text-slate-200 font-bold mb-2">Raunak Bhalotia</div>
                    <div className="text-2xl text-slate-200 font-medium mb-4">Lead Engineer at Upstatement</div>
                    <div className="text-lg text-slate-400">I build accessible, inclusive products and digital experiences for the web.</div>
                </div>
                {/* middle navigation section */}
                <div className="flex flex-col justify-center items-start gap-4">
                    <div className="flex flex-row justify-center items-center gap-4">
                        <span className="w-16 h-[1.5px] bg-[#E2E8F0]"></span>
                        <span className="text-[12px] font-bold text-slate-200 tracking-widest">ABOUT</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <span className="w-8 h-[1.5px] bg-[#64748B]"></span>
                        <span className="text-[12px] font-bold text-slate-400 tracking-widest">EXPERIENCE</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <span className="w-8 h-[1.5px] bg-[#64748B]"></span>
                        <span className="text-[12px] font-bold text-slate-400 tracking-widest">PROJECTS</span>
                    </div>
                </div>
                {/* bottom social section */}
                <div className='flex gap-5 justify-center items-center'>
                    <AiOutlineTwitter className='cursor-pointer text-[#64748B]'  size={28} />
                    <AiFillGithub className='cursor-pointer text-[#64748B]'  size={28} />
                    <AiFillLinkedin className='cursor-pointer text-[#64748B]'  size={28} />
                    <SiLeetcode className='cursor-pointer text-[#64748B]'  size={28} />
                    <SiCodeforces className='cursor-pointer text-[#64748B]'  size={28} />
                </div>
            </div>
        </div>
    )
}

export default LeftSection
