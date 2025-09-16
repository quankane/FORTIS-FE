import Banner from "@/components/home/Banner";
import React from "react";
import Layout from "@/components/commons/Layout";
import About from "@/components/home/About";
import Category from "@/components/home/Category";
import Categories from "@/components/home/Categories";

function Home() {
    return (
        <Layout>
            <Banner />
            <About />
            <Category />
            <Categories />
        </Layout>
    );
}

export default Home;
