import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data)
        navigate("/dashboard")
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 mx-4 md:mx-0 md:flex md:flex-col md:items-center">
                <div className="md:w-[25rem]">
                    <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        margin="dense"
                        {...register("username", {required: true })}
                    />
                    { errors.username && (<p className="text-xs text-red-600">Username name is required</p>)}
                </div>
                <div className="md:w-[25rem]">
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        margin="dense"
                        {...register("Sname", {required: true})}
                    />
                    { errors.password && (<p className="text-xs text-red-600">Password name is required</p>)}
                </div>

                <Button 
                    variant="contained" 
                    className="md:w-[25rem]"
                    type="submit"
                    >Login</Button>
            </form>
        </div>
    )
}

export default LoginForm;