const Hero = () => {
    return (
        <main className="flex items-center justify-center h-[20rem]">
            <div className="flex text-center flex-col gap-[1.75rem] w-[310px] md:w-[500px] lg:w-[680px]">
                <div>
                    <a
                        href="https://github.com/TreasureUzoma/Link-Lite"
                        className="border border-1 border-[#545454] text-[#525252] rounded-3xl px-5 py-2 text-[0.65rem] font-inter font-semibold"
                    >
                        Proudly Open Source ⚡
                    </a>
                </div>
                <h1 className="font-[900] text-[2.6rem] md:text-[3rem]">LinkLite.</h1>
                <p className="text-[1rem] text-[#717076] font-medium">
                    Easily transform, long, cumbersome link into concise,
                    personalised URL that reflect your brand.
                </p>
            </div>
        </main>
    );
};
export default Hero;
