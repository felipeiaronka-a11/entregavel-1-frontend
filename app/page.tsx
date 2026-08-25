import link from 'next/link';
import Button from './complementos/Button';
import ButtonFilled from './complementos/ButtonFilled';
import PostCard from './complementos/PostCard';
import PersonalDataForm from './complementos/PersonalDataForm';
export default function HomePage() {
  return (
    
    <div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <input placeholder="CELULAR" style={{
        backgroundColor: 'white',
        border: '2px solid violet ',
        borderRadius: '10px',
        color:'black',
        width:'90%',
        height:'50px'
      }}/>
      <p style={{
        fontSize: '10px',
        padding:'5px',
        color:'gray'
      }}>Error goes here</p>
        <Button>ENTRAR</Button>
        <ButtonFilled>CRIAR CONTA</ButtonFilled>
  <div style={{ display: 'flex'}}>
        <h3 style={{
         marginRight:'4px',
         color:"black"
        }}>Esqueceu sua senha?</h3>
        <h3 style={{
        color:'purple',
        }}>Recuperar agora</h3>
  </div>
  
  </div>
  <div style={{
          color:'black',
          display:"flex",
          flexDirection:"column",
          margin:"0"
      }}>
    <h1 style={{
    fontSize:'50px'
    }}>Title here</h1>
    <p>Description here</p>
    </div>
    <div>
    <PostCard></PostCard>
    </div>
    <div>
    <PersonalDataForm></PersonalDataForm>
    </div>
  </div>
  );
}
