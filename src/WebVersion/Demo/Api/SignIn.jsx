import { LoginEmail } from './Email';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
}
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signInMethod = async (MethodName, name, company, email) => {
    var provider;
    var companyName = ""
    switch(MethodName){
        case "Google":
            provider = new GoogleAuthProvider();
            break;
        case "Github":
            provider = new GithubAuthProvider();
            break;
        case "Facebook":
            provider = new FacebookAuthProvider();
            break;
        case "Email":
            companyName = company
            break
        default:
            throw new Error(`Unsupported provider: ${MethodName}`);
    }

    if (MethodName !== "Email"){
        try {
            const result = await signInWithPopup(auth, provider);
            await LoginEmail(result.user.email, result.user.displayName, companyName, MethodName)
            console.log(`${MethodName} login succeed`);
            return ture;
        } catch (error) {
            console.error(`${MethodName} login failed:`, error);
            throw error;
        }
    }else{
        try{
            const result = await LoginEmail(email, name, companyName, MethodName)
            if (result){
                console.log(`${MethodName} login succeed`);
                return ture;
            }
        }catch(error){
            console.error(`${MethodName} login failed:`, error);
            throw error;
        }
    }
};

