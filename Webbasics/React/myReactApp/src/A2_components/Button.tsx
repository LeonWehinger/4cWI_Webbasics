export type ButtonProps = {
    text: string,
    onClick: () => void
}

function Button({text, onClick}: ButtonProps) {
    return (
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 mt-5 rounded w-28 h-10" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;