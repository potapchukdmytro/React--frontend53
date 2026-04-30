function Square({isDark = false}) {
    return (
        <div
            style={{
                display: "inline-block",
                width: "300px",
                height: "300px",
                backgroundColor: isDark ? "black" : "grey",
            }}
        ></div>
    );
}

export default Square;
