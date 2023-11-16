import React from "react";
import Link from "next/link";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <div className="w-full p-5">
      <div className="lg:p-12 p-0">
        <footer className="text-gray-600 body-font ">
          <div className="container lg:px-5 px-0 py-10 mx-auto ">
            <div className="md:mt-0 mt-10 md:text-left">
              <div className="flex flex-wrap lg:flex-nowrap">
                <div className="lg:w-52 w-full flex-shrink-0 md:mx-0 mx-auto md:text-left">
                  <h2 className="text-3xl font-bold mb-10 lg:mb-0">Logo</h2>
                </div>
                <div className="w-full lg:w-4/12 lg:px-4 px-0">
                  <h2 className="title-font font-bold text-black tracking-widest text-md mb-5">
                    About
                  </h2>
                  <nav className="list-none mb-10 flex flex-col gap-6">
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Projacts
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Support
                      </Link>
                    </li>
                  </nav>
                </div>
                <div className="w-full lg:w-4/12 lg:px-4 px-0">
                  <h2 className="title-font font-bold text-black tracking-widest text-md mb-5">
                    Resources
                  </h2>
                  <nav className="list-none mb-10 flex flex-col gap-6">
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Investors
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Press
                      </Link>
                    </li>
                  </nav>
                </div>
                <div className=" w-full lg:w-4/12 lg:px-4 px-0">
                  <h2 className="title-font font-bold text-black tracking-widest text-md mb-5">
                    Event
                  </h2>
                  <nav className="list-none mb-10 flex flex-col gap-6">
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Terms of Use
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Cookie Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="text-black hover:text-red-300" href="#">
                        Sitemap
                      </Link>
                    </li>
                  </nav>
                </div>

                <div className="w-full lg:w-5/12 lg:px-4 px-0">
                  <div className="flex flex-col gap-5">
                    <h2 className="title-font font-bold text-black tracking-widest text-md mb-3">
                      Subscribe
                    </h2>
                    <nav className="list-none mb-10 flex flex-col gap-2">
                      <p className="text-sm">
                        {` Join our mailing list for the latest updates and
                      promotions.`}
                      </p>
                      <div className="flex gap-2 flex-wrap lg:flex-nowrap">
                        <input
                          type="text"
                          placeholder="Enter your email"
                          className="text-black w-full lg:w-8/12 border p-2 border-black"
                        />
                        <button className="border border-black flex justify-center items-center p-2 w-full lg:w-4/12">
                          Subscribe
                        </button>
                      </div>
                      <p className="text-sm">
                        {` By subscribing, you agree to our privacy policy and
                      consert to receive updates from our company.`}
                      </p>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex border-t container mx-auto border-black ">
            <div className="container mx-auto py-4 lg:px-5 px-0 flex flex-wrap flex-col sm:flex-row">
              <p className="text-black text-sm sm:text-left flex flex-col lg:flex-row gap-5">
                © 2023 Resume. All Rights Reserved.
                <Link href="/" className=" ">
                  <span className="text-black border-black border-b">
                    Privacy Policy.
                  </span>
                </Link>
                <Link href="/" className=" ">
                  <span className="text-black border-black border-b">
                    Terms of Service.
                  </span>
                </Link>
                <Link href="/" className=" ">
                  <span className="text-black border-black border-b">
                    Cookie Settings.
                  </span>
                </Link>
              </p>
              <span className="hidden md:flex sm:ml-auto sm:mt-0 mt-2 justify-center items-center sm:justify-start">
                <Link href="/" className="text-black">
                  <TiSocialFacebookCircular className="w-7 h-7 text-white bg-black rounded-full" />
                </Link>
                <Link href="/" className="ml-3 text-black">
                  <SlSocialInstagram className="w-6 h-6 rounded" />
                </Link>
                <Link href="/" className="ml-3 text-black">
                  <FaXTwitter className="w-6 h-6 rounded-full" />
                </Link>

                <Link href="/" className="ml-3 text-black">
                  <TiSocialLinkedin className="w-6 h-6 rounded bg-black text-white" />
                </Link>
                <Link href="/" className="ml-3 text-black">
                  <TiSocialYoutube className="w-8 h-8 rounded" />
                </Link>
              </span>
            </div>
          </div>

          {/* /// Footer Mobile Size //// */}
          <div className="md:hidden border-t container mx-auto border-black ">
            <div className="container mx-auto py-4 lg:px-5 px-0 flex flex-wrap flex-col gap-7 sm:flex-row">
              <span className="flex sm:ml-auto sm:mt-0 mt-2 items-center sm:justify-start">
                <Link href="/" className="text-black">
                  <TiSocialFacebookCircular className="w-7 h-7 text-white bg-black rounded-full" />
                </Link>
                <Link href="/" className="ml-3 text-black">
                  <SlSocialInstagram className="w-6 h-6 rounded" />
                </Link>
                <Link href="/" className="ml-3 text-black">
                  <FaXTwitter className="w-6 h-6 rounded-full" />
                </Link>

                <Link href="/" className="ml-3 text-black">
                  <TiSocialLinkedin className="w-6 h-6 rounded bg-black text-white" />
                </Link>
                <Link href="/" className="ml-3 text-black">
                  <TiSocialYoutube className="w-8 h-8 rounded" />
                </Link>
              </span>
              <p className="text-black text-sm sm:text-left flex flex-col lg:flex-row gap-5">
                © 2023 Resume. All Rights Reserved.
                <Link href="/" className=" ">
                  <span className="text-black border-black border-b">
                    Privacy Policy.
                  </span>
                </Link>
                <Link href="/" className=" ">
                  <span className="text-black border-black border-b">
                    Terms of Service.
                  </span>
                </Link>
                <Link href="/" className=" ">
                  <span className="text-black border-black border-b">
                    Cookie Settings.
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
