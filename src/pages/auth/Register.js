import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function Register({ history }) {
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [history, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_APP,
      handleCodeInApp: true,
    };

    toast.success(
      `email dikirim ke ${email}.
      klik link untuk menyelesaikan registrasi `
    );

    await auth.sendSignInLinkToEmail(email, config);

    setEmail("");

    window.localStorage.setItem("emailForRegistration", email);
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button type="submit" className="btn btn-raised">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
