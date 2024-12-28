import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError(); // This will provide the error information
    console.log(err);
    return (
        <div className="wrapper justify-center">
            <h1>We did a glitch bro, lets check the code and refresh again. Don't loose hope !! :)</h1>
        </div>
    );
}

export default Error;