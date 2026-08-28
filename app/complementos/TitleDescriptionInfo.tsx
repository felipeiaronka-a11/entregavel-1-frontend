interface TitleDescriptionInfoProps {
  title: string;
  description: string;
}

export default function TitleDescriptionInfo(props: TitleDescriptionInfoProps) { 
  return (
    <div>
      <h2 style={{ fontSize: '50px' }}>
        {props.title}
      </h2>
      <p style={{ fontSize: '20px'}}>
        {props.description}
      </p>
    </div>
  );
}