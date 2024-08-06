import Image from "next/image";
function Nav() {
  return (
    <div className='w-full border-b-2'>
      <div className=' py-2 flex justify-between items-center px-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-2'>
          <Image src='/mascot.svg' alt='learn' width={40} height={40} />
          <span className='text-xl font-extrabold text-green-700'>
            Speak Easy
          </span>
        </div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Nav;
