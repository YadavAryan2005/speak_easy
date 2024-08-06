import Image from "next/image";
function Login() {
  return (
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center  w-full h-[calc(100vh-140px)] min-h-[500px] '>
      <Image src='/hero.svg' alt='Vercel Logo' width={400} height={200} />
      <div className='text-center text-sm md:text-md max-w-[448px] '>
        <p>Learn, practice, and master new Languages with Speak Easy</p>
      </div>
    </div>
  );
}

export default Login;
