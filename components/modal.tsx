
import { Buttons } from './button/buttons';
import Image from 'next/image';
import { css } from "@emotion/react";


export const Modal = (props:any) => {
    return(
        <>
        <div className='bg-white rounded-2xl px-4 py-6 fadeDown'>
            <i className='text-Primary-main flex justify-center'>{props.icon}</i>
            <p className='font-black text-2xl text-Primary-main text-center'>{props.heading}</p>
            <p className='font-bold text-lg text-center'>{props.subtext}</p>
            <p className='text-base text-center'>{props.text}</p>
            <Image src={props.src} alt='illust' width={props.width} height={props.height} />
            <Buttons filltext={'test1'} filllink={'/'} outlinetext={'test2'} outlinelink={'/'} texttext={'test3'} textlink={'/'}/>
        </div>
        </>
    )
}

