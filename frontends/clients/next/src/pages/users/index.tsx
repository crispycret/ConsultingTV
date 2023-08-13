

import { hooks } from "eternite"
const { useMobile, useTitle } = hooks


export const users = () => {

    hooks.useTitle('Users')

    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}


export default users;