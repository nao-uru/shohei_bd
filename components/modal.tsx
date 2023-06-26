
import { Buttons } from './button/buttons';
import Image from 'next/image';
import { css } from "@emotion/react";
import { ButtonFill } from './button/fill';
import { ButtonOutline } from './button/outline';
import { ButtonText } from './button/text';


export const Modal = (props:any) => {

    return(
        <>
        <div className='bg-white rounded-2xl px-4 py-6 fadeDown'>
            <i className='text-Primary-main flex justify-center'>{props.icon}</i>
            <p className='font-bold text-3xl text-Primary-main text-center'>{props.heading}</p>
            <p className='font-bold text-lg text-center my-3'>{props.subtext}</p>
            <p className='text-base text-center'>{props.text}</p>
            <Image src={props.src} alt='illust' width={props.width} height={props.height} />
            <div className='mt-4'>{props.isFillButton ? <ButtonFill text={props.fillText} link={props.fillLink} /> : ""} </div>
            <div className='mt-4'>{props.isOutlineButton ? <ButtonOutline text={props.outlineText} link={props.outlineLink} /> : ""} </div>
            <div className='mt-4'>{props.isTextButton ? <ButtonText text={props.textOnlyText} link={props.textOnlyLink} /> : ""} </div>
        </div>
        </>
    )
}