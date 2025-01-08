import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "./styles.css";

const LoremI = () => (
  <Page
    header="lorem 1"
    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo mauris a urna elementum mollis. Vivamus eget eros ut metus pharetra pellentesque vel vestibulum ligula. Duis non convallis velit. Aliquam et metus erat. Aenean et pretium urna. Cras lectus arcu, imperdiet at lorem vel, venenatis dictum turpis. Duis accumsan tortor id lacinia fringilla. Sed malesuada leo eget felis lacinia posuere. Vivamus pulvinar nisi vel elementum efficitur.`}
  />
);
const LoremII = () => (
  <Page
    header="lorem 2"
    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida imperdiet ante, nec lobortis odio porta ac. Sed ut porta nisi, ut tincidunt felis. Vestibulum a vestibulum est. Aliquam erat volutpat. Vivamus a ultricies neque, eu venenatis tellus. Duis at mi at nulla egestas finibus. Integer eget eros nec elit porta iaculis scelerisque in nisi. Donec tortor nisi, ullamcorper vitae condimentum quis, dignissim at ligula. Vestibulum eu elit augue. Pellentesque in cursus lectus, quis euismod tellus. Nunc dictum risus non justo vestibulum accumsan. Nam sed nisl lorem.`}
  />
);
const LoremIII = () => (
  <Page
    header="lorem 3"
    text={`Praesent nunc sem, viverra ut est sit amet, ultricies tempor turpis. Nulla sed nunc viverra, ultricies sapien nec, pharetra velit. Curabitur nunc dolor, tempor quis leo eget, sodales vestibulum diam. Ut eget consectetur tortor. Praesent elit tellus, volutpat eu elementum eu, pellentesque at erat. Ut efficitur purus volutpat molestie accumsan. Vivamus sit amet ipsum ornare, cursus neque sed, porttitor turpis. Pellentesque nisi dolor, tincidunt a libero nec, luctus tempor lectus. Nam a ultricies mi.`}
  />
);
const LoremIV = () => (
  <Page
    header="lorem 4"
    text={`Vestibulum dictum sagittis ipsum, a sagittis lectus auctor eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque sodales sollicitudin nunc, sed commodo ante efficitur id. Suspendisse at felis efficitur, rutrum lacus eget, pharetra ex. Sed faucibus diam et tellus pretium, ut sagittis risus maximus. Donec pellentesque massa vitae nulla suscipit, a placerat nibh sagittis. Nunc facilisis laoreet sem, nec scelerisque augue.`}
  />
);

const Page = ({header, text}) => {
  return (
    <>
      <h2>{header}</h2>
      <p>{text}</p>
    </>
  );
};

const links = ["LoremI", "LoremII", "LoremIII", "LoremIV"];

const Layout = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? "open" : "";

  const onClick = (href) => {
    toggleMenu();
    navigate(href);
  };

  return (
    <>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {links.map((link, index) => (
            <a
              key={link}
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => onClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <main className={`page ${isOpen}`}>
        <Outlet />
      </main>
    </>
  );
};

export const Menu = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="loremI" element={<LoremI />} />
          <Route path="loremII" element={<LoremII />} />
          <Route path="loremIII" element={<LoremIII />} />
          <Route path="loremIV" element={<LoremIV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
