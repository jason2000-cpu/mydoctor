import { Link } from "react-router-dom";
import SignupForm from "../components/forms/SingupForm";

function SignupPage() {
    return (
        <div className='space-y-4'>
            <div className='flex flex-col items-center space-y-4 mt-4'>
                <div className='flex flex-col items-center'>
                    <img src='/assets/icons/Medinova.png'  className='size-20' alt='MY DOCTOR' />
                    {/* <span className='text-2xl font-bold tracking-[9px]' >MY DOCTOR</span>
                    <span  className='tracking-widest font-light'>~ A LEGACY OF CARE</span> */}
                </div>
                <div>
                    <span className='text-lg '>Signup</span>
                </div>
            </div>
            <SignupForm />
            <div className=' flex justify-center items-center space-y-4 flex-col mt-10 '>
                <div>
                    <span className='font-semibold text-md'>OR</span>
                </div>
                <div className='flex space-x-10'>
                    <img className='size-8'  src='/assets/images/google-logo.png' alt='GOOGLE' />
                    <img className='size-8'  src='/assets/images/facebook-logo.png' alt='FACEBOOK' />
                </div>
            </div>

            <div className='flex justify-center mt-10 space-x-2'>
                <span className='text-[#858585] font-sans'>Already have an Account ?</span>
                <Link to={"/login"} className='text-[#0B8FAC] font-semibold'>Login</Link>
            </div>
        </div>
    )
}

export default SignupPage;