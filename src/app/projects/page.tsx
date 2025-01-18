'use client';
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3dcard"; "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { LinkPreviewDemo } from "@/components/linkpreview";
import { Meteors } from "@/components/ui/meteors";
export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">

          <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          <CardContainer className="inter-var">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                                  transition={{ duration: 0.5, ease: "easeOut" }}>

              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >

  RouteWise - AI-Powered Roadmap Generator
  </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Next.js, TypeScript, MongoDB, Gemini API
                  </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={0}
                  rotateZ={-3}
                  className="w-full mt-4"
                >
                  <Image
                    src="/assests/routewise.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="a"
                    href="https://routeewise.vercel.app/"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Live Link →
                  </CardItem>
                  {/* <Meteors number={20} /> */}

                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href="https://github.com/adityajha2005/RouteWise-Main"
                    className="flex items-center px-4 py-2 text-white text-xl font-bold"
                  >
                    <GitHubLogoIcon className="w-8 h-8" />
                  </CardItem>
                </div>

              </CardBody>
              </motion.div>
            </CardContainer>
            
          <CardContainer className="inter-var">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>

              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
        NexusHub - Personal IT Mentoring Platform
        </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  HTML, CSS, Javascript, Typescript, React, Node.js, MongoDB
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={0}
                  rotateZ={-3}
                  className="w-full mt-4"
                >
                  <Image
                    src="/assests/nexushubb.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="a"
                    href="https://nexushubb.vercel.app/"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Live Link →
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href="https://github.com/adityajha2005/nexushub"
                    className="flex items-center px-4 py-2 text-white text-xl font-bold"
                  >
                    <GitHubLogoIcon className="w-8 h-8" />
                  </CardItem>
                </div>
              </CardBody>
              </motion.div>

            </CardContainer>
          <CardContainer className="inter-var">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}>

              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
        EcoZap - Blockchain-powered CO2 tracking system
        </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  HTML, CSS, Javascript, Typescript, Solidity, Python, Jupyter Notebook
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={0}
                  rotateZ={-3}
                  className="w-full mt-4"
                >
                  <Image
                    src="/assests/EcoZap.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="a"
                    href="https://eco-zap.vercel.app/"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Live Link →
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href="https://github.com/adityajha2005/EcoZap"
                    className="flex items-center px-4 py-2 text-white text-xl font-bold"
                  >
                    <GitHubLogoIcon className="w-8 h-8" />
                  </CardItem>
                </div>
              </CardBody>
              </motion.div>
            </CardContainer>
            {/* <CardContainer className="inter-var">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                                  transition={{ duration: 0.5, ease: "easeOut" }}>

              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
        TradeZen - Decentralized platform 
        </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  HTML, CSS, React, Node.js, MongoDB, Blockchain
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={0}
                  rotateZ={-3}
                  className="w-full mt-4"
                >
                  <Image
                    src="/assests/tradezen.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="a"
                    href="https://tradezen-frontend.vercel.app/"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Live Link →
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href="https://github.com/adityajha2005/Tradezen"
                    className="flex items-center px-4 py-2 text-white text-xl font-bold"
                  >
                    <GitHubLogoIcon className="w-8 h-8" />
                  </CardItem>
                </div>
              </CardBody>
              </motion.div>
            </CardContainer>
             */}
            <CardContainer className="inter-var">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                                  transition={{ duration: 0.5, ease: "easeOut" }}>

              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  DaisyAI
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                 Python, Natural Language Processing, Speech Recognition, Text-to-Speech
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={0}
                  rotateZ={-3}
                  className="w-full mt-4"
                >
                  <Image
                    src="/assests/prev.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="a"
                    href="#"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Live Link →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href="https://github.com/adityajha2005/DaisyAI"
                    className="flex items-center px-4 py-2 text-white text-xl font-bold"
                  >
                    <GitHubLogoIcon className="w-8 h-8" />
                  </CardItem>
                </div>
              </CardBody>
              </motion.div>
            </CardContainer>
          </div>

          <LinkPreviewDemo />
        </div>
      </div>

    </section>
  )
}


