import Button from '../Elements/button';
import Input from '../Elements/input';

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get('email'));
    console.log(formData.get('password'));
  };

  return (
    <div className="bg-slate-600 w-4/12 p-8 rounded">
      <h1 className="text-white text-3xl">Login</h1>
      <form method="post" onSubmit={handleLogin}>
        <Input name={'email'} type={'email'} />
        <Input name={'password'} type={'password'} />
        <div className="flex justify-end">
          <Button type={'submit'}>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
