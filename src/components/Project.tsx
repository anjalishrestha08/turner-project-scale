import Image from "next/image";
import Link from "next/link";

export type ProjectProps = {
    title: string;
    url: string;
    image: string;
    location: string;
    sector:string
    };

export function Project({ title, url, image, location, sector}:ProjectProps){
    return(
    <div className="flex flex-col p-3 pl-10 pr-10 m-3 gap-4">
        <div className="text-md text-gray-500 font-semibold">{sector}</div>
        <Link href={url} className="">
        <div className="rounded-xl overflow-hidden">
            <Image
            src={image}
            alt={title}
            width={450}
            height={290}
            className="w-[full] h-[full] sm:w-[30rem] sm:h-[20rem] md:w-[25rem] md:h-[15rem] lg:w-[40rem] lg:h-[14rem] xl:w-[30rem] xl:h-[13rem] rounded-xl mt-2 mb-3 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
        </div>
        <div className="text-lg text-gray-500 font-semibold">{location}</div>
        <div className="text-xl text-black hover:text-blue-700">{title}</div>
        </Link>
    </div>)
}