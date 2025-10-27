import { JSX } from "react";
import useUserForm from "../../hooks/useUserForm/useUserForm";

function UserForm(): JSX.Element{
    const {formData, errors, handleChange, handleSubmit} = useUserForm({
        username: '',
        email: '',
    })

    return (
        <fieldset>
            <legend>User information</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />
                    {errors.username && <p style={{color: "red"}}>{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    />
                   {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                </div>
                <button type="submit">Submit</button>
                <p>{JSON.stringify(formData)}</p>
            </form>
        </fieldset>
    )
}

export default UserForm