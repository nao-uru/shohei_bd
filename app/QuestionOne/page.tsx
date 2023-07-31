import { Chips } from "@/components/chips/chips";


export default function index() {

    return(
        <>
        <div className="container px-4 pt-16">
        <div>
        <p className='font-bold text-3xl text-Primary-main text-center'>Thank you!</p>
        <p className="text-base text-center mt-2">ありがとうございます！<br />確認のため質問をします。</p>
        </div>

        <div className="mt-8">
            <p className="text-center text-lg font-extrabold leading-normal">Q1 バリ島旅行で宿泊したホテルの名前はなんでしょう？</p>

            <div className="mt-8 flex-col justify-start items-center gap-4 flex">
            <Chips text={"MAKAKA BY Ovolo"} link={"/Miss"} />
            <Chips text={"MAMAKA BY Ovolo"} link={"/SccusessQ1"} />
            <Chips text={"MAMAKA BY Ololo"} link={"/Miss"} />
            </div>
        </div>

        </div>


        </>
    )
}