import { ThemeToggle } from "./theme-toggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="p-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 mx-auto">
        <div className=" flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0">
            © {currentYear} DrawTogether Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}