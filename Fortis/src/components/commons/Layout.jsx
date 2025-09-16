import React from "react";
import Header from "./Header";
import IconFixedLeft from "./IconFixedLeft";
import IconFixedRight from "./IconFixedRight";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
            <IconFixedLeft />
            <IconFixedRight />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
