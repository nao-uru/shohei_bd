import { Modal } from '@/components/modal';

export default function index() {

    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal isFillButton={true} isOutlineButton={false} isTextButton={true}
         src={'/Perfect.png'} height={"180"} width={'400'} 
         heading={"Perfect!!"}
         subtext={"将平！お誕生日おめでとう！！"}
         text={"全問正解です！本日の予定を発表します♫"}
         fillText={"NEXT"} fillLink={"/Main"}
         textOnlyText={"TOPに戻る"} textOnlyLink={"/"}
         />
        </div>
        </div>
        </>
    )
}