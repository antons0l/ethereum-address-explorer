type ButtonProps = {
  type: "button" | "submit";
  title: string;
}

const Button = ({type, title}: ButtonProps) => {
  return (
    <button type={type} className={`bg-slate-500 text-white px-4 py-2 lg:rounded-r-md hover:bg-slate-600`}>
      {title}
    </button>
  )
}

export default Button