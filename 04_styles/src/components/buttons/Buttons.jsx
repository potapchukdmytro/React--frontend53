export function CustomButton({
    // props
    text, 
    backgroundColor = "gold", 
    fontSize = "14px", 
    color = "black", 
    borderRadius = "5px"
}) {
    return (
        <button style={{
            backgroundColor: backgroundColor,
            fontSize: fontSize,
            color: color,
            borderRadius: borderRadius
        }}>
            {text}
        </button>
    )
}