import logo from "./assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-[#ffffec] h-screen">
                <nav className="flex justify-around py-5 ">
                    <div className=" w-3/12">
                        <h1 className="font-luckiest text-3xl text-[#597E52]">Logo</h1>
                    </div>
                    <div className="w-6/12 align-content-center ">
                        <ul className="flex justify-center">
                            <li className="w-4/12 text-center font-mochiy text-xl text-[#597E52]">
                                {" "}
                                Home
                            </li>
                            <li className="w-4/12 text-center font-mochiy text-xl text-[#597E52]">
                                Service
                            </li>
                            <li className="w-4/12 text-center font-mochiy text-xl text-[#597E52]">
                                Contact
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="flex justify-around">
                    <di className="w-4/12 my-20">
                        <h1>
                            <span className="text-[#597E52] font-source text-8xl">
                                ONLINE
                            </span>{" "}
                            <br />
                            <span className="text-[#C6A969] font-moul text-8xl">
                                SHOPPING
                            </span>
                        </h1>
                        <p className="my-4 text-xl ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            maximus id dui eu gravida. Nam sed tellus eu velit interdum
                            pellentesque et ac metus. Sed et tortor feugiat, eleifend felis
                            pellentesque, fringilla eros. In in lorem lorem. Donec volutpat
                            volutpat sapien non fringilla. Pellentesque diam lectus,
                            ullamcorper vel molestie vitae.
                        </p>
                        <button
                            onClick={() => navigate("/Product")}
                            className="rounded-full bg-[#C6A969] text-white px-5 py-3 w-36"
                        >
                            Read More
                        </button>
                    </di>
                    <div className="w-4/12 my-20 relative ">
                        <img src={logo} alt="LOGO" className="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
