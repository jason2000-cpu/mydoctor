import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";


function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-full">
                <div className="w-90">
                    <TextField
                        fullWidth
                        label="First Name"
                        name="Fname"
                        margin="dense"
                        {...register("Fname", {required: true })}
                    />
                    { errors.Fname && (<p className="text-xs text-red-600">First name is required</p>)}
                </div>
                <div className="w-90">
                    <TextField
                        fullWidth
                        label="Last Name"
                        name="Sname"
                        margin="dense"
                        {...register("Sname", {required: true})}
                    />
                    { errors.Sname && (<p className="text-xs text-red-600">Last name is required</p>)}
                </div>

                <Button 
                    variant="contained" 
                    fullWidth type="submit"
                    >Submit</Button>
            </form>
        </div>
    )
}

export default LoginForm;