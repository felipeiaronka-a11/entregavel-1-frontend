export default function PostCard(props) {
  return (
    <div>
      {/* Banner + Avatar Sobreposto */}
      <div style={{ position: 'relative', height: '180px', width: '100%' }}>
        <img
          src="https://s2-g1.glbimg.com/epHyTIo2TSkHZ43DXZPZoeC8a_M=/0x0:959x540/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/h/J/Ui4XL0So6yEilj6DeGXg/memedoge.jpg"
          alt="Banner"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-24px',
            left: '50%',
          }}
        >
          <img
            src="https://www.bnews.com.br/media/_versions/agosto_2023/copia_de_capa_de_materia_72_widemd.jpg"
            alt="Avatar"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '2px solid white',
            }}
          />
        </div>
      </div>

      {/* Conteúdo Abaixo do Banner */}
      <div style={{ padding: '32px 24px 16px 24px' }}>
        {/* Container das Tags */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
          }}
        >
          <div style={tagStyle}>Tag A</div>
          <div style={tagStyle}>Tag B</div>
          <div style={tagStyle}>Tag C</div>
        </div>

        {/* Data, Título e Subtítulo */}
        <p style={{ fontSize: '12px', color: '#666', margin: '0 0 4px 0' }}>
          14, may, 2021
        </p>
        <h2
          style={{
            fontSize: '22px',
            color: '#ff2d2d',
            margin: '0 0 4px 0',
          }}
        >
          Title here
        </h2>
        <p style={{ fontSize: '14px', color: '#777' }}>
          Subtitle here
        </p>

        {/* Rodapé de Métricas */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            fontSize: '13px',
            color: '#333',
            fontWeight: 'bold',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>♥</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>👁</span> 
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>💬</span> 
          </div>
        </div>
      </div>
    </div>
  );
}

// Estilo reutilizável para as pílulas de tag
const tagStyle = {
  backgroundColor: '#e5e5e5',
  color: '#333',
  borderRadius: '12px',
  padding: '4px 12px',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};