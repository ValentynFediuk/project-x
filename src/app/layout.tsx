import { FC } from "react";
import { Header } from './layout/components/Header/Header'
import { Footer } from './layout/components/Footer/Footer'
import 'styles/globals.scss'
import styles from './layout/MainLayout.module.scss'
import { MainLayoutProps } from "./layout/MainLayout.props";

const RootLayout: FC<MainLayoutProps> = ({ children })=> (
  <html lang='en'>
  <head><title>Project X</title></head>
  <body>
  <div className={styles.layout}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
  </body>
  </html>
)

export default RootLayout