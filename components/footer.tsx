const now = new Date();
const year = now.getFullYear();

const Footer = () => {
  return (
    <footer className="p-4 text-center text-gray-500 dark:text-gray-300">
      <p>&copy; {year} TanakaRyo. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;