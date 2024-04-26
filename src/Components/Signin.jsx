

function Signin() {
  return (
    <>
      <div className="signin-ctr">
        <div>
        {/* <div className="overlay"></div> */}
        <div className="avatar-right">
        <div style={{flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{width: 614, padding: 8, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Track your Sales Seamlessly</div>
        </div>
        <div style={{padding: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{width: 578, color: 'white', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>This feature not only records every transaction but also provides insight into your sales pattern.</div>
            </div>
        </div>
    </div>
</div>
        </div>
        </div>

        <div className="signup-right">
        <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
    <div style={{height: 172, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
        <div style={{padding: 10, background: 'white', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{color: 'black', fontSize: 40, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>Welcome Back</div>
            </div>
            <div style={{width: 48, height: 48, position: 'relative'}}>
                <div style={{width: 44, height: 44, left: 2, top: 2, position: 'absolute', background: 'black'}}></div>
            </div>
        </div>
        <div style={{width: 565, padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: '#505153', fontSize: 24, fontFamily: 'Karla', fontWeight: '400', lineHeight: 30.22, wordWrap: 'break-word'}}>Today is a new day. It’s your day. You shape it.<br/>      Log in to start managing your sales</div>
        </div>
    </div>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 56, display: 'flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Email</div>
                    <div style={{width: 553, height: 55, paddingTop: 4, paddingBottom: 4, borderRadius: 4, border: '0.50px #828282 solid', justifyContent: 'center', alignItems: 'center', gap: 154, display: 'inline-flex'}}>
                        <div style={{height: 35, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{color: '#BEBABA', fontSize: 16, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>xyz@email.com</div>
                        </div>
                        <div style={{width: 40, paddingLeft: 14.22, paddingRight: 14.22, paddingTop: 7.11, paddingBottom: 7.11, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 11.56, height: 11.56, position: 'relative'}}>
                                <div style={{width: 11.56, height: 11.56, left: 0, top: 0, position: 'absolute', border: '1px #505153 solid'}}></div>
                                <div style={{width: 11.56, height: 11.56, left: 0, top: 0, position: 'absolute', border: '1px #505153 solid'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: 8, display: 'flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                        <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Password</div>
                        <div style={{width: 553, height: 55, paddingTop: 4, paddingBottom: 4, borderRadius: 4, border: '0.50px #828282 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 154, display: 'inline-flex'}}>
                            <div style={{height: 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                                <div style={{color: '#BEBABA', fontSize: 16, fontFamily: 'Lato', fontWeight: '600', lineHeight: 28.80, wordWrap: 'break-word'}}>At least 8 Characters</div>
                            </div>
                            <div style={{width: 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 13, height: 13, paddingLeft: 0.48, paddingRight: 0.48, paddingTop: 2.32, paddingBottom: 2.32, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 12.05, height: 8.36, position: 'relative'}}>
                                        <div style={{width: 12.05, height: 8.36, left: 0, top: 0, position: 'absolute', border: '1px #505153 solid'}}></div>
                                        <div style={{width: 3.71, height: 3.71, left: 4.17, top: 2.32, position: 'absolute', border: '1px #505153 solid'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{color: '#0315BD', fontSize: 16, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Forgot Password?</div>
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 553, height: 55, paddingLeft: 32, paddingRight: 32, paddingTop: 8, paddingBottom: 8, background: '#0315BD', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Log In</div>
            </div>
            <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 8, paddingBottom: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div style={{color: 'black', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Don’t have an account?</div>
                <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    {/* <div><span style="color: 'black', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'"> </span><span style="color: '#0315BD', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'">Sign Up</span></div> */}
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
      </div>

     
    </>
  )
}

export default Signin
