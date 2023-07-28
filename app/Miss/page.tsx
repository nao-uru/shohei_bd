import { Modal } from '@/components/modal';

export default function index() {

const imgs = ['/Miss.svg','/Miss2.svg'];
const imgNumer = Math.floor( Math.random() * imgs.length);


    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal isFillButton={true} isOutlineButton={false} isTextButton={false}
         src={imgs[imgNumer]} height={"180"} width={'320'} 
         heading={"残念！ハズレです！"}
         subtext={""}
         fillText={"スタートにもどる"} fillLink={"/"}
         />
        </div>
        </div>
        </>
    )
}   

