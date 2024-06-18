import { Chips } from "@/components/2023/chips/chips";


export default function index() {

    return(
        <>
        <div className="container px-4 pt-16">
        <div>
        <p className='font-bold text-3xl text-Primary-main text-center'>第3問！</p>
        <p className="text-base text-center mt-2"></p>
        </div>

        <div className="mt-8">
            <p className="text-center text-lg font-extrabold leading-normal">Q3 菜央が行ったことのない場所はどこ？</p>

            <div className="mt-8 flex-col justify-start items-center gap-4 flex">
            <Chips text={"ドイツ"} link={"/2023/Miss"} />
            <Chips text={"チェコ"} link={"/2023/Miss"} />
            <Chips text={"スロベニア"} link={"/2023/Miss"} />
            <Chips text={"スイス"} link={"/2023/SccusessQ3"} />
            <Chips text={"クロアチア"} link={"/2023/Miss"} />
            <Chips text={"イタリア"} link={"/2023/Miss"} />
            </div>
        </div>  

        </div>


        </>
    )
}