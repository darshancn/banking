import AuthForm from '@/components/AuthForm'

const SignUp = async (data: { ssn: string; email: string; password: string; firstName?: string | undefined; lastName?: string | undefined; address1?: string | undefined; city?: string | undefined; state?: string | undefined; postalCode?: string | undefined; dateOfBirth?: string | undefined }) => {
  return (
    <section className='flex-center size-full max:sm:px-6'>
      <AuthForm type="sign-up"/>
    </section>
  )
}

export default SignUp