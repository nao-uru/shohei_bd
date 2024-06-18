import Image from 'next/image';
import Link from "next/link";

export const Schedule = (props:any) => {
    return(
        <>
        <div className="shadow_card p-4 rounded-tr-2xl rounded-br-2xl  flex-col justify-start items-start gap-2 inline-flex bg-white w-full">
            <div className='mb-2'>
                <p className="text-gray-400 text-xs font-normal leading-normal">{props.date}</p>
                <p className="text-lg font-extrabold leading-normal">{props.title}</p>
                <p className="mt-2 text-neutral-900 text-base font-normal leading-normal">{props.text}</p>
            </div>
            <Image className={props.image} src={props.src} alt='image' width={props.width} height="160" />
        </div>
        </>
    )
}
