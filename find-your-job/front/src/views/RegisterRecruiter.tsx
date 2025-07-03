import React from 'react'
import { IRegister } from 'src/interfaces/IRegister'

const RegisterRecruiter = () => {
    const [formData, setFormData] = React.useState<IRegister> ({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        state: "",
        city: "",
        phone: "",
        about: "",
        company: "",
        category: "",
        termsAccepted: false,
        role: "recruiter", 
        
    })
  return (
    <form>
        <div>RegisterRecruiter</div>


    </form>
  )
}

export default RegisterRecruiter