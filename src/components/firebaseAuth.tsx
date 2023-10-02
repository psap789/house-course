import { FunctionComponent, useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseAuthConfig = {
    signInFlow: "popup",
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
        },
    ],
    signInSuccessUrl: "/",

    signInFailure: (error: firebaseui.auth.AuthUIError) => {
        // Handle the error here.
        console.error("Error during sign-in:", error);
        // If you wish to prevent the error from being shown in the UI:
        // return true;
        // Otherwise, return a Promise:
        return Promise.resolve();

    }

};


const FirebaseAuth: FunctionComponent = () => {
    const [renderAuth, setRenderAuth] = useState(false);

    useEffect(() => {
        setRenderAuth(true);

    }, []);


    return (
        <div className="mt-16">
            {renderAuth ? (
                <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={firebase.auth()} />
            ) : null}
        </div>
    );
};

export default FirebaseAuth;

