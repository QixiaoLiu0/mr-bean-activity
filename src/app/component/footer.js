export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Mr. Bean Tribute | "Laughter is Universal"</p>
    </footer>
  );
}