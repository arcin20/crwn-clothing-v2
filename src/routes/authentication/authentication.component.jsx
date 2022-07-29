

import { AuthenticationContainer } from './authentication.styles'
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';




const Authentication = () => {
   

    return (
        <AuthenticationContainer>
           
            <SignInForm ></SignInForm>
            <SignUpForm></SignUpForm>
        </AuthenticationContainer>
    )
}

export default Authentication;