import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import { FaChevronCircleLeft } from "react-icons/fa";
import Link from "next/link";

const page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  const data = getprivacycontent(slug);

  console.log(slug);
  return (
    <div className="min-h-screen w-full pt-10 pl-10 pr-10 ">
      <Link href={"/Home/Policies"}>
        <FaChevronCircleLeft fontWeight={5} className="h-10 w-10 mb-4 cursor-pointer " />
      </Link>

      <div className="bg-orange-100 rounded-lg p-7 overflow-scroll">
        <Markdown>{data}</Markdown>
      </div>
    </div>
  );
};

const getprivacycontent = (slug: string) => {
  const folder = "privacy_terms";
  const file = `${folder}/${slug}.md`;
  const data = fs.readFileSync(file, "utf8");

  return data;
};

export default page;
