import React from "react";
import { TiSocialDribbble } from "react-icons/ti";
import {
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
} from "react-icons/sl";

function Footer() {
  return (
    <div>
      <div className="bg-neutral-100 w-full h-96 ">
        <h1 className="ml-20 py-4">
        
          <span className="text-pink-500 text-5xl ">dribbble</span>
        </h1>
        <p className="pl-20 py-2">
          Dribbble is the world's leading <br />
          community for creatives to share, grow,
          <br /> and get hired.
        </p>
        <div className="flex ml-20 my-5">
          <TiSocialDribbble className="w-20 h-20 " />
          <SlSocialTwitter className="w-6 h-4 ml-4" />
          <SlSocialFacebook className="w-6 h-4 ml-4" />
          <SlSocialInstagram className="w-6 h-4 ml-4" />
          <SlSocialPintarest className="w-6 h-4 ml-4" />
        <div className="float-right ml-40">
          <table className=" text-start">
            <tr className="">
              <th className="pr-11">For designers</th>
              <th className="  ">Hire designers</th>
              <th className="">Company</th>
              <th className="pr-12">Directories</th>
              <th className="pr-12">Design Resources</th>
            </tr>
            <tr className="pt-11 text-start  ">
              <td className="pt-4">Go Pro!</td>
              <td className="pt-4 pl-8">Post a job opening</td>
              <td className="pt-4 pl-6">About</td>
              <td  className="pt-4 pl-9">Design jobs</td>
              <td  className="pt-4">Freelancing</td>
            </tr>
            <tr className=" pl-11  ">
              <td  className="pt-4">Explore design work</td>
              <td  className="pt-4 pl-7">Post a feelance project</td>
              <td  className="pt-4 pl-6">Careers</td>
              <td  className="pt-4 pl-9">Design for hire</td>
              <td  className="pt-4">Design Hiring</td>
            </tr>
            <tr className="text-start  ">
              <td  className="pt-4">Design blog</td>
              <td  className="pt-4 pl-7">Search for designers</td>
              <td  className="pt-4 pl-6"> Support</td>
              <td  className="pt-4 pl-9"> Freelance designers<br/> for hire</td>
              <td  className="pt-4">Design Portfolio</td>
            </tr>
            <tr className="text-start  ">
              <td  className="pt-4">Overtime podcast</td>
              <td  className="pt-4 pl-7">Media kit</td>
              <td  className="pt-4 pl-6">Tags</td>
              <td  className="pt-4 pl-9">Design Education</td>
            </tr>
            <tr className="text-start  ">
              <td  className="pt-4">Playoffs</td>
              <th  className="pt-4 pr-20">Brands</th>
              <td  className="pt-4 pl-6">Testimonials</td>
              <td  className="pt-4 pl-9">Places</td>
              <td  className="pt-4">Creative Process</td>
            </tr>
            <tr className="text-start  ">
              <td  className="pt-4">Weekly Warm-Up</td>
              <td className="pt-4 pl-6">Advertise with us</td>
              <td  className="pt-4 pl-6">API</td>
              <th  className="pt-4">Design assets</th>
              <td  className="pt-4">Design Industry Trands</td>
            </tr>
            <tr className="text-start  ">
              <td  className="pt-4">Refer a Friend</td>
              <td  className="pt-4"></td>
              <td  className="pt-4 pl-6">Terms of service</td>
              <td  className="pt-4 pl-11">Dribbble Marketplace</td>
            </tr>
            <tr className="text-start ">
              <td  className="pt-4">Code of conduct</td>
              <td  className="pt-4"></td>
              <td  className="pt-4 pl-6">Privacy policy</td>
              <td  className="pt-4 pl-11">Creative Market</td>
            </tr>
            <tr className="text-start  ">
              <td></td>
              <td></td>
              <td  className="pt-4 pl-6">cookies policy</td>
              <td  className="pt-4 pl-11"> Fontspring</td>
              <td></td>
            </tr>
            <tr className="text-start  ">
              <td></td>
              <td></td>
              <td></td>
              <td  className="pt-4 pl-11">Font Squirrel</td>
              <td></td>
            </tr>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
