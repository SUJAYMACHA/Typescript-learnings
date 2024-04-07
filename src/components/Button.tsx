interface ButtonProps {
    name?: string
    className?: string
    
}


export const Button = (props: ButtonProps) =>{
    return (
        <div>
        <button className={props.className}>
       {props.name}
        </button>
        
        </div>
    )
}