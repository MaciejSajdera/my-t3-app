export function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

export const handleThemeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "cupcake");
  } else {
    document.documentElement.setAttribute("data-theme", "myDark");
  }
};
