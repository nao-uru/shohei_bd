import { Schedule } from "@/components/card/schedule";
import Link from "next/link";
import Image from 'next/image';

export default function index() {

    return(
        <>
        <div className="bg_main">
            <div className="p-4">
                <div className="mb-2">
                    <p className="shadow_text text-3xl font-normal">We are going to</p>
                    <p className="shadow_text text-4xl font-extrabold">Sendai</p>
                </div>
                <p className="shadow_text text-base font-normal">
                誕生日おめでとう！<br />
                今日はこれから仙台に行くよ〜<br />
                将平の予想とは違って北にいくよん！<br />

                </p>
            </div>

            {/* day1 */}
            <div className="mb-6">
            <div className="px-4 pt-4 flex-col justify-start items-start inline-flex">
            <div className="px-8 py-2 bg-blue-500 rounded-[40px] flex-col justify-center items-center flex">
            <div className="text-center text-white text-2xl font-extrabold leading-normal">DAY1</div>
            </div>
            </div>
            <div className="p-4">
                <div className="border-l-4 border-blue-500">
                <div className="flex-col justify-start items-start gap-4 inline-flex w-full">
                    <Schedule 
                    date={"2023/8/5 07:20"}
                    title={"上野駅に集合！"}
                    text={"寝坊厳禁！前の日はやはく寝ましょう。"}
                    image={"hidden"}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 7:46"} 
                    title={"新幹線出発！"}
                    text={"やまびこ125号・[8号車]15番A・B席　　　　　　出発前にコーヒーでも買ってから乗ろうね"}
                    image={""}
                    src={"/Shinkansen.png"}
                    width={"600"}
                     />

                     <Schedule 
                    date={"2023/8/5 9:38"} 
                    title={"仙台駅到着！"}
                    text={"杜の都仙台に到着。意外にすぐ着く！　　　ちなみに仙台は私の好きなジョジョの作者の出身地で、4部のモデルにもなってる場所。"}
                    image={"hidden"}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 10:30"} 
                    title={"松島へ"}
                    text={"日本三景松島！晴れそうでよかった！　　　 仙台駅から約30分"}
                    image={""}
                    src={"/Matsushima.png"}
                    width={"600"}
                     />

                     <Schedule 
                    date={"2023/8/5 12:30"} 
                    title={"松島さかな市場でランチ"}
                    text={"牡蠣が有名らしいけど、普通の海鮮もありそう。予約なしだから混んでないといいな"}
                    image={"hidden"}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 14:00"} 
                    title={"仙台駅周辺でカフェタイム"}
                    text={"仙台駅にCome back!地方だから混んでないとの予想。"}
                    image={"hidden"}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 15:00"} 
                    title={"ホテルへGO！"}
                    text={"三井ガーデンホテル仙台に泊まるよ〜　　　一旦ホテルに荷物を置いて休憩！　　　　　　チェックイン15:00 / アウト11:00 "}
                    image={"hidden"}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 19:00"} 
                    title={"××××スタート！"}
                    text={"秘密！やっと行けるね！"}
                    image={""}
                    width={"600"}
                    src={"/Hanabi.png"}
                     />
                     <Schedule 
                    date={"2023/8/6 20:30"} 
                    title={"「無垢とうや」で晩酌"}
                    text={"ちょっとおしゃれな居酒屋！"}
                    image={"hidden"}
                    src={""}
                     />
                     <Schedule 
                    date={"2023/8/6 23:00"} 
                    title={"おやすみなさい"}
                    text={"ホテルに戻ります！いつも通りコンビニで買い出しも。"}
                    image={"hidden"}
                    src={""}
                     />
                </div>
                </div>
            </div>
            </div>

             {/* day2 */}
            <div className="mb-6">
            <div className="w-[375px] h-14 px-4 py-2 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="px-8 py-2 bg-emerald-500 rounded-[40px] flex-col justify-center items-center flex">
            <div className="text-center text-white text-2xl font-extrabold leading-normal">DAY2</div>
            </div>
            </div>
            <div className="p-4">
                <div className="border-l-4 border-emerald-500">
                <div className="flex-col justify-start items-start gap-4 inline-flex w-full">
                    <Schedule 
                    date={"2023/8/6 11:30"}
                    title={"牛タンランチ！"}
                    text={"仙台と言えば牛タン！ホテルから歩いてすぐだよ〜"}
                    image={"hidden"}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/6 12:30"} 
                    title={"××××へ！"}
                    text={"秘密！私もどんなものなのかぜんぜん知らない！楽しみ〜！"}
                    image={""}
                    src={"/Tanabata.png"}
                    width={"600"}
                     />

                     <Schedule 
                    date={"2023/8/6 16:25"} 
                    title={"仙台駅を出発"}
                    text={"やまびこ 66号・[8号車]15番A・B席 仙台とバイバイ・・・"}
                    image={"hidden"}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/6 18:18"} 
                    title={"上野駅に到着"}
                    text={"解散！お疲れ様でした。家に帰るまでが遠足です。"}
                    image={"hidden"}
                    src={""}
                    width={""}
                     />

                </div>
                </div>
            </div>
            </div>

            <div className="w-full px-4 py-6 flex-col justify-center items-start gap-2 inline-flex">
            <div className="self-stretch h-[46px] flex-col justify-center items-start flex">
            <div className="text-neutral-900 text-[32px] font-normal">Thank you!</div>
            </div>
            <div className="self-stretch text-neutral-900 text-base font-normal leading-normal">2日間楽しもうね！</div>
            <Image src={"/Fin.png"} alt='ImageFin' width={"400"} height={"180"} />

            <Link href={"/"}>
            <div className="self-stretch justify-start items-start inline-flex">
            <div className="shadow_card px-6 py-4 bg-orange-400 rounded-[40px] shadow justify-center items-center gap-2 flex">
            <div className="text-white text-base font-extrabold leading-normal">最初にもどる</div>
            </div>
            </div>
            </Link>
            </div>

            <div className="mt-40">
                <p className="text-xs text-center">© 2023 Shohei Birthday from Nao. All Rights Reserved.</p>
            </div>
        </div>
        </>
    )
}