import Link from "next/link";

export const Chips = (props:any) => {
    return(
        <>
        <Link href={props.link}>
        <div className="w-[343px] h-12 px-6 py-3 text-gray-400 bg-zinc-100 rounded-[40px] justify-center items-center gap-2 inline-flex hover:bg-Primary-main hover:text-white hover:ease-in hover:duration-300">
        <div className=" text-base font-extrabold leading-normal">{props.text}</div>
        </div>
        </Link>

        </>
    )
}

