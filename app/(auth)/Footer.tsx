import { Button } from "@/components/ui/button";
import Image from "next/image";
function Footer() {
  return (
    <div className='w-full border-t-2'>
      <footer className='max-w-7xl mx-auto h-20  border-slate-200 p-2'>
        <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
          <Button variant={"ghost"} className='gap-2'>
            <Image
              src='/jp.svg'
              alt='learn'
              width={38}
              height={40}
              className='rounded-md'
            />
            Japanese
          </Button>
          <Button variant={"ghost"} className='gap-2'>
            <Image
              src='/hr.svg'
              alt='Croatian'
              width={38}
              height={40}
              className='rounded-md'
            />
            Croatian
          </Button>
          <Button variant={"ghost"} className='gap-2'>
            <Image
              src='/es.svg'
              alt='Spanish'
              width={38}
              height={40}
              className='rounded-md'
            />
            Spanish
          </Button>
          <Button variant={"ghost"} className='gap-2'>
            <Image
              src='/fr.svg'
              alt='French'
              width={38}
              height={40}
              className='rounded-md'
            />
            French
          </Button>
          <Button variant={"ghost"} className='gap-2'>
            <Image
              src='/it.svg'
              alt='Italian'
              width={38}
              height={40}
              className='rounded-md'
            />
            Italian
          </Button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
