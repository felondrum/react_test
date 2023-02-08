import * as Colors from './ColorsConst.tsx'

export const navLinkCustomStyle = {
    borderRadius: '25px',
    background: Colors.ColorSchema.navBarFont,
    padding: '10px 22px',
    color: Colors.ColorSchema.textFont,
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
}


export const navBarCustomStyle = {
    display: 'flex',
    // alignItems: 'center',
    marginRight: '-24px',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '30%'
}