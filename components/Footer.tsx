import { sql } from "@vercel/postgres";

interface SignatureProps {
  id: number;
  prenom: string;
  nom: string;
  ville: string;
  code_postal: string;
  fonction: string;
}

const Signature: React.FC<SignatureProps> = ({
  id,
  prenom,
  nom,
  ville,
  code_postal,
  fonction,
}) => (
  <div>
    {prenom} {nom}
    {", "}
    <br />
    <span className="font-normal">
      {fonction} de {ville} ({code_postal})
    </span>
  </div>
);

export default async function Footer() {
  const { rows, fields } =
    await sql`SELECT id, prenom, nom, ville, code_postal, fonction FROM signatures`;

  console.log(rows);

  return (
    <footer className="flex flex-wrap gap-5 justify-between mt-14 max-w-full text-2xl font-bold leading-7 text-black w-[948px] max-md:mt-10">
      {rows.map((row, index) => (
        <Signature
          key={row.id}
          nom={row.nom}
          fonction={row.fonction}
          id={row.id}
          code_postal={row.code_postal}
          prenom={row.prenom}
          ville={row.ville}
        />
      ))}
    </footer>
  );
}
