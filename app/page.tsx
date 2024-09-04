import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import { sql } from "@vercel/postgres";

interface SignatureProps {
  id: number;
  prenom: string;
  nom: string;
  ville: string;
  code_postal: string;
  fonction: string;
}

export default async function Home() {
  const { rows, fields } =
    await sql`SELECT id, prenom, nom, ville, code_postal, fonction FROM signatures`;

  console.log(rows);

  let signatures: SignatureProps[] = [];

  for (let sign of rows) {
    signatures.push({
      id: sign.id,
      prenom: sign.prenom,
      nom: sign.nom,
      ville: sign.ville,
      code_postal: sign.code_postal,
      fonction: sign.fonction,
    });
  }

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-12 pb-96 bg-white max-md:px-5 max-md:pb-24">
      <div className="flex flex-col items-center w-full max-w-[1196px] max-md:max-w-full">
        <Header signataires={rows.length} />
        <MainContent signataires={rows.length} />
        <Footer signataires={signatures} />
      </div>
    </div>
  );
}
