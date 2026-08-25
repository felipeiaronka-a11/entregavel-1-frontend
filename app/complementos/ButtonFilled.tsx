export default function ButtonFilled(props) {
  return <button style={{
    // backgroundColor: 'white',
    backgroundColor: 'blue',
    borderRadius: '10px',
    color:'white',
    width:'90%',
    height:'50px',
    padding:'10px'
  }}>{props.children}</button>
}