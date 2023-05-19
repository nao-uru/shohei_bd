import { ButtonFill } from "./fill"
import { ButtonText } from "./text"
import { ButtonOutline } from "./outline"


export const Buttons = (props:any) => {
    return(
        <>
        <div className="flex flex-col gap-4">
         <ButtonFill link={props.filllink} text={props.filltext} />
         <ButtonOutline link={props.outlinelink} text={props.outlinetext} />
         <ButtonText link={props.textlink} text={props.texttext}/>
        </div>
        </>
    )
}