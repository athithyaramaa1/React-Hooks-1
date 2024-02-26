import { useContext, useState } from "react";
import { ToggleTheme } from "./Prog6";

function UseContext2() {
    const [content, setContent] = useState(true);

    const ToggleContent = () => {
        setContent((prevContent) => !prevContent);
    };

    const [state, setState] = useState(0);

    const ToggleClick = () => {
        setState((state) => state + 1);
    };

    const theme = useContext(ToggleTheme);
    const themeStyle = {
        backgroundColor: theme ? "black" : "grey",
        color: theme ? "grey" : "black",
        padding: "2rem",
        margin: "2rem",
    };

    return (
        <div style={themeStyle}>
            {state}
            <br />
            <button onClick={ToggleClick}>Like</button>
            <br />
            {content && (
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                    ullam dolor fuga dolorem non eum? Consequuntur reprehenderit error,
                    sapiente adipisci dolorem quam pariatur alias hic voluptates,
                    distinctio illo. Quam, ipsam! Eaque, nisi. Nihil, odit beatae velit
                    nemo iusto odio quibusdam earum sed, tempora unde totam dicta.
                    Aspernatur ipsum, porro praesentium fuga quidem, ut qui illo fugiat
                    cumque exercitationem aperiam aut?
                </p>
            )}
            <button onClick={ToggleContent}>Content</button>
        </div>
    );
}

export default UseContext2;
