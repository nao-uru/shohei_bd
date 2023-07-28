import { Schedule } from "@/components/card/schedule";

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
                東に行くのは暑いし、1泊だから新幹線で行けるところがいいな、って軽い気持ちで決めたけど、とてもいいプランになりそう！
                </p>
            </div>

            {/* day1 */}
            <div className="p-4">
                <div className="border-l-4 border-orange-400">
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
                    text={"やまびこ125号・[8号車]15番A・B席出発前にコーヒーでも買ってから乗ろうね"}
                    image={""}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 9:38"} 
                    title={"仙台駅到着！"}
                    text={"杜の都仙台に到着。意外にすぐ着く！ちなみに仙台は私の好きなジョジョの作者の出身地で、4部のモデルにもなってる場所。"}
                    image={"hidden"}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 10:30"} 
                    title={"松島へ"}
                    text={"日本三景松島！晴れるといいね〜！仙台駅から約30分"}
                    image={""}
                    src={"Matsushima.svg"}
                    width={"311"}
                     />

                     <Schedule 
                    date={"2023/8/5 12:30"} 
                    title={"松島さかな市場でランチ"}
                    text={"牡蠣が有名らしいけど、普通の海鮮もありそう。予約なしだから混んでないといいな"}
                    image={""}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 14:00"} 
                    title={"仙台駅周辺でカフェタイム"}
                    text={"駅にCome back!地方だから混んでないとの予想。"}
                    image={"hidden"}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 15:00"} 
                    title={"ホテルへGO！"}
                    text={"三井ガーデンホテル仙台に泊まるよ〜一旦ホテルに荷物を置いて休憩！チェックイン15:00 / アウト11:00 "}
                    image={""}
                    src={""}
                     />

                     <Schedule 
                    date={"2023/8/5 19:00"} 
                    title={"××××スタート！"}
                    text={"秘密！やっと行けるね！"}
                    image={""}
                    width={"311"}
                    src={""}
                     />
                     <Schedule 
                    date={"2023/8/6 20:30"} 
                    title={"「無垢とうや」で晩酌"}
                    text={"ちょっとおしゃれな居酒屋！"}
                    image={""}
                    src={""}
                     />
                     <Schedule 
                    date={"2023/8/6 23:00"} 
                    title={"おやすみなさい"}
                    text={"ホテルに戻ります！"}
                    image={""}
                    src={""}
                     />
                </div>
                </div>
            </div>

            <div className="mt-40">
                <p className="text-xs text-center">© 2023 Shohei Birthday from Nao. All Rights Reserved.</p>
            </div>
        </div>
        </>
    )
}