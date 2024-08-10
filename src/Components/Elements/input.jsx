const Input = (props) => {
  const { name, type } = props;
  return (
    <div className="flex flex-col mt-3">
      <label htmlFor="{name}" className="text-white">
        {name}
      </label>
      <input className="leading-6 py-2 pl-2 ring-2 appearance-none text-sm shadow-sm rounded mt-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" type={type} name={name} id={name} placeholder={`your ${name} ...`} />
    </div>
  );
};

export default Input;
