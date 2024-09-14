import Logo from "./navbar/Logo";
import Menu from "./navbar/Menu";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto py-4 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
