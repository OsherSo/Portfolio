const Menu = () => {
  const menuItems = [
    { name: "Home", link: "home" },
    { name: "Skills", link: "skills" },
    { name: "How it works", link: "hiring-process" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <ul className="flex gap-x-4">
      {menuItems.map((item) => (
        <li key={item.name}>
          <a
            href={`#${item.link}`}
            className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
