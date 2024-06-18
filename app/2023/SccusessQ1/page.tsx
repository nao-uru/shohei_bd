import { Modal } from '@/components/2023/modal';

export default function index() {



    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal isFillButton={true} isOutlineButton={false} isTextButton={true}
         src={'/Mamaka.png'} height={"180"} width={'400'} 
         heading={"GOOD!"}
         subtext={"正解です！"}
         text={"バリの最強ホテルママカ！"}
         fillText={"次の質問へ"} fillLink={"/2023/QuestionTwo"}
         textOnlyText={"TOPに戻る"} textOnlyLink={"/2023/Start"}
         />
        </div>
        </div>
        </>
    )
}