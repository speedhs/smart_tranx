import React from "react";
import fs from "fs";
import Link from "next/link";
import { FaChevronCircleLeft } from "react-icons/fa";

const getpolicies = () => {
  const folder = "privacy_terms";
  const files = fs.readdirSync(folder);
  const markdownfiles = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownfiles.map((file) => file.replace(".md", ""));
  const file = files.map((file) => {
    return file;
  });

  return slugs;
};

const page = () => {
  const data = getpolicies();
  const postpreviews = data.map((slug) => (
    <div>
      <Link href={`/Home/Policies/${slug}`}>
        <h1 className="font-medium text-xl ">{slug}</h1>
      </Link>
    </div>
  ));
  return <div className="min-h-screen w-full pt-10 pl-10 pr-10 ">
  <Link href={"/"}>
    <FaChevronCircleLeft className="h-10 w-10 mb-4 cursor-pointer " />
  </Link>

  <div className="bg-orange-100 rounded-lg p-7 gap-6">
    {postpreviews}
  </div>
</div>
};

export default page;
