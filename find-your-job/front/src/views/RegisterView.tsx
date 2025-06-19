'use client';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { IRegister } from 'src/interfaces/IRegister';
import { fakeLogin } from 'src/helpers/authFunctions';
import { useRouter } from 'next/navigation';
import { validateRegister } from 'src/helpers/validateRegister';

const initialValues: IRegister = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'candidate',
  country: '',
  state: '',
  city: '',
  phone: '',
  about: '',
  termsAccepted: false,
};

const formFields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'example@mail.com' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
  { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
  {
    name: 'role',
    label: 'Role',
    type: 'select',
    options: [
      { value: 'candidate', label: 'Candidate' },
      { value: 'recruiter', label: 'Recruiter' }, // mantené este valor para que coincida con la lógica
    ],
  },
  { name: 'country', label: 'Country', type: 'text', placeholder: 'Country' },
  { name: 'state', label: 'State', type: 'text', placeholder: 'State' },
  { name: 'city', label: 'City', type: 'text', placeholder: 'City' },
  { name: 'phone', label: 'Phone', type: 'text', placeholder: '+54 9 11 1234 5678' },
  { name: 'about', label: 'About you', type: 'textarea', placeholder: 'Tell us about yourself (optional)', rows: 4 },
];

const RegisterView: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (values: IRegister) => {
    // Guarda el rol
    fakeLogin(values.role as 'candidate' | 'recruiter');

    // Guarda el usuario completo
    localStorage.setItem('registeredUser', JSON.stringify(values));

    // Mostrar en consola
    console.log('Registered user:', values);

    // Redirige al login
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#283618] to-[#4a5a32] px-4">
      <div className="w-full max-w-3xl bg-[#3a4a25] rounded-3xl shadow-2xl p-10 border border-[#5a703a]">
        <h1 className="text-4xl font-extrabold text-[#b8c67a] mb-8 text-center">Create your account</h1>

        <Formik initialValues={initialValues} validate={validateRegister} onSubmit={handleSubmit}>
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              {formFields.map(({ name, label, type, placeholder, options, rows }) => {
                const key = name as keyof IRegister;
                const showError = errors[key] && touched[key];

                return (
                  <div key={name}>
                    <label htmlFor={name} className="block text-[#b8c67a] font-semibold mb-1">
                      {label}
                    </label>

                    {type === 'select' ? (
                      <Field
                        as="select"
                        name={name}
                        className={`w-full p-3 rounded-md border bg-[#283618] text-[#d9e4c8] ${
                          showError ? 'border-red-600' : 'border-[#5a703a]'
                        } focus:outline-none focus:ring-2 focus:ring-[#9caf6f]`}
                      >
                        {options!.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </Field>
                    ) : type === 'textarea' ? (
                      <Field
                        as="textarea"
                        name={name}
                        placeholder={placeholder}
                        rows={rows}
                        className={`w-full p-3 rounded-md border bg-[#283618] text-[#d9e4c8] placeholder-[#a5b38a] resize-none ${
                          showError ? 'border-red-600' : 'border-[#5a703a]'
                        } focus:outline-none focus:ring-2 focus:ring-[#9caf6f]`}
                      />
                    ) : (
                      <Field
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        className={`w-full p-3 rounded-md border bg-[#283618] text-[#d9e4c8] placeholder-[#a5b38a] ${
                          showError ? 'border-red-600' : 'border-[#5a703a]'
                        } focus:outline-none focus:ring-2 focus:ring-[#9caf6f]`}
                      />
                    )}

                    {showError && <div className="text-red-600 mt-1 text-sm">{errors[key]}</div>}
                  </div>
                );
              })}

              <div className="flex items-center">
                <Field
                  type="checkbox"
                  name="termsAccepted"
                  id="termsAccepted"
                  className="h-5 w-5 text-[#9caf6f] focus:ring-[#9caf6f] border-gray-300 rounded"
                />
                <label htmlFor="termsAccepted" className="ml-2 block text-[#b8c67a] font-semibold">
                  I accept the terms and conditions
                </label>
              </div>
              {errors.termsAccepted && touched.termsAccepted && (
                <div className="text-red-600 mt-1 text-sm">{errors.termsAccepted}</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#6b7b3a] hover:bg-[#4a5a20] text-[#d9e4c8] font-bold py-3 rounded-xl transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterView;
