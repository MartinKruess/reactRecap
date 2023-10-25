import { findUser } from "./findUser"

export const Output = () => {
    const user = findUser()
    return (
        <>
            {user &&
            <div className="userInfo">
                <h3>{user.firstname}</h3>
                <ul>
                    <li>{user.job}</li>
                    <li>{user.company}</li>
                </ul>
            </div>
            }
        </>
    )
}