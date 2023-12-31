import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailAndPassword, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = ( ) => {
    return async( dispatch ) => {

        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch(logout( result.errorMessage ))

        dispatch(login( result ));
        
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const { ok, errorMessage, uid, photURL } = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch( logout({ errorMessage }));

        dispatch( login({ uid, displayName, email, photURL }));
    }
}

export const startLoginWithEmailAndPassword = ({ email, password}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const { ok, errorMessage, displayName, uid, photURL } = await loginWithEmailAndPassword({ email, password });
        console.log(errorMessage);
        if (!ok) return dispatch( logout({}));
        dispatch( login({ uid, displayName, email, photURL }) )
    }

}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( logout({ errorMessage: null }) );
    }
}