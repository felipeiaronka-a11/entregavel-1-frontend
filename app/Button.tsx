export default function Button(props) {
  return <button style={{
    // backgroundColor: 'white',
    border: '2px solid blue',
    borderRadius: '10px',
    color:'blue',
    width:'90%',
    height:'50px',
    padding:'10px'
  }}>{props.children}</button>
}