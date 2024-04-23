import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <>
        <div className="sidebar-ctr" >
    <div style={{width: 186, justifyContent: 'flex-end', alignItems: 'flex-end', gap: 6, display: 'inline-flex'}}>
        <div style={{width: 47.40, height: 42.99, position: 'relative'}}>
            <img style={{}} src="src/Asset/icons/stockace.svg" />
        </div>
        <div style={{justifyContent: 'flex-end', alignItems: 'flex-start', gap: 5.85, display: 'flex'}}>
            <div style={{color: '#2A2A2C', fontSize: 33.11, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>StockAce</div>
        </div>
    </div>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 219, display: 'flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
            <div style={{width: 252, height: 53, paddingTop: 8, paddingBottom: 8, paddingLeft: 48, paddingRight: 36, background: '#E1E4FF', justifyContent: 'flex-start', alignItems: 'center', gap: 34, display: 'inline-flex'}}>
                <div style={{height: 45, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{width: 40, padding: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 8, height: 8, left: 2, top: 2, position: 'absolute', border: '1.50px #0315BD solid'}}></div>
                                <div style={{width: 8, height: 8, left: 14, top: 2, position: 'absolute', border: '1.50px #0315BD solid'}}></div>
                                <div style={{width: 8, height: 8, left: 14, top: 14, position: 'absolute', border: '1.50px #0315BD solid'}}></div>
                                <div style={{width: 8, height: 8, left: 2, top: 14, position: 'absolute', border: '1.50px #0315BD solid'}}></div>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', opacity: 0}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 195, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 200, height: 45, padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{color: '#0315BD', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>
                            <Link to="/overview">
                            Overview
                            </Link> 
                                
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{width: 3, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div style={{width: 3, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{width: 3, height: 28, background: '#0315BD', borderRadius: 8}}></div>
                    </div>
                </div>
            </div>
            <div style={{width: 320, height: 53, paddingTop: 8, paddingBottom: 8, paddingLeft: 48, paddingRight: 42, justifyContent: 'flex-start', alignItems: 'center', gap: 29, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{width: 40, padding: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 22.29, height: 22.29, left: 0.86, top: 0.86, position: 'absolute'}}>
                                <div style={{width: 22.29, height: 17.14, left: 0, top: 5.14, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                                <div style={{width: 10.29, height: 5.14, left: 6, top: 0, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                            </div>
                            <div style={{width: 12, height: 12, left: 12, top: 0, position: 'absolute'}}>
                                <div style={{width: 11.14, height: 11.14, left: 0.43, top: 0.43, position: 'absolute'}}>
                                    <div style={{width: 11.14, height: 11.14, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '0.54px black solid'}}></div>
                                    <div style={{width: 0, height: 5.14, left: 5.57, top: 3, position: 'absolute', border: '0.54px black solid'}}></div>
                                    <div style={{width: 5.14, height: 0, left: 3, top: 5.57, position: 'absolute', border: '0.54px black solid'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 200, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 200, height: 45, padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{color: '#505153', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>New  Product</div>
                        </div>
                    </div>
                </div>
                <div style={{width: 3, paddingTop: 10, paddingBottom: 10}} />
            </div>
            <div style={{width: 320, height: 53, paddingTop: 8, paddingBottom: 8, paddingLeft: 48, paddingRight: 42, justifyContent: 'flex-start', alignItems: 'center', gap: 29, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{width: 40, padding: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 22.29, height: 22.29, left: 0.86, top: 0.86, position: 'absolute'}}>
                                <div style={{width: 22.29, height: 17.14, left: 0, top: 5.14, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                                <div style={{width: 10.29, height: 5.14, left: 6, top: 0, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 200, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 200, height: 45, padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{color: '#505153', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Products</div>
                        </div>
                    </div>
                </div>
                <div style={{width: 3, paddingTop: 10, paddingBottom: 10}} />
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 110, display: 'flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                <div style={{width: 320, height: 53, paddingTop: 8, paddingBottom: 8, paddingLeft: 48, paddingRight: 42, justifyContent: 'flex-start', alignItems: 'center', gap: 29, display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{width: 40, padding: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 22.29, height: 22.29, left: 0.86, top: 0.86, position: 'absolute'}}>
                                    <div style={{width: 13.71, height: 11.14, left: 4.29, top: 0, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                                    <div style={{width: 4.29, height: 6.86, left: 0, top: 8.57, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                                    <div style={{width: 4.29, height: 6.86, left: 18, top: 8.57, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                                    <div style={{width: 3.43, height: 7.29, left: 14.57, top: 12.86, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                                    <div style={{width: 6.86, height: 4.29, left: 7.71, top: 18, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: 200, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 200, height: 45, padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                                <div style={{color: '#505153', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Help Centre</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 3, paddingTop: 10, paddingBottom: 10}} />
                </div>
                <div style={{width: 320, height: 53, paddingTop: 8, paddingBottom: 8, paddingLeft: 48, paddingRight: 42, justifyContent: 'flex-start', alignItems: 'center', gap: 29, display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{width: 40, padding: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 20.46, height: 22.29, left: 1.77, top: 0.86, position: 'absolute', border: '1.50px #2A2A2C solid'}}></div>
                            </div>
                        </div>
                        <div style={{width: 200, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 200, height: 45, padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                                <div style={{color: '#505153', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Settings</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 3, paddingTop: 10, paddingBottom: 10}} />
                </div>
            </div>
            <div style={{width: 320, height: 53, paddingTop: 8, paddingBottom: 8, paddingLeft: 48, paddingRight: 42, justifyContent: 'flex-start', alignItems: 'center', gap: 29, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{width: 44, paddingLeft: 2, paddingRight: 2, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{padding: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 22.29, height: 22.29, left: 0.86, top: 0.86, position: 'absolute'}}>
                                    <div style={{width: 15.43, height: 22.29, left: 0, top: 0, position: 'absolute', border: '1.50px #FF0101 solid'}}></div>
                                    <div style={{width: 13.71, height: 0, left: 8.57, top: 11.14, position: 'absolute', border: '1.50px #FF0101 solid'}}></div>
                                    <div style={{width: 3.43, height: 6.86, left: 8.57, top: 7.71, position: 'absolute', border: '1.50px #FF0101 solid'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 200, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 200, height: 45, padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{color: '#505153', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>
                            <Link to="/signup">
                                Log out
                            </Link> 
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: 3, paddingTop: 10, paddingBottom: 10}} />
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Sidebar
