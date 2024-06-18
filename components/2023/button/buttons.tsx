import { ButtonFill } from "./fill"
import { ButtonText } from "./text"
import { ButtonOutline } from "./outline"


export const Buttons = (props:any) => {

    return(
        <>        
        <div className="flex flex-col gap-4">
         <ButtonFill link={props.fillLink} text={props.fillText} />
         <ButtonOutline link={props.outlineLink} text={props.outlineText} />
         <ButtonText link={props.textOnlyLink} text={props.textOnlyText}/>
        </div>
        </>
    )
}