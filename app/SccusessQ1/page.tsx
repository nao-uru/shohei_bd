import { Modal } from '@/components/modal';

export default function index() {



    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal isFillButton={true} isOutlineButton={false} isTextButton={true}
         src={'Mamaka.svg'} height={"180"} width={'320'} 
         heading={"GOOD!"}
         subtext={"正解です！"}
         text={"バリの最強ホテルママカ！"}
         fillText={"次の質問へ"} fillLink={"/QuestionTwo"}
         textOnlyText={"TOPに戻る"} textOnlyLink={"/"}
         />
        </div>
        </div>
        </>
    )
}