import { Modal } from '@/components/modal';
import { FaStar } from 'react-icons/fa';

export default function index() {
    return(
        <>
        <div className='flex justify-center items-center h-full relative bg px-4'>
        <div className='positionCenter popAnimation'>
        <Modal src={'/'} height={'0'} width={'0'} 
         heading={"Wel Come!"}
         subtext={`こんにちは！あなたは${text}さんですか？`}
         />
        </div>
        </div>
        </>
    )
}

const text = <p className='text-Primary-main'>高椋将平</p>