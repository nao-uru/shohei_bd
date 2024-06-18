import { Chips } from "@/components/2023/chips/chips";


export default function index() {

    return(
        <>
        <div className="container px-4 pt-16">
        <div>
        <p className='font-bold text-3xl text-Primary-main text-center'>第2問！</p>
        <p className="text-base text-center mt-2"></p>
        </div>

        <div className="mt-8">
            <p className="text-center text-lg font-extrabold leading-normal">Q2 将平と菜央がAPAホテルに忘れたことがないものはどれ？</p>

            <div className="mt-8 flex-col justify-start items-center gap-4 flex">
            <Chips text={"アクセサリー"} link={"/2023/Miss"} />
            <Chips text={"スマホ"} link={"/2023/SccusessQ2"} />
            <Chips text={"メガネ"} link={"/2023/Miss"} />
            </div>
        </div>  

        </div>


        </>
    )
}