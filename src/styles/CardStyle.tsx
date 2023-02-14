import * as Colors from './ColorsConst.tsx'

export const cardStyle = {
    color: Colors.ColorSchema.textFont,
    border: '1px solid black',
    backgroundColor: Colors.ColorSchema.objectFont,
    // heigh: '40px',
    width: 'calc((100%-40px)/3)',
    // width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box'

}

export const hStyleCard = {
    textAlign: 'center'
}
