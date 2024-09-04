import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export default function Header({ signataires }: { signataires: number }) {
  return (
    <div className="max-w-full w-[954px] max-sm:flex max-sm:flex-col">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src="/logo.png"
            alt="Association HUGO! logo"
            className="object-contain w-full aspect-square rounded-[300px] max-md:mt-10"
            width={350}
            height={350}
          />
        </div>
        <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
          <Card className="items-start self-stretch m-auto w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <CardHeader>
              <CardTitle className="text-2xl">
                {signataires + " "}
                <span className="text-xl font-medium text-zinc-500">
                  élus locaux ont signé la tribune.
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
