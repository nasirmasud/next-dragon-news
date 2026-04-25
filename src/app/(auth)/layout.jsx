import Navbar from '../components/Navbar'

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default AuthLayout
