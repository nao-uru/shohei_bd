import Link from "next/link";

export const ButtonText = (props:any) => {
    return(
        <>
        <Link href={props.link}>
        <div className="px-4 py-5 w-full text-center text-Primary-main text-base font-extrabold ">
        {props.text}
        </div>
        </Link>
        </>
    )
}