import About from "./About"

const RightSection = () => {
    return (
        <div className="flex-1 py-[100px]">
            <div className="h-full w-full flex flex-col justify-between items-start">
                <About />
            </div>
        </div>
    )
}

export default RightSection
