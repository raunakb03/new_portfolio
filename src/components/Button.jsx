/* eslint-disable react/prop-types */
const Button = ({ text, fontSize = "text-sm" }) => {
    return (
        <div className={`${fontSize} text-teal-300 leading-5 font-medium py-2 px-3 bg-teal-400/10 flex rounded-full items-center hover:scale-110 transition-all duration-200 opacity-80 hover:opacity-100 cursor-pointer`}>
            {text}
        </div>
    )
}

export default Button
