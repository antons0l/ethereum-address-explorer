type ButtonProps = {
  type: "button" | "submit";
  title: string;
}

const Button = ({type, title}: ButtonProps) => {
  return (
    <button type={type} className={`bg-red-400 text-white px-4 py-2 lg:rounded-r-md hover:bg-red-500`}>
      {title}
    </button>
  )
}

export default Button