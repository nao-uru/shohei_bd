import { Modal } from '@/components/2023/modal';

export default function index() {

const imgs = ['/Miss.png','/Miss2.png','/Miss3.png'];
const imgNumber = Math.floor( Math.random() * imgs.length);


    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal isFillButton={true} isOutlineButton={false} isTextButton={false}
         src={imgs[imgNumber]} height={"180"} width={'600'} 
         heading={"残念！ハズレ！"}
         subtext={"最初からやりなしてください。"}
         fillText={"スタートにもどる"} fillLink={"/2023/Start"}
         />
        </div>
        </div>
        </>
    )
}   

