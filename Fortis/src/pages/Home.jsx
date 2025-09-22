import Banner from "@/components/home/Banner";
import React from "react";
import Layout from "@/components/commons/Layout";
import About from "@/components/home/About";
import Category from "@/components/home/Category";
import Categories from "@/components/home/Categories";
import Discounted from "@/components/home/Discounted";
import Materials from "@/components/home/Materials";
import Process from "@/components/home/Process";
import Reason from "@/components/home/Reason";
import FAQ from "@/components/home/FAQ";
import ReComment from "@/components/home/ReComment";
import News from "@/components/home/News";

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
            <Reason />
            <FAQ />
            <ReComment />
            <News />
        </Layout>
    );
}

export default Home;
