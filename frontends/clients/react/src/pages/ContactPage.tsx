import { render } from "@testing-library/react"
import useTitle from "utils/common/hooks/useTitle";





export const Contact = () => {
    useTitle('Conact | Cord Cut Help');

    return (
        <>
            <div>
                <h1>Contact</h1>
            </div>
        </>
    )
}


export default Contact;
