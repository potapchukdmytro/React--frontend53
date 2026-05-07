// import uk from "./uk.json";
// import en from "./en.json";
import data from "./data.json";

function PersonInfo() {
    return (
        <div>
            <h1>{data.uk.name}</h1>
            <h1>{data.en.name}</h1>
        </div>
    );
}

export default PersonInfo;
