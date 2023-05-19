import Link from "next/link";

export const ButtonOutline = (props:any) => {
    return(
        <>
        <Link href={props.link}>
        <div className="bg-white rounded-full px-4 py-5 w-full text-center text-Primary-main text-2xl font-extrabold border-2 border-Primary-main">
        {props.text}
        </div>
        </Link>
        </>
    )
}