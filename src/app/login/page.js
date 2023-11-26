export default function Page() {
    return (
        <section className="mt-0 loginpage">
            <div className="container">
                <div className="user signinBx">
                    <div className="imgBx"><img src="https://imgur.com/qA0t2vE.jpg"
                                                alt="Cypress Body Oil -CBO from brand Mender and other products from the CBD line flat displayed on a white background with rocks and natural leaves"/>
                    </div>
                    <div className="formBx">
                        <form className="signin" action="" onSubmit="return false;">
                            <h2>Sign In</h2>
                            <input type="text" name="" className="name" placeholder="Username"/>
                            <input type="password" name="" className="password" placeholder="Password"/>
                            <input type="submit" name="" value="Login"/>
                            <p className="createacc">
                                Don't have an account ?
                                <a href="#" onClick="toggleForm();">Sign Up.</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="user signupBx">
                    <div className="formBx">
                        <form className="signup" action="" onSubmit="return false;">
                            <h2>Create an account</h2>
                            <input type="text" className="newname" name="" placeholder="Username"/>
                            <input type="email" className="email" name="" placeholder="Email Address"/>
                            <input type="password" placeholder="Password" id="newpassword" required/>
                                <input type="password" placeholder="Confirm Password" id="confirm_password" required/>
                                    <input type="submit" name="" value="Sign Up"/>
                                    <p className="createacc">
                                        Already have an account ?
                                        <a href="#" onClick="toggleForm();">Sign in.</a>
                                    </p>
                        </form>
                    </div>
                    <div className="imgBx"><img src="https://imgur.com/XLEvIOQ.jpg"
                                                alt="A black woman touching her face with two friends while smiling confidently disclosing beautiful white teeth"/>
                    </div>
                </div>
            </div>
        </section>
    )
}