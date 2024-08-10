const Button = ({ type, children, onclick = () => {} }) => {
  return (
    <button type={type} className="bg-green-600 px-5 py-1 rounded mt-12 text-white" onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
