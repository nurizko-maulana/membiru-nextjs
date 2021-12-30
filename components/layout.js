import Navbar from "./navbar";
import Footer from "./footer";
import Chat from "./chat";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Chat />
      <Footer />
    </>
  );
}
