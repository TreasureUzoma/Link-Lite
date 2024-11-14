const SvgIcons = ({
    type,
    color = "#040104",
    width = "20px",
    height = "20px"
}) => {
    switch (type) {
        case "copy":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width={width}
                    height={height}
                    fill={color}
                    className="rotate-180"
                >
                    <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                </svg>
            );
            
        case "check":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width={width}
                    height={height}
                    fill={color}
                    strokeWidth="1"
                    class="h-3.5 w-3.5"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            );

        default:
            return null;
    }
};

export default SvgIcons;
