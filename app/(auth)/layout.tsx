import Footer from "./Footer";
import Nav from "./Nav";

type props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: props) {
  return (
    <div>
      <Nav />
      {children}
      <Footer/>
    </div>
  );
}
