"use client";

import React from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import CategoryDetail from "@/components/categories/CategoryDetail";

export default function Category() {
  const params = useParams();
  const slug = params?.slug as string;

  return (
    <Layout>
      <CategoryDetail slug={slug} />
    </Layout>
  );
}
