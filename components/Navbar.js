import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-8 py-5">
      <nav className="flex flex-row justify-between items-center">
        <div className="">
          <p className="font-bold text-3xl text-white">Rakibul Bhuiyan</p>
        </div>
        <div>
          <ul className="space-x-5 text-white">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Projects</Link>
            <Link href={"#"}>Skills</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Contact</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
