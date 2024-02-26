type InputProps = {
  id: string;
  type: "text";
  placeholder: string;
}

const Input = ({id, type, placeholder}: InputProps) => {
  return (
    <input 
      id={id}
      type={type} 
      placeholder={placeholder} 
      className="p-2 border border-gray-300 lg:rounded-l-md focus:outline-none min-w-96 " 
    />
  )
}

export default Input