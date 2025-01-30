import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError(); // This will provide the error information
    console.log(err);
    return (
        <div className="wrapper justify-center">
            <h1>We did a glitch bro, lets check the code again. Don't loose hope !! :) Where r u going ?? Do not get up and leave your chair untill you fix this</h1>
        </div>
    );
}

export default Error;