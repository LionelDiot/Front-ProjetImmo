import React from "react";
import { useSetAtom, useAtomValue } from "jotai";
import { currentUserAtom } from "../Atoms/currentuser";
import { UserIdAtom } from "../Atoms/userid";
import { loggedInAtom } from "../Atoms/loggedin";

export default function Devise() {
  const loggedIn = useAtomValue(loggedInAtom);
  const user = useAtomValue(currentUserAtom);
  const setUser = useSetAtom(currentUserAtom);
  const setUserId = useSetAtom(UserIdAtom);

  const handleGetNew = () => {
    fetch("https://pawsdetente-ca7a0b6081c4.herokuapp.com/", {
      method: "get",
      headers: {
        // Authorization: `${user}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          ` all my data pas trié ? : ${JSON.stringify(responseData)}`
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // showToastSuccess()
  };

  const handlePost = async () => {
    
    const formEmail = "123@yopmail.com"
    const data = {
      user: {
        email: formEmail,
      },
    };

    try {
      const response = await fetch("https://pawsdetente-ca7a0b6081c4.herokuapp.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(
          ` all my data pas trié ? : ${JSON.stringify(responseData)}`
        );
      } else {
        console.log("Erreur");
      }
    } catch (error) {
      console.log("Erreur");
    }
  };

  const handleGetReset = () => {
    fetch("https://localhost:3000/users/password/edit?reset_password_token=ZeMgex16VFcdsa1xLmDZ", {
      method: "get",
      headers: {
        // Authorization: `${user}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          ` all my data pas trié ? : ${JSON.stringify(responseData)}`
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // showToastSuccess()
  };

  const handlePut = () => {
    const formEmail = "francoisdiot1957@gmail.com"
    const data = {
      user: {
        password: "12345678",
        password_confirmation: "12345678",
        reset_password_token: "ZeMgex16VFcdsa1xLmDZ",
      },
    };

    fetch("https://pawsdetente-ca7a0b6081c4.herokuapp.com/users/password", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          ` all my data pas trié ? : ${JSON.stringify(responseData)}`
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // showToastSuccess()
  };
  return (
    <>
      <h1>Page de test devise_features </h1>
      <button onClick={handleGetNew}># GET /resource/password/new</button>
      <button onClick={handlePost}># POST /resource/password</button>
      <button onClick={handleGetReset}># GET /resource/password/edit?reset_password_token=abcdef</button>
      <button onClick={handlePut}># PUT /resource/password</button>
    </>
  );
}