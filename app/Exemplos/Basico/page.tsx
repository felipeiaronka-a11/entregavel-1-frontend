import Button from '@/app/complementos/Button';
import Input from '@/app/complementos/Input';
import TitleDescriptionInfo from '@/app/complementos/TitleDescriptionInfo';
import Link from 'next/link';

export default function BasicoPage() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display:       'flex',
                    flexDirection: 'column', 
                    gap:           '12px', 
                    marginTop:     '20px',
                    color:         'blue',
                 }}>
        <Link href="/">
            Página Inicial
        </Link>
        <Link href="/Entrar">
            Página Entrar
        </Link>
        <Link href="/Exemplos/Avancado">
            Exemplos - Avançado
        </Link>
      </div>


      <TitleDescriptionInfo title="Title here" description="descriptions here" />

      <input placeholder="Teste" style={{
                backgroundColor: 'white',
                border:          '2px solid red',
                borderRadius:    '5px',
                color:           'black',
                width:           '100%',
                height:          '50px'
        }}/>

      <Button>Clique Aqui</Button>
    </div>
  );
}