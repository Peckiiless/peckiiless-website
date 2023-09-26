import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Peckiiless AB",
  description:
    "PeckiiLess is a Sweden-based company that has created a nano-sensor that can detect blood glucose levels through human exhalation to an extremely accurate level. Hundreds of millions of people, most diabetics, around the world rely on accurate glucose monitoring to lead a healthy life. Current methods are invasive can be painful, are expensive, wasteful and not universally available. Using the PeckiiLess sensor, we can improve the lives of these people, reduce costs and eliminate the waste of the current blood glucose monitoring methods. PeckiiLess is good for people, the planet and pocketbooks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
