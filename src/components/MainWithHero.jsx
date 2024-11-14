import React, { useState } from "react";
import SvgIcons from "./icons/SvgIcons";

const MainWithHero = () => {
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("error");
    const [shortenedLink, setShortenedLink] = useState("");
    const [iconType, setIconType] = useState("copy");

    const handleLinkChange = e => {
        setLink(e.target.value);
    };

    const handleShortenClick = () => {
        const isValidLink =
            /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/.test(
                link
            );

        if (isValidLink) {
            setMessage("");
            setMessageType("success");
            setShortenedLink("http://shortened.link"); // Mock shortened URL for now
        } else {
            setMessage("Please enter a valid URL");
            setMessageType("error");
        }
    };

    const handleCopyClick = () => {
        setIconType("check");

        navigator.clipboard.writeText(shortenedLink).then(() => {
            console.log("Link copied to clipboard!");
        });
        setTimeout(() => {
            setIconType("copy");
        }, 2000);
    };

    return (
        <div>
            <main className="h-[40rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="flex text-center flex-col gap-[1.75rem] w-[315px] md:w-[500px] lg:w-[680px] -mt-[4.6rem] sm:mt-0">
                    <div>
                        <a
                            href="https://github.com/TreasureUzoma/Link-Lite"
                            target="_blank"
                            className="border border-1 border-[#545454] text-[#525252] rounded-3xl px-5 py-2 text-[0.65rem] font-inter font-semibold"
                        >
                            Proudly Open Source ⚡
                        </a>
                    </div>
                    <h1 className="font-[900] text-[2.6rem] md:text-[3rem]">
                        LinkLite.
                    </h1>
                    <p className="text-[1rem] text-[#717076] font-medium">
                        Easily transform, long, cumbersome links into concise,
                        personalized URLs that reflect your brand.
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                        <input
                            type="url"
                            className="border border-1 rounded-lg w-full p-3 text-[0.8rem] font-medium placeholder:text-[#909092]"
                            value={link}
                            onChange={handleLinkChange}
                            placeholder="Enter Website URL"
                        />
                        <button
                            className="bg-[#474747] text-white py-3 px-4 rounded-lg text-[0.8rem]"
                            onClick={handleShortenClick}
                        >
                            Shorten
                        </button>
                    </div>

                    {/* Show the success or error message */}
                    {message && (
                        <p
                            className={`text-[0.8rem] mt-2 ${
                                messageType === "success" ? "" : "text-red-500"
                            }`}
                        >
                            {message}
                        </p>
                    )}

                    {/* Example of a shortened link and dynamic icon */}
                    <div className="flex justify-center space-x-4 mt-4">
                        {messageType === "success" && (
                            <>
                                <p className="font-semibold text-[0.84rem]">
                                    {shortenedLink}
                                </p>
                                <button onClick={handleCopyClick}>
                                    <SvgIcons color="#474747" type={iconType} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainWithHero;
