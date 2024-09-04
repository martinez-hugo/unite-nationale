interface SignatureProps {
  name: string;
  title: string;
}

const Signature: React.FC<SignatureProps> = ({ name, title }) => (
  <div>
    {name} <span className="">, {title}</span>
  </div>
);

export default function Footer() {
  const signatures: SignatureProps[] = [
    { name: "Hugo Martinez", title: "Président de l'Association HUGO!" },
    { name: "Hugo Martinez", title: "Président de l'Association HUGO!" },
    { name: "Hugo Martinez", title: "Président de l'Association HUGO!" },
  ];

  return (
    <footer className="flex flex-wrap gap-5 justify-between mt-14 max-w-full text-2xl font-bold leading-7 text-black w-[948px] max-md:mt-10">
      {signatures.map((sig, index) => (
        <Signature key={index} name={sig.name} title={sig.title} />
      ))}
    </footer>
  );
}
