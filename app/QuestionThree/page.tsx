import { Chips } from "@/components/chips/chips";


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
            <Chips text={"ドイツ"} link={"/Miss"} />
            <Chips text={"チェコ"} link={"/Miss"} />
            <Chips text={"スロベニア"} link={"/Miss"} />
            <Chips text={"スイス"} link={"/SccusessQ3"} />
            <Chips text={"クロアチア"} link={"/Miss"} />
            <Chips text={"イタリア"} link={"/Miss"} />
            </div>
        </div>  

        </div>


        </>
    )
}