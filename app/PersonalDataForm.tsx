export default function PersonalDataForm (props) {
return <div>
    
        <div style={{
            display: 'flex',
            gap: '8px'
        }}>

            <div style={{
            width: '40%'
            }}>

            <input placeholder="NOME" style={{
                backgroundColor: 'white',
                border: '2px solid red',
                borderRadius: '5px',
                color: 'black',
                width: '100%',
                height: '50px'
            }}/>

            <p style={{
                fontSize: '10px',
                padding: '5px',
                color: 'red'
            }}>
                Error goes here
            </p>

            </div>

            <div style={{
            width: '60%'
            }}>

            <input placeholder="SOBRENOME" style={{
                backgroundColor: 'white',
                border: '2px solid red',
                borderRadius: '5px',
                color: 'black',
                width: '100%',
                height: '50px'
            }}/>

            <p style={{
                fontSize: '10px',
                padding: '5px',
                color: 'red'
            }}>
                Error goes here
            </p>

            </div>

        </div>

        <div style={{
            display: 'flex',
            gap: '8px'
        }}>

            <div style={{
            width: '60%'
            }}>

            <input placeholder="EMAIL" style={{
                backgroundColor: 'white',
                border: '2px solid red',
                borderRadius: '5px',
                color: 'black',
                width: '100%',
                height: '50px'
            }}/>

            <p style={{
                fontSize: '10px',
                padding: '5px',
                color: 'red'
            }}>
                Error goes here
            </p>

            </div>

            <div style={{
            width: '40%'
            }}>

            <input placeholder="CELULAR" style={{
                backgroundColor: 'white',
                border: '2px solid red',
                borderRadius: '5px',
                color: 'black',
                width: '100%',
                height: '50px'
            }}/>

            <p style={{
                fontSize: '10px',
                padding: '5px',
                color: 'red'
            }}>
                Error goes here
            </p>

            </div>

        </div>

        <button style={{
            backgroundColor: 'white',
            border: '2px solid blue',
            borderRadius: '10px',
            color: 'blue',
            width: '100%',
            height: '50px',
            fontSize: '16px'
        }}>
        ENVIAR
        </button>
        
    </div>
  
}