import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { toast } from "react-toastify";

export default function RegisterComplete({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      toast.error("email and password is required");
      return;
    }

    if (password < 6) {
      toast.error("password must be at least 6 char");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if (result.user.emailVerified) {
        window.localStorage.removeItem("emailForRegistration");

        let user = auth.currentUser;
        await user.updatePassword(password);
        await user.getIdTokenResult();

        history.push("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control"
              value={email}
              disabled
            />
            <br />
            <input
              type="password"
              className="form-control"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <button type="submit" className="btn btn-raised">
              Register Complete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
