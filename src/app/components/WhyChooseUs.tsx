"use client";
import image from "../../../public/image.png"
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export function WhyChooseUs() {
  const tabs = [
    {
      title: "ChatBot",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>ChatBot Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Schedule Appointments",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Find Lawyer",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Find Lawyer tab</p>
          <DummyContent />
        </div>
      ),
    },
   
  ];

  return (
    <div>
      <div
            className='py-12 relative top-40'
        >
            <div>
                <div className="text-center">
                    <h1
                        className='text-base text-teal-600 font-semibold tracking-wide uppercase'
                    >
                        A Few Use Cases 
                    </h1>
                    <p
                        className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'
                    >
                        Explore 
                    </p>
                </div>
            </div>
            


        </div>
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src={image}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
