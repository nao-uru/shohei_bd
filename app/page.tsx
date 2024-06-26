import { Modal } from '@/components/2023/modal';

export default function index() {

    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal isFillButton={true} isOutlineButton={true} isTextButton={true} 
         src={'/'} height={'0'} width={'0'} 
         heading={"Wel Come!"}
         subtext={"見たい年度を選択してね"}
         fillText={"2023"} fillLink={"/2023/Start"}
         outlineText={"2024"} outlineLink={"/2024/Start"}  
         textOnlyText={"2025"} textOnlyLink={"/"}
         />
        </div>
        </div>
        </>
    )
}