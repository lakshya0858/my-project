import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login = () => {

  const [currentState, setCurrentState] = useState("Login")
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const onSubmitHandler = (event) => {

    event.preventDefault()

    // ✅ Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || []

    if (currentState === "Sign Up") {

      // 🔍 Check if user already exists
      const userExists = users.find(user => user.email === email)

      if (userExists) {
        toast.error("User already exists!")
        return
      }

      // ✅ Add new user
      const newUser = { name, email, password }
      users.push(newUser)

      localStorage.setItem("users", JSON.stringify(users))

      toast.success("Account created successfully!")
      setCurrentState("Login")

    } else {

      // 🔍 Find user
      const user = users.find(
        user => user.email === email && user.password === password
      )

      if (user) {
        localStorage.setItem("token", "dummy_token")
        localStorage.setItem("currentUser", JSON.stringify(user))
        toast.success("Login successful!")
        navigate("/")
      } else {
        toast.error("Invalid email or password")
      }

    }

  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      navigate("/")
    }
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">

      <div className="w-full max-w-md p-8 bg-white shadow rounded-xl">

        <h2 className="text-2xl font-bold text-center mb-4">
          {currentState}
        </h2>

        <form onSubmit={onSubmitHandler} className="space-y-4">

          {currentState !== "Login" && (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border rounded"
            />
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <button className="w-full py-2 text-white bg-black rounded">
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-sm text-center cursor-pointer">
            {currentState === "Login" ? (
              <span onClick={() => setCurrentState("Sign Up")}>
                Create account
              </span>
            ) : (
              <span onClick={() => setCurrentState("Login")}>
                Login here
              </span>
            )}
          </p>

        </form>

      </div>

    </div>
  )
}

export default Login