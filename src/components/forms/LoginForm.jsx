import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";


function LoginForm() {
    const [ showPassword, setShowPassword ] = useState(false)
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
                    <div className="flex items-center">
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? "text": "password"}
                            name="password"
                            margin="dense"
                            {...register("Sname", {required: true})}
                        />
                        <div 
                            onClick={() => setShowPassword(!showPassword)} 
                            className="cursor-poiinter absolute right-6"
                            >
                            {
                                showPassword ? 
                                <IoMdEyeOff size={24} /> :
                                <IoMdEye size={24} />
                            }
                        </div>
                    </div>
                    { errors.password && (<p className="text-xs text-red-600">Password name is required</p>)}
                </div>

                <Button 
                    variant="contained" 
                    fullWidth
                    className="md:w-[25rem]"
                    type="submit"
                    >Sign In</Button>
            </form>
        </div>
    )
}

export default LoginForm;