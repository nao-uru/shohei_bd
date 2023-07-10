import { Modal } from '@/components/modal';

export default function index() {



    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal isFillButton={true} isOutlineButton={false} isTextButton={false}
         src={'Bye.svg'} height={"180"} width={'320'} 
         heading={"残念！ハズレです！"}
         subtext={""}
         fillText={"スタートにもどる"} fillLink={"/"}
         />
        </div>
        </div>
        </>
    )
}   