import { Modal } from '@/components/modal';

export default function index() {

    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal isFillButton={true} isOutlineButton={true} isTextButton={true} 
         src={'/'} height={'0'} width={'0'} 
         heading={"Wel Come!"}
         subtext={"おはようございます！あなたは高椋将平さんですか？"}
         fillText={"はい。そうです！"} fillLink={"/QuestionOne"}
         outlineText={"いいえ。違います！"} outlineLink={"/Miss"}  
         textOnlyText={"わからない・・・"} textOnlyLink={"/Error"}
         />
        </div>
        </div>
        </>
    )
}