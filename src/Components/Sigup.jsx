import { Link } from "react-router-dom"
function Sigup() {
  return (
    <>
     {/* <h2>Signup</h2>  */}
     <div className="signup-ctr">
        <div >
        <div className="overlay"></div>
        <div className="avatar-left"style={{ flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
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

        <div className="signup-right" >
        <div style={{width: '100%', height: '100%', paddingLeft: 32, paddingRight: 32, paddingTop: 24, paddingBottom: 24, borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 56, display: 'inline-flex'}}>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
            <div style={{width: 186, justifyContent: 'flex-end', alignItems: 'flex-end', gap: 6, display: 'inline-flex'}}>
                <div style={{width: 47.40, height: 42.99, position: 'relative'}}>
                    <img style={{ position: 'absolute'}} src="src/Asset/icons/stockace.svg" />
                </div>
                <div style={{justifyContent: 'flex-end', alignItems: 'flex-start', gap: 5.85, display: 'flex'}}>
                    <div style={{color: '#2A2A2C', fontSize: 33.11, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>StockAce</div>
                </div>
            </div>
            <div style={{padding: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{color: 'black', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Create an account</div>
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex'}}>
                <div style={{width: 553, height: 45, paddingTop: 8, paddingBottom: 8, borderRadius: 8, border: '0.75px #909BFE solid', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                    <div style={{color: 'black', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Create account with Google</div>
                    <div style={{width: 32, height: 32, position: 'relative'}}>
                    <img style={{ position: 'absolute'}} src="src/Asset/icons/google.svg" />
                    </div>
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 11, display: 'inline-flex'}}>
                    <div style={{padding: 5.63, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.63, display: 'inline-flex'}}>
                        <div style={{width: 157.63, height: 0, border: '0.56px black solid'}}></div>
                    </div>
                    <div style={{padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Or</div>
                    </div>
                    <div style={{padding: 5.63, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.63, display: 'inline-flex'}}>
                        <div style={{width: 157.63, height: 0, border: '0.56px black solid'}}></div>
                    </div>
                </div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 33, display: 'flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                        <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Email</div>
                        <div style={{width: 553, height: 45, paddingTop: 4, paddingBottom: 4, borderRadius: 4, border: '0.50px #828282 solid', justifyContent: 'center', alignItems: 'center', gap: 154, display: 'inline-flex'}}>
                            <div style={{height: 35, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                                <div style={{color: '#9C9C9C', fontSize: 16, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>xyz@email.com</div>
                            </div>
                            <div style={{width: 40, paddingLeft: 14.22, paddingRight: 14.22, paddingTop: 7.11, paddingBottom: 7.11, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 11.56, height: 11.56, position: 'relative'}}>
                                <img style={{ position: 'absolute'}} src="src/Asset/icons/delete.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                        <input style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}} />
                        <div style={{width: 553, height: 45, paddingTop: 4, paddingBottom: 4, borderRadius: 4, border: '0.50px #828282 solid', justifyContent: 'center', alignItems: 'center', gap: 154, display: 'inline-flex'}}>
                        
                                <input  style={{height: 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}} type="text" />
                            
                            <div style={{width: 39, paddingLeft: 13.87, paddingRight: 13.87, paddingTop: 6.93, paddingBottom: 6.93, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 11.27, height: 11.27, position: 'relative'}}>
                                <img style={{ position: 'absolute'}} src="src/Asset/icons/delete.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                        <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Password</div>
                        <div style={{width: 553, height: 45, paddingTop: 4, paddingBottom: 4, borderRadius: 4, border: '0.50px #828282 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 154, display: 'inline-flex'}}>
                            <div style={{height: 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                                <div style={{color: '#9C9C9C', fontSize: 16, fontFamily: 'Lato', fontWeight: '600', lineHeight: 28.80, wordWrap: 'break-word'}}>At least 8 Characters</div>
                            </div>
                            <div style={{width: 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 13, height: 13, paddingLeft: 0.48, paddingRight: 0.48, paddingTop: 2.32, paddingBottom: 2.32, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 12.05, height: 8.36, position: 'relative'}}>
                                    <img style={{ position: 'absolute'}} src="src/Asset/icons/delete.svg" /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
        <div style={{width: 530, height: 45, paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4, background: '#0315BD', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Create an Account</div>
        </div>
        <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div style={{color: 'black', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Already have an account?</div>
            <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div>
            <span style={{ color: 'black', fontSize: 20, fontFamily: 'Karla', fontWeight: 500, wordWrap: 'break-word' }}> </span>
            <span style={{ color: '#0315BD', fontSize: 20, fontFamily: 'Karla', fontWeight: 500, wordWrap: 'break-word' }}>
            <Link to="/signin">
            Log in
            </Link> 
                </span>
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

export default Sigup
