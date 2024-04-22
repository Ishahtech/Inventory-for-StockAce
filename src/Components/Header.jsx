

function Header() {
  return (
    <>
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

        <div className="admins-container"> 
        <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
    <div style={{width: 24, height: 24, position: 'relative'}}>
        <div style={{width: 21.86, height: 22.29, left: 0.86, top: 0.86, position: 'absolute'}}>
            <div style={{width: 8.57, height: 8.57, left: 13.29, top: 0, position: 'absolute', background: '#F3012D'}}></div>
            <div style={{width: 18.86, height: 15.44, left: 0, top: 2.57, position: 'absolute', border: '1px black solid'}}></div>
            <div style={{width: 3.43, height: 0, left: 7.71, top: 22.29, position: 'absolute', border: '1px black solid'}}></div>
        </div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
        <div style={{width: 46, height: 46, position: 'relative'}}>
            <div style={{width: 46, height: 46, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
            <img style={{width: 77.86, height: 51.87, left: -12, top: 0, position: 'absolute'}} src="https://via.placeholder.com/78x52" />
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 14, display: 'inline-flex'}}>
                <div style={{color: '#2A2A2C', fontSize: 23.48, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Denim Pro</div>
                <div style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 12, height: 6, left: 6, top: 9, position: 'absolute', border: '2px #9C9C9C solid'}}></div>
                </div>
            </div>
            <div style={{color: '#9C9C9C', fontSize: 16, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Admin</div>
        </div>
    </div>
</div>
        </div>

    </>
    
  )
}

export default Header
