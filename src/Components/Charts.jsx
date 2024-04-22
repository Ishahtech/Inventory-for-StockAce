

// function Charts() {
//   return (
//     <>
//      <div className="bar-chart">
// <div style={{width: '100%', height: '100%', position: 'relative', background: 'white', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, overflow: 'hidden'}}>
//     <div style={{left: 23, top: 16, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 117, display: 'inline-flex'}}>
//         <div style={{color: 'black', fontSize: 20, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Sales Overview</div>
//         <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex'}}>
//             <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
//                 <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
//                     <div style={{width: 8, height: 8, background: '#0315BD', borderRadius: 9999}} />
//                 </div>
//                 <div style={{paddingTop: 8, paddingBottom: 8, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
//                     <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Online</div>
//                 </div>
//             </div>
//             <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
//                 <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
//                     <div style={{width: 8, height: 8, background: '#BDAB03', borderRadius: 9999}} />
//                 </div>
//                 <div style={{paddingTop: 8, paddingBottom: 8, justifyContent: 'center', alignItems: 'center', gap: 90, display: 'flex'}}>
//                     <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Offline</div>
//                 </div>
//             </div>
//             <div style={{width: 134, height: 45, borderRadius: 16, border: '0.75px #828282 solid', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
//                 <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
//                     <div style={{color: '#2A2A2C', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Monthly</div>
//                 </div>
//                 <div style={{height: 36, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
//                     <div style={{width: 20, height: 20, position: 'relative'}}>
//                         <div style={{width: 10, height: 5, left: 5, top: 7.50, position: 'absolute', border: '2px #2A2A2C solid'}}></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div style={{width: 584, height: 313, left: 24, top: 72, position: 'absolute'}}>
//         <div style={{width: 581, height: 313, left: 0, top: 0, position: 'absolute'}}>
//             <div style={{left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 32, display: 'inline-flex'}}>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>300k</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>250k</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>200k</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>150k</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>100k</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>50k</div>
//             </div>
//             <div style={{left: 60, top: 297, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 72, display: 'inline-flex'}}>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Jan</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Feb</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>Mar</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>April</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>May</div>
//                 <div style={{color: '#505153', fontSize: 14, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word'}}>June</div>
//             </div>
//             <div style={{width: 556.50, height: 287.50, left: 38, top: 0, position: 'absolute', border: '1px black solid'}}></div>
//         </div>
//         <div style={{width: 529, height: 242.94, left: 55, top: 8, position: 'absolute'}}>
//             <div style={{width: 526, height: 0, left: 0, top: 241, position: 'absolute', border: '1px #9C9C9C dotted'}}></div>
//             <div style={{width: 526, height: 0, left: 3, top: 192, position: 'absolute', border: '1px #9C9C9C dotted'}}></div>
//             <div style={{width: 526, height: 0, left: 1, top: 144, position: 'absolute', border: '1px #9C9C9C dotted'}}></div>
//             <div style={{width: 526, height: 0, left: 1, top: 95, position: 'absolute', border: '1px #9C9C9C dotted'}}></div>
//             <div style={{width: 526, height: 0, left: 0, top: 47, position: 'absolute', border: '1px #9C9C9C dotted'}}></div>
//             <div style={{width: 526, height: 0, left: 0, top: 0, position: 'absolute', border: '1px #9C9C9C dotted'}}></div>
//         </div>
//         <div style={{width: 530.50, height: 227.77, left: 53, top: 55, position: 'absolute'}}>
//             <div style={{left: 0, top: 71.64, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
//                 <div style={{width: 530, height: 156.13, background: 'linear-gradient(0deg, rgba(255, 252, 225, 0) 0%, #FCEA40 100%)'}}></div>
//                 <div style={{width: 530, height: 120.63, left: 0, top: 0, position: 'absolute', border: '1.50px #BDAB03 solid'}}></div>
//             </div>
//             <div style={{left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
//                 <div style={{width: 530.50, height: 208.77, background: 'linear-gradient(180deg, #4053FC 0%, rgba(225, 228, 255, 0) 100%)'}}></div>
//                 <div style={{width: 530.50, height: 142.74, left: 0, top: 0, position: 'absolute', border: '1.50px #0315BD solid'}}></div>
//             </div>
//         </div>
//     </div>
// </div>

// </div> 
//     </>
//   )
// }

// export default Charts
