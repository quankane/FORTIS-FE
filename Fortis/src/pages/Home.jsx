import Banner from "@/components/home/Banner";
import React from "react";
import Layout from "@/components/commons/Layout";
import About from "@/components/home/About";
import Category from "@/components/home/Category";
import Categories from "@/components/home/Categories";
import Discounted from "@/components/home/Discounted";
import Materials from "@/components/home/Materials";
import Process from "@/components/home/Process";

function Home() {
    return (
        <Layout>
            <Banner />
            <About />
            <Category />
            <Categories />
            <Discounted />
            <Materials />
            <Process />
        </Layout>
    );
}

export default Home;
