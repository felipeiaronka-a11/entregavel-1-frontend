import PostCard from '@/app/complementos/PostCard';
import PersonalDataForm from '@/app/complementos/PersonalDataForm';
import Link from 'next/link';

export default function AvancadoPage() {
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
        <Link href="/Exemplos/Basico">
            Exemplos - Basico
        </Link>
      </div>

      <PostCard />
      <PersonalDataForm />
    </div>
  );
}