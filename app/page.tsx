import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{   padding:    '40px',
                    fontFamily: 'sans-serif'
                }}>

      <h1>Menu de Navegação</h1>
      
      <div style={{ display:       'flex',
                    flexDirection: 'column', 
                    gap:           '12px', 
                    marginTop:     '20px',
                    color:         'blue',
                 }}>
        <Link href="/Entrar">
          1. Página Entrar
        </Link>
        <Link href="/Exemplos/Basico">
          2. Exemplos - Básico
        </Link>
        <Link href="/Exemplos/Avancado">
          3. Exemplos - Avançado
        </Link>
      </div>
    </div>
  );
}