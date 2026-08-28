import SignInForm from '@/app/complementos/SignInForm';
import Link from 'next/link';

export default function EntrarPage() {
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
        <Link href="/Exemplos/Basico">
            Exemplos - Basico
        </Link>
        <Link href="/Exemplos/Avancado">
            Exemplos - Avançado
        </Link>
      </div>

      <SignInForm />
    </div>
  );
}