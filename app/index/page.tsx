import { Modal } from '@/components/modal';

export default function index() {

    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal isFillButton={true} isOutlineButton={true} isTextButton={true} 
         src={'/'} height={'0'} width={'0'} 
         heading={"Wel Come!"}
         subtext={"こんにちは！あなたは高椋将平さんですか？"}
         fillText={"はい。そうです！"} fillLink={"/Error"}
         outlineText={"いいえ。違います！"} outlineLink={"/Error"}
         textOnlyText={"わからない・・・"} textOnlyLink={"/"}
         />
        </div>
        </div>
        </>
    )
}