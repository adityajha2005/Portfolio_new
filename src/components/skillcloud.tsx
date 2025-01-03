import IconCloud from "./ui/iconcloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "linux",
  "postman",
  "netlify",
  "solidity",
  "cpp",
  "java",
  "python",
  "tensorflow",
  "numpy",
  "pandas"
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
