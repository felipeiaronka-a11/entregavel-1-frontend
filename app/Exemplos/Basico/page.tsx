import Button from '@/app/complementos/Button';
import Input from '@/app/complementos/Input';
import TitleDescriptionInfo from '@/app/complementos/TitleDescriptionInfo';

export default function BasicoPage() {
  return (
    <div style={{ padding: '20px' }}>
      
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