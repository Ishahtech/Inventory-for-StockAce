

function Home() {
  return (
    <>
      <main >
    <div className="heading-ctr">
        <div className="search-bar">
        <div style={{width: '100%', height: '75%', paddingTop: 1, paddingBottom: 1, paddingLeft: 4, background: '#FCFCFC', borderRadius: 24, border: '0.50px #828282 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{width: 42, paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div style={{width: 14, height: 14, position: 'relative'}}>
            <div style={{width: 13, height: 13, left: 0.50, top: 0.50, position: 'absolute'}}>
                <div style={{width: 11, height: 11, left: 0, top: 0, position: 'absolute', border: '1px #2A2A2C solid'}}></div>
                <div style={{width: 3.50, height: 3.50, left: 9.50, top: 9.50, position: 'absolute', border: '1px #2A2A2C solid'}}></div>
            </div>
        </div>
    </div>
    <div style={{height: 45, padding: 8, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
        <div style={{color: '#4F4F4F', fontSize: 16, fontFamily: 'Lato', fontWeight: '600', lineHeight: 28.80, wordWrap: 'break-word'}}>Search</div>
    </div>
</div>
        </div>

        
        <div className="user-profile">
      {/* Profile image container */}
      <div className="profile-image-container">
        <img src="src/Asset/admin.png" alt="admin image" className="profile-image" />
      </div>

      {/* User details container */}
      <div className="user-details">
        <div className="user-name">
          Denim Pro
        </div>
        <div className="user-role">
          Admin
        </div>
      </div>
    </div>
        </div>

<div className="sales-cards"> 
        <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 47, display: 'inline-flex'}}>
    <div style={{width: 184, height: 108, paddingTop: 8, paddingBottom: 8, paddingLeft: 8, paddingRight: 16, background: 'white', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{width: 166, height: 94, paddingLeft: 4, paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#909BFE', borderRadius: 9999}} />
                        <div style={{width: 17.14, height: 17.14, left: 3.43, top: 3.43, position: 'absolute', background: '#E1E4FF', boxShadow: '0px 0.6857143044471741px 2.7428572177886963px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                        <div style={{width: 13.71, height: 13.71, left: 5.49, top: 5.49, position: 'absolute'}}>
                            <div style={{width: 9.71, height: 11.43, left: 2, top: 1.14, position: 'absolute'}}>
                                <div style={{width: 9.71, height: 11.43, left: 0, top: 0, position: 'absolute', border: '1.03px #0315BD solid'}}></div>
                                <div style={{width: 4.57, height: 3.43, left: 2.57, top: 4, position: 'absolute', border: '1.03px #0315BD solid'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Total Sales</div>
                </div>
                <div style={{color: '#2A2A2C', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>₦152,564</div>
            </div>
            <div style={{width: 166, justifyContent: 'flex-start', alignItems: 'center', gap: 59, display: 'inline-flex'}}>
                <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>24 Sales</div>
                <div style={{height: 20, padding: 4, borderRadius: 8, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div style={{color: '#02B857', fontSize: 10, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>+ 2.54%</div>
                </div>
            </div>
        </div>
        <div style={{padding: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
            <div style={{width: 14, height: 14, position: 'relative'}}>
                <div style={{width: 13, height: 13, left: 0.50, top: 0.50, position: 'absolute'}}>
                    <div style={{width: 13, height: 13, left: 0, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 3, height: 0, left: 5, top: 9.50, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 1, height: 3.50, left: 5.50, top: 6, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 0.50, height: 0.50, left: 6.25, top: 3.25, position: 'absolute'}}>
                        <div style={{width: 0.25, height: 0.50, left: 0, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                        <div style={{width: 0.25, height: 0.50, left: 0.25, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 184, height: 108, paddingTop: 9, paddingBottom: 8, paddingLeft: 8, paddingRight: 8, background: 'white', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{width: 168, paddingLeft: 4, paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#FDF391', borderRadius: 9999}} />
                        <div style={{width: 17.14, height: 17.14, left: 3.43, top: 3.43, position: 'absolute', background: '#FFFCE1', boxShadow: '0px 0.6857143044471741px 2.7428572177886963px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                        <div style={{width: 12.34, height: 12.34, left: 6.17, top: 6.17, position: 'absolute'}}>
                            <div style={{width: 10.58, height: 11.46, left: 0.88, top: 0.44, position: 'absolute'}}>
                                <div style={{width: 10.58, height: 11.46, left: 0, top: 0, position: 'absolute', border: '1.03px #BDAB03 solid'}}></div>
                                <div style={{width: 2.55, height: 3.82, left: 4.02, top: 4.92, position: 'absolute', border: '1.03px #BDAB03 solid'}}></div>
                                <div style={{width: 0, height: 0.96, left: 5.29, top: 3.97, position: 'absolute', border: '1.03px #BDAB03 solid'}}></div>
                                <div style={{width: 0, height: 0.96, left: 5.29, top: 8.74, position: 'absolute', border: '1.03px #BDAB03 solid'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Total Profit</div>
                </div>
                <div style={{color: '#2A2A2C', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>₦102,510</div>
            </div>
            <div style={{height: 20, paddingTop: 4, paddingBottom: 4, borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                <div style={{color: '#02B857', fontSize: 10, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>+ 2.54%</div>
            </div>
        </div>
        <div style={{padding: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
            <div style={{width: 14, height: 14, position: 'relative'}}>
                <div style={{width: 13, height: 13, left: 0.50, top: 0.50, position: 'absolute'}}>
                    <div style={{width: 13, height: 13, left: 0, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 3, height: 0, left: 5, top: 9.50, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 1, height: 3.50, left: 5.50, top: 6, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 0.50, height: 0.50, left: 6.25, top: 3.25, position: 'absolute'}}>
                        <div style={{width: 0.25, height: 0.50, left: 0, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                        <div style={{width: 0.25, height: 0.50, left: 0.25, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 184, height: 108, paddingTop: 8, paddingBottom: 8, paddingLeft: 8, paddingRight: 8, background: 'white', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 46, display: 'flex'}}>
        <div style={{paddingLeft: 4, paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 26, height: 26, left: 0, top: 0, position: 'absolute', background: '#909BFE', borderRadius: 9999}} />
                    <div style={{width: 18.57, height: 18.57, left: 3.71, top: 3.71, position: 'absolute', background: '#E1E4FF', boxShadow: '0px 0.7428571581840515px 2.971428632736206px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                    <div style={{width: 13.37, height: 13.37, left: 6.69, top: 6.69, position: 'absolute'}}>
                        <div style={{width: 12.39, height: 12.42, left: 0.48, top: 0.48, position: 'absolute'}}>
                            <div style={{width: 0.96, height: 0.96, left: 9.50, top: 11.46, position: 'absolute', border: '1.11px #0315BD solid'}}></div>
                            <div style={{width: 0.96, height: 0.96, left: 3.29, top: 11.46, position: 'absolute', border: '1.11px #0315BD solid'}}></div>
                            <div style={{width: 12.39, height: 9.07, left: 0, top: 0, position: 'absolute', border: '1.11px #0315BD solid'}}></div>
                            <div style={{width: 3.36, height: 2.39, left: 5.65, top: 4.54, position: 'absolute', border: '1.11px #0315BD solid'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>In stock</div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 4, display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <div style={{color: '#2A2A2C', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>82</div>
                </div>
                <div style={{paddingTop: 3, paddingBottom: 3, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <div style={{color: '#505153', fontSize: 12, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Units</div>
                </div>
            </div>
        </div>
        <div style={{padding: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
            <div style={{width: 14, height: 14, position: 'relative'}}>
                <div style={{width: 13, height: 13, left: 0.50, top: 0.50, position: 'absolute'}}>
                    <div style={{width: 13, height: 13, left: 0, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 3, height: 0, left: 5, top: 9.50, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 1, height: 3.50, left: 5.50, top: 6, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 0.50, height: 0.50, left: 6.25, top: 3.25, position: 'absolute'}}>
                        <div style={{width: 0.25, height: 0.50, left: 0, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                        <div style={{width: 0.25, height: 0.50, left: 0.25, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 184, height: 108, paddingTop: 8, paddingBottom: 8, paddingLeft: 8, paddingRight: 8, background: 'white', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 19, display: 'flex'}}>
        <div style={{paddingLeft: 4, paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#FDF391', borderRadius: 9999}} />
                    <div style={{width: 17.14, height: 17.14, left: 3.43, top: 3.43, position: 'absolute', background: '#FFFCE1', boxShadow: '0px 0.6857143044471741px 2.7428572177886963px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                    <div style={{width: 16.46, height: 16.46, left: 4.11, top: 3.43, position: 'absolute'}}>
                        <div style={{width: 12.34, height: 12.18, left: 2.06, top: 2.05, position: 'absolute'}}>
                            <div style={{width: 4.80, height: 9.95, left: 4.80, top: -0, position: 'absolute', background: '#BDAB03'}}></div>
                            <div style={{width: 12.34, height: 9.09, left: 0, top: 3.09, position: 'absolute', background: '#BDAB03'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Out of stock</div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 4, display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <div style={{color: '#2A2A2C', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>24</div>
                </div>
                <div style={{paddingTop: 2, paddingBottom: 2, justifyContent: 'center', alignItems: 'flex-end', display: 'flex'}}>
                    <div style={{color: '#505153', fontSize: 12, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Units</div>
                </div>
            </div>
        </div>
        <div style={{padding: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
            <div style={{width: 14, height: 14, position: 'relative'}}>
                <div style={{width: 13, height: 13, left: 0.50, top: 0.50, position: 'absolute'}}>
                    <div style={{width: 13, height: 13, left: 0, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 3, height: 0, left: 5, top: 9.50, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 1, height: 3.50, left: 5.50, top: 6, position: 'absolute', border: '1px #828282 solid'}}></div>
                    <div style={{width: 0.50, height: 0.50, left: 6.25, top: 3.25, position: 'absolute'}}>
                        <div style={{width: 0.25, height: 0.50, left: 0, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                        <div style={{width: 0.25, height: 0.50, left: 0.25, top: 0, position: 'absolute', border: '1px #828282 solid'}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>   
      </main>

    
    </>
  )
}

export default Home
