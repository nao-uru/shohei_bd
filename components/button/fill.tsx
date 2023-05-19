import Link from "next/link";

export const ButtonFill = (props:any) => {
    return(
        <>
        <Link href={props.link}>
        <div className="bg-Primary-main rounded-full px-4 py-5 w-full text-center text-white text-2xl font-extrabold">
        {props.text}
        </div>
        </Link>
        </>
    )
}

