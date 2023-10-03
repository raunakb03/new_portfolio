/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from './Contact'

const RightSection = ({ setActiveSection }) => {

    const sections = ['about-section', 'skills-section', 'projects-section', 'contact-section']
    useEffect(() => {
        const handleScroll = () => {
            const sectionRefs = sections.map((section) => ({
                section,
                ref: document.getElementById(section),
            }));

            for (const { section, ref } of sectionRefs) {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (rect.top > 0 || rect.bottom > window.innerHeight/2) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);

    return (
        <div className="flex-1 py-[100px]">
            <div className="w-full flex flex-col items-start gap-[100px]">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default RightSection
