import Image from "next/image";

export default function Header() {
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
          <div className="flex flex-col items-start self-stretch p-6 m-auto w-full bg-white rounded-lg border border-solid shadow-md border-zinc-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col">
              <div className="gap-2.5 self-start text-2xl font-bold whitespace-nowrap text-zinc-900">
                40
              </div>
              <div className="gap-2.5 self-stretch mt-3 text-xs font-medium text-zinc-500">
                Deploy your new project in one-click.
              </div>
            </div>
            <form className="flex flex-col mt-6 max-w-full text-xs font-medium text-zinc-900 w-[250px]">
              <label
                htmlFor="projectName"
                className="gap-2.5 self-start whitespace-nowrap"
              >
                Name
              </label>
              <input
                type="text"
                id="projectName"
                placeholder="Name of your project"
                className="flex overflow-hidden flex-col justify-center items-start px-1 py-px mt-2 w-full rounded-md border border-solid border-zinc-200 max-w-[250px] text-zinc-500"
              />
              <label
                htmlFor="framework"
                className="gap-2.5 self-start mt-2 whitespace-nowrap"
              >
                Framework
              </label>
              <div className="flex gap-10 justify-between items-start px-3 py-3.5 mt-2 w-full whitespace-nowrap rounded border border-solid border-zinc-200 max-w-[250px] min-h-[40px]">
                <select
                  id="framework"
                  className="gap-2.5 self-stretch bg-transparent border-none appearance-none"
                >
                  <option value="">Select</option>
                </select>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e188da8a3129f755b274b70b430e6494ac59f4f0b73da1e4b3aa2000ee087518?placeholderIfAbsent=true&apiKey=94064c26774c4054b29ef93765f3faef"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[15px]"
                />
              </div>
            </form>
            <div className="flex gap-10 justify-between items-start mt-6 max-w-full text-sm font-medium whitespace-nowrap w-[250px]">
              <button className="gap-2.5 self-stretch px-4 py-3 rounded-md border border-solid border-zinc-200 text-zinc-900">
                Cancel
              </button>
              <button className="gap-2.5 self-stretch px-4 py-3 text-white rounded-md bg-zinc-900">
                Deploy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
