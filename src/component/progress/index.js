import {Color, Color3} from "../../utils";


export const Progress = ({
    margin,
    height,
    value,
    backgroundColor,
    color
                         }) => {


    return(
        <div
            style={{
                backgroundColor: backgroundColor ? backgroundColor : Color3,
                height: height ? height : '10px',
                borderRadius: '5px',
                overflow: "hidden",
                margin: margin,
            }}
        >
            <div
                style={{
                    width: value + '%',
                    backgroundColor: color ? color : Color,
                    height: '100%',
                    borderRadius: '5px',
                }}
            />
        </div>
    )
}