import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("Copied to clipboard...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    const newEntry = { ...form, id: uuidv4() };
    const updatedArray = [...passwordArray, newEntry];
    setpasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    setform({ site: "", username: "", password: "" });
    toast("Password Saved...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password");
    if (c) {
      const updatedArray = passwordArray.filter((item) => item.id !== id);
      setpasswordArray(updatedArray);
      localStorage.setItem("passwords", JSON.stringify(updatedArray));
      toast("Password deleted", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const editPassword = (id) => {
      setform(passwordArray.find((i) => i.id === id));
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      <div className="mycontainer px-4 md:px-8 lg:px-16 py-12 w-full max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">Lockr/</span>
          <span className="text-green-500">&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">
          Your own Password Manager
        </p>

        <div className="flex flex-col p-4 gap-8 items-center w-full">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website's URL"
            className="bg-white rounded-full border border-green-500 w-full py-1 px-4"
            type="text"
            name="site"
            id="site"
          />

          <div className="flex flex-col md:flex-row w-full gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your Username"
              className="bg-white rounded-full border border-green-500 w-full md:w-1/2 py-1 px-4"
              type="text"
              name="username"
              id="username"
            />

            <div className="relative w-full md:w-1/2">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="bg-white rounded-full border border-green-500 w-full py-1 px-4"
                type="password"
                name="password"
                id="password"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="px-1"
                  width={26}
                  src="/icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center gap-2 items-center bg-green-400 hover:bg-green-500 rounded-full px-8 py-2 w-fit cursor-pointer border border-green-900"
          >
            <i className="fa fa-plus"></i>
            Save Password
          </button>
        </div>

        <div className="passwords w-full mt-8">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length !== 0 && (
            <div className="overflow-x-auto w-full">
              <table className="table-auto w-full rounded-md overflow-hidden min-w-[600px]">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-2 border border-white text-center w-32">
                          <a target="_blank" href={item.site}>
                            {item.site}
                          </a>
                          <i
                            className="fa-classic fa-solid fa-copy fa-fw copy-btn cursor-pointer hover:scale-105 hover:text-slate-700 scale-100 transition-transform ml-2"
                            onClick={() => copyText(item.site)}
                          ></i>
                        </td>
                        <td className="py-2 border border-white text-center w-32">
                          {item.username}
                          <i
                            className="fa-classic fa-solid fa-copy fa-fw copy-btn cursor-pointer hover:scale-105 hover:text-slate-700 scale-100 transition-transform ml-2"
                            onClick={() => copyText(item.username)}
                          ></i>
                        </td>
                        <td className="py-2 border border-white text-center w-32">
                          {item.password}
                          <i
                            className="fa-classic fa-solid fa-copy fa-fw copy-btn cursor-pointer hover:scale-105 hover:text-slate-700 scale-100 transition-transform ml-2"
                            onClick={() => copyText(item.password)}
                          ></i>
                        </td>
                        <td className="py-2 border border-white text-center w-32">
                          <span onClick={() => editPassword(item.id)}>
                            <i className="fa-solid fa-pencil cursor-pointer hover:scale-105 hover:text-green-700 scale-100 transition-transform px-1"></i>
                          </span>
                          <span onClick={() => deletePassword(item.id)}>
                            <i className="fa-solid fa-trash-can cursor-pointer hover:scale-102 hover:text-red-700 scale-100 transition-transform px-1"></i>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
