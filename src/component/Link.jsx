import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children }) => {
  const { navigate, currentPath } = useNavigation();

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      style={{
        textDecoration: "none",
        fontWeight: currentPath === to ? "bold" : "",
      }}
    >
      {children}
    </a>
  );
};

export default Link;
