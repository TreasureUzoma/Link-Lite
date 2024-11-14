import React, { useState } from "react";
import SvgIcons from "./icons/SvgIcons";

const Main = () => {
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("error");
    const [shortenedLink, setShortenedLink] = useState("");
    const [iconType, setIconType] = useState("copy");

    const handleLinkChange = (e) => {
        setLink(e.target.value);
    };

    const handleShortenClick = () => {
        // Validate the link using a more flexible regular expression for URL format
        
        // yh, no one understands regex!
        const isValidLink = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/.test(link);

        if (isValidLink) {
            setMessage("");
            setMessageType("success");
            // logic for shortening link (implement it here)
            setShortenedLink("http://shortened.link"); // For now, just a mock value
        } else {
            setMessage("Please enter a valid URL");
            setMessageType("error");
        }
    };

    const handleCopyClick = () => {
        // Change icon to "check" when clicked
        setIconType("check");

        // After 2 seconds, change the icon back to "copy"
        navigator.clipboard.writeText(shortenedLink).then(() => {
            console.log("Link copied to clipboard!");
        });
        setTimeout(() => {
            setIconType("copy");
        }, 2000);
    };

    return (
        <main className="flex items-center justify-center flex-col gap-4">
            <div className="flex items-center justify-center w-[310px] md:w-[500px] lg:w-[680px] space-x-2">
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
        </main>
    );
};

export default Main;
