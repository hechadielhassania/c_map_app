import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none`}
    >
      <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={10}
            />
      <p className="p-2 text-[19px]">Career Companion</p>
    </div>
  );
}
