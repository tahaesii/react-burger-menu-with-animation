# Menu Component in React with React Router

This project is a React-based menu application that uses React Router for navigation. It provides a layout with a burger menu and multiple pages displaying different "Lorem Ipsum" content.

## Features

- **Responsive Burger Menu**: A toggleable menu that animates and displays navigation links.
- **Dynamic Navigation**: Links navigate to different pages using `react-router-dom`.
- **Reusable Page Component**: A flexible component that renders content dynamically based on props.
- **CSS Animations**: Smooth animations for menu transitions.

## File Structure

```plaintext
src/
├── styles.css   // Contains all the styles for the app
├── Menu.js      // The main component with all routes and layout
```

## Components

### `Menu`

This is the root component that initializes the `BrowserRouter` and defines the application routes.

#### Code
```jsx
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
```

### `Layout`

A component that manages the layout of the application, including the burger menu and main content area. It uses `useNavigate` from `react-router-dom` to navigate between routes.

#### Props
- **`isMenuOpen`**: A state that tracks whether the menu is open.
- **`toggleMenu`**: A function to toggle the menu open/close state.

#### Code
```jsx
const Layout = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const onClick = (href) => {
    toggleMenu();
    navigate(href);
  };

  return (
    <>
      <button className={`burger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}></button>
      <div className={`background ${isMenuOpen ? "open" : ""}`}></div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
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
      <main className={`page ${isMenuOpen ? "open" : ""}`}>
        <Outlet />
      </main>
    </>
  );
};
```

### `Page`

A reusable component to display the header and text content for each page.

#### Props
- **`header`**: The title of the page.
- **`text`**: The main content text.

#### Code
```jsx
const Page = ({ header, text }) => {
  return (
    <>
      <h2>{header}</h2>
      <p>{text}</p>
    </>
  );
};
```

### Content Pages

#### `LoremI`, `LoremII`, `LoremIII`, `LoremIV`

These are individual pages displaying predefined "Lorem Ipsum" text using the `Page` component.

#### Code Example
```jsx
const LoremI = () => (
  <Page
    header="lorem 1"
    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo mauris a urna elementum mollis.`}
  />
);
```

## Navigation Links

An array of links is used to dynamically generate the navigation menu:
```javascript
const links = ["LoremI", "LoremII", "LoremIII", "LoremIV"];
```

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser to view the app.

## Styling

The styling is managed in `styles.css`, including:
- Menu animations
- Page transitions
- Burger menu styling

## Dependencies

- **React**: Front-end library
- **React Router DOM**: Routing library

## Future Improvements

- Add unit tests for components.
- Implement responsive design for mobile devices.
- Add accessibility features for better user experience.


