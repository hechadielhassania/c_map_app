// components/Logo.tsx
import Image from 'next/image';

const Logo = () => (
  <div className="flex-shrink-0">
    <Image
      src="/logo_w.png"
      alt="GoLattitude"
      width={180}
      height={95}
    />
  </div>
);

export default Logo;
