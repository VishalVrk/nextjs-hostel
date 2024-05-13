import Link from "next/link";
import Image from "next/image";

interface CardProps {
    id:number;
    title: string;
    imageUrl: string;
    location:string;
    href:string;
    isLink:boolean;
}

export default function card({ id,title, imageUrl,location='',href,isLink=true}: CardProps) {
  return (
   isLink ?
    <Link href={href}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover" 
      width={500}
          height={300}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <h2 className="text-base text-red-400 font-semibold mb-2">{location}</h2>
      </div>
    </div>
    </Link>:<div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover" 
      width={500}
          height={300}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <h2 className="text-base text-red-400 font-semibold mb-2">{location}</h2>
      </div>
    </div>
  )
}
