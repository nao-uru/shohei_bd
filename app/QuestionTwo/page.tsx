import { Chips } from "@/components/chips/chips";


export default function index() {

    return(
        <>
        <div className="container px-4 pt-16">
        <div>
        <p className='font-bold text-3xl text-Primary-main text-center'>第2問！</p>
        <p className="text-base text-center mt-2"></p>
        </div>

        <div className="mt-8">
            <p className="text-center text-lg font-extrabold leading-normal">Q2</p>

            <div className="mt-8 flex-col justify-start items-center gap-4 inline-flex">
            <Chips text={"MAKAKA BY Ovolo"} link={"/Miss"} />
            <Chips text={"MAMAKA BY Ovolo"} link={"/SccusessQ2"} />
            <Chips text={"MAMAKA BY Ololo"} link={"/Miss"} />
            </div>
        </div>  

        </div>


        </>
    )
}