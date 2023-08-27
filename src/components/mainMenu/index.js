import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
const MainMenu = () => {
    const location = useLocation();
    const pathvalues = location.pathname.split("/");
    const [path, setPath] = useState(pathvalues[1]);
    console.log("current path name is", path);

    return (
        <div className="w-20 bg-white border-r border-[#CFCFCF] fixed main_menu left-0">
            <nav>
                <ul className="flex flex-col items-center pt-5 gap-3">
                    <li className="py-1 px-3 cursor-pointer relative w-20 flex justify-center">
                        {path === "dashboard" ?
                            <Link to="/dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path opacity="0.35" d="M37.9447 44.7998H16.73C13.8006 44.7998 11.4263 42.4256 11.4263 39.4962V23.1696C11.4263 21.2426 12.4711 19.4694 14.1541 18.5342L24.7615 12.6418C26.3632 11.7525 28.3115 11.7525 29.9132 12.6418L40.5206 18.5342C42.2036 19.4694 43.2484 21.2444 43.2484 23.1696V39.4962C43.2484 42.4256 40.8741 44.7998 37.9447 44.7998Z" fill="#38579E" />
                                    <path d="M32.6411 44.7999H22.0337V34.1925C22.0337 32.239 23.616 30.6567 25.5695 30.6567H29.1053C31.0588 30.6567 32.6411 32.239 32.6411 34.1925V44.7999Z" fill="#38579E" />
                                    <path d="M42.3627 23.9918C41.9261 23.9918 41.4859 23.884 41.0775 23.6577L28.9868 16.9397C27.9544 16.3669 26.7239 16.3669 25.6915 16.9397L13.6008 23.6577C12.3191 24.3684 10.7068 23.9087 9.99431 22.627C9.28361 21.347 9.74327 19.7329 11.025 19.0205L23.1156 12.3025C25.7604 10.8316 28.9179 10.8333 31.5627 12.3025L43.6533 19.0205C44.9333 19.7312 45.3947 21.3453 44.684 22.627C44.1978 23.5003 43.2944 23.9918 42.3627 23.9918Z" fill="#38579E" />
                                </svg>
                                <div className="absolute w-3 h-full bg-[#38579E] top-0 left-0 rounded-full -translate-x-1/2">

                                </div>
                            </Link> :
                            <Link to="/dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path opacity="0.35" d="M37.9447 44.8001H16.73C13.8006 44.8001 11.4263 42.4258 11.4263 39.4964V23.1699C11.4263 21.2429 12.4711 19.4697 14.1541 18.5344L24.7615 12.642C26.3632 11.7528 28.3115 11.7528 29.9132 12.642L40.5206 18.5344C42.2036 19.4697 43.2484 21.2446 43.2484 23.1699V39.4964C43.2484 42.4258 40.8741 44.8001 37.9447 44.8001Z" fill="black" />
                                    <path d="M32.6411 44.8004H22.0337V34.193C22.0337 32.2395 23.616 30.6572 25.5695 30.6572H29.1053C31.0588 30.6572 32.6411 32.2395 32.6411 34.193V44.8004Z" fill="black" />
                                    <path d="M42.3627 23.992C41.9261 23.992 41.4859 23.8842 41.0775 23.6579L28.9868 16.9399C27.9544 16.3671 26.7239 16.3671 25.6915 16.9399L13.6008 23.6579C12.3191 24.3686 10.7068 23.9089 9.99431 22.6272C9.28361 21.3473 9.74327 19.7332 11.025 19.0207L23.1156 12.3027C25.7604 10.8318 28.9179 10.8336 31.5627 12.3027L43.6533 19.0207C44.9333 19.7314 45.3947 21.3455 44.684 22.6272C44.1978 23.5006 43.2944 23.992 42.3627 23.992Z" fill="black" />
                                </svg>
                            </Link>
                        }


                    </li>
                    <li className="py-1 px-3 cursor-pointer relative w-20 flex justify-center">
                        {path == "blogs" ?
                            <Link to="/blogs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M41.8603 35.4668C41.2118 35.4668 13.9488 35.4668 13.3003 35.4668C11.9092 35.4668 10.7803 36.7212 10.7803 38.2668C10.7803 39.8124 11.9092 41.0668 13.3003 41.0668C13.9488 41.0668 41.2118 41.0668 41.8603 41.0668C43.2513 41.0668 44.3803 39.8124 44.3803 38.2668C44.3803 36.7212 43.2513 35.4668 41.8603 35.4668Z" fill="#38579E" />
                                    <path d="M19.1806 39.2002H14.1406C14.1406 39.2002 14.1406 41.2797 14.1406 42.0002C14.1406 43.5458 15.2696 44.8002 16.6606 44.8002C18.0517 44.8002 19.1806 43.5458 19.1806 42.0002C19.1806 41.2797 19.1806 39.2002 19.1806 39.2002Z" fill="#38579E" />
                                    <path d="M41.0205 39.2002H35.9805C35.9805 39.2002 35.9805 41.2797 35.9805 42.0002C35.9805 43.5458 37.1094 44.8002 38.5005 44.8002C39.8915 44.8002 41.0205 43.5458 41.0205 42.0002C41.0205 41.2797 41.0205 39.2002 41.0205 39.2002Z" fill="#38579E" />
                                    <path opacity="0.35" d="M19.18 35.4669H15.82C13.9636 35.4669 12.46 33.7962 12.46 31.7335V14.9335C12.46 12.8709 13.9636 11.2002 15.82 11.2002H19.18C21.0364 11.2002 22.54 12.8709 22.54 14.9335V31.7335C22.54 33.7962 21.0364 35.4669 19.18 35.4669Z" fill="#38579E" />
                                    <path d="M29.2607 35.4669H25.9007C24.9733 35.4669 24.2207 34.6307 24.2207 33.6003V16.8003C24.2207 15.7699 24.9733 14.9336 25.9007 14.9336H29.2607C30.1881 14.9336 30.9407 15.7699 30.9407 16.8003V33.6003C30.9407 34.6307 30.1881 35.4669 29.2607 35.4669Z" fill="#38579E" />
                                    <path opacity="0.35" d="M41.1358 34.7218L40.1647 35.2127C38.8812 35.8605 37.3692 35.2314 36.7863 33.8053L31.2372 20.2458C30.6543 18.8197 31.2204 17.1397 32.5039 16.4919L33.475 16.001C34.7585 15.3533 36.2705 15.9823 36.8535 17.4085L42.4025 30.9679C42.9855 32.3922 42.4193 34.0722 41.1358 34.7218Z" fill="#38579E" />
                                    <path d="M19.1803 26.1333H15.8203V29.8666H19.1803V26.1333Z" fill="#38579E" />
                                    <path d="M19.18 29.8666C20.1078 29.8666 20.86 29.0309 20.86 28C20.86 26.969 20.1078 26.1333 19.18 26.1333C18.2522 26.1333 17.5 26.969 17.5 28C17.5 29.0309 18.2522 29.8666 19.18 29.8666Z" fill="#38579E" />
                                    <path d="M15.8206 29.8666C16.7485 29.8666 17.5006 29.0309 17.5006 28C17.5006 26.969 16.7485 26.1333 15.8206 26.1333C14.8928 26.1333 14.1406 26.969 14.1406 28C14.1406 29.0309 14.8928 29.8666 15.8206 29.8666Z" fill="#38579E" />
                                </svg>
                                <div className="absolute w-3 h-full bg-[#38579E] top-0 left-0 rounded-full -translate-x-1/2">

                                </div>
                            </Link>
                            :
                            <Link to="/blogs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M41.86 35.4666C41.2115 35.4666 13.9485 35.4666 13.3 35.4666C11.909 35.4666 10.78 36.721 10.78 38.2666C10.78 39.8122 11.909 41.0666 13.3 41.0666C13.9485 41.0666 41.2115 41.0666 41.86 41.0666C43.2511 41.0666 44.38 39.8122 44.38 38.2666C44.38 36.721 43.2511 35.4666 41.86 35.4666Z" fill="black" />
                                    <path d="M19.1799 39.2H14.1399C14.1399 39.2 14.1399 41.2794 14.1399 42C14.1399 43.5456 15.2689 44.8 16.6599 44.8C18.0509 44.8 19.1799 43.5456 19.1799 42C19.1799 41.2794 19.1799 39.2 19.1799 39.2Z" fill="black" />
                                    <path d="M41.02 39.2H35.98C35.98 39.2 35.98 41.2794 35.98 42C35.98 43.5456 37.1089 44.8 38.5 44.8C39.891 44.8 41.02 43.5456 41.02 42C41.02 41.2794 41.02 39.2 41.02 39.2Z" fill="black" />
                                    <path opacity="0.35" d="M19.18 35.4666H15.82C13.9636 35.4666 12.46 33.796 12.46 31.7333V14.9333C12.46 12.8706 13.9636 11.2 15.82 11.2H19.18C21.0364 11.2 22.54 12.8706 22.54 14.9333V31.7333C22.54 33.796 21.0364 35.4666 19.18 35.4666Z" fill="black" />
                                    <path d="M29.26 35.4664H25.9C24.9726 35.4664 24.22 34.6302 24.22 33.5998V16.7998C24.22 15.7694 24.9726 14.9331 25.9 14.9331H29.26C30.1873 14.9331 30.94 15.7694 30.94 16.7998V33.5998C30.94 34.6302 30.1873 35.4664 29.26 35.4664Z" fill="black" />
                                    <path opacity="0.35" d="M41.136 34.7218L40.165 35.2127C38.8815 35.8605 37.3695 35.2314 36.7865 33.8053L31.2375 20.2458C30.6545 18.8197 31.2207 17.1397 32.5042 16.4919L33.4752 16.001C34.7587 15.3533 36.2707 15.9823 36.8537 17.4085L42.4028 30.9679C42.9857 32.3922 42.4195 34.0722 41.136 34.7218Z" fill="black" />
                                    <path d="M19.1801 26.1333H15.8201V29.8666H19.1801V26.1333Z" fill="black" />
                                    <path d="M19.18 29.8666C20.1078 29.8666 20.86 29.0309 20.86 28C20.86 26.969 20.1078 26.1333 19.18 26.1333C18.2522 26.1333 17.5 26.969 17.5 28C17.5 29.0309 18.2522 29.8666 19.18 29.8666Z" fill="black" />
                                    <path d="M15.8199 29.8666C16.7477 29.8666 17.4999 29.0309 17.4999 28C17.4999 26.969 16.7477 26.1333 15.8199 26.1333C14.8921 26.1333 14.1399 26.969 14.1399 28C14.1399 29.0309 14.8921 29.8666 15.8199 29.8666Z" fill="black" />
                                </svg>
                            </Link>}



                    </li>
                    <li className="py-1 px-3 cursor-pointer relative w-20 flex justify-center">
                        {path == "shop" ?
                            <Link to="/shop">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path opacity="0.35" d="M47.709 24.1103C46.8205 23.022 45.5045 22.4004 44.1007 22.4004H12.3674C10.9637 22.4004 9.64765 23.022 8.75912 24.1103C7.86872 25.1967 7.51592 26.6079 7.79218 27.9836L9.95752 38.7991C10.6538 42.2767 13.7319 44.8004 17.2786 44.8004H39.1895C42.7343 44.8004 45.8143 42.2767 46.5106 38.7991L48.6759 27.9836C48.9522 26.606 48.5994 25.1948 47.709 24.1103Z" fill="#38579E" />
                                    <path d="M37.5673 29.8667C37.5673 28.8363 36.7311 28 35.7007 28C34.6703 28 33.834 28.8363 33.834 29.8667C33.834 30.3464 33.834 36.8536 33.834 37.3333C33.834 38.3637 34.6703 39.2 35.7007 39.2C36.7311 39.2 37.5673 38.3637 37.5673 37.3333C37.5673 36.8536 37.5673 30.3464 37.5673 29.8667Z" fill="#38579E" />
                                    <path d="M22.6342 29.8667C22.6342 28.8363 21.7979 28 20.7675 28C19.7371 28 18.9009 28.8363 18.9009 29.8667C18.9009 30.3464 18.9009 36.8536 18.9009 37.3333C18.9009 38.3637 19.7371 39.2 20.7675 39.2C21.7979 39.2 22.6342 38.3637 22.6342 37.3333C22.6342 36.8536 22.6342 30.3464 22.6342 29.8667Z" fill="#38579E" />
                                    <path d="M30.1005 29.8667C30.1005 28.8363 29.2643 28 28.2339 28C27.2035 28 26.3672 28.8363 26.3672 29.8667C26.3672 30.3464 26.3672 36.8536 26.3672 37.3333C26.3672 38.3637 27.2035 39.2 28.2339 39.2C29.2643 39.2 30.1005 38.3637 30.1005 37.3333C30.1005 36.8536 30.1005 30.3464 30.1005 29.8667Z" fill="#38579E" />
                                    <path d="M19.9497 22.4002L21.4635 16.3466C21.6707 15.5141 22.4155 14.9335 23.2723 14.9335H33.1937C34.0523 14.9335 34.7971 15.5141 35.0043 16.3466L36.5182 22.4002H40.3673L38.6275 15.4413C38.0041 12.9493 35.7641 11.2002 33.1955 11.2002H23.2723C20.7019 11.2002 18.4619 12.9493 17.8403 15.4413L16.1006 22.4002H19.9497Z" fill="#38579E" />
                                </svg>
                                <div className="absolute w-3 h-full bg-[#38579E] top-0 left-0 rounded-full -translate-x-1/2">

                                </div>
                            </Link>
                            :
                            <Link to="/shop">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path opacity="0.35" d="M47.7087 24.1098C46.8202 23.0215 45.5042 22.3999 44.1005 22.3999H12.3671C10.9634 22.3999 9.64741 23.0215 8.75887 24.1098C7.86847 25.1962 7.51567 26.6074 7.79194 27.9831L9.95727 38.7986C10.6535 42.2762 13.7317 44.7999 17.2783 44.7999H39.1893C42.7341 44.7999 45.8141 42.2762 46.5103 38.7986L48.6757 27.9831C48.9519 26.6055 48.5991 25.1943 47.7087 24.1098Z" fill="black" />
                                    <path d="M37.5671 29.8667C37.5671 28.8363 36.7308 28 35.7004 28C34.67 28 33.8337 28.8363 33.8337 29.8667C33.8337 30.3464 33.8337 36.8536 33.8337 37.3333C33.8337 38.3637 34.67 39.2 35.7004 39.2C36.7308 39.2 37.5671 38.3637 37.5671 37.3333C37.5671 36.8536 37.5671 30.3464 37.5671 29.8667Z" fill="black" />
                                    <path d="M22.6337 29.8667C22.6337 28.8363 21.7975 28 20.7671 28C19.7367 28 18.9004 28.8363 18.9004 29.8667C18.9004 30.3464 18.9004 36.8536 18.9004 37.3333C18.9004 38.3637 19.7367 39.2 20.7671 39.2C21.7975 39.2 22.6337 38.3637 22.6337 37.3333C22.6337 36.8536 22.6337 30.3464 22.6337 29.8667Z" fill="black" />
                                    <path d="M30.1005 29.8667C30.1005 28.8363 29.2643 28 28.2339 28C27.2035 28 26.3672 28.8363 26.3672 29.8667C26.3672 30.3464 26.3672 36.8536 26.3672 37.3333C26.3672 38.3637 27.2035 39.2 28.2339 39.2C29.2643 39.2 30.1005 38.3637 30.1005 37.3333C30.1005 36.8536 30.1005 30.3464 30.1005 29.8667Z" fill="black" />
                                    <path d="M19.9497 22.4L21.4635 16.3464C21.6707 15.5138 22.4155 14.9333 23.2723 14.9333H33.1937C34.0523 14.9333 34.7971 15.5138 35.0043 16.3464L36.5182 22.4H40.3673L38.6275 15.441C38.0041 12.949 35.7641 11.2 33.1955 11.2H23.2723C20.7019 11.2 18.4619 12.949 17.8403 15.441L16.1006 22.4H19.9497Z" fill="black" />
                                </svg>
                            </Link>}

                    </li>
                    <li className="py-1 px-3 cursor-pointer relative w-20 flex justify-center">
                        {
                            path == "chatroom" ?
                                <Link to="/chatroom">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                        <path opacity="0.35" d="M37.6167 27.4669C37.6167 30.27 35.3448 32.5419 32.5417 32.5419H17.2659C16.2035 32.5419 15.1699 32.8735 14.3054 33.4892L9.5349 36.8895C7.1158 38.615 3.7832 36.8895 3.7832 33.946V10.5501C3.7832 7.74702 6.05512 5.4751 8.85823 5.4751H32.5417C35.3448 5.4751 37.6167 7.74702 37.6167 10.5501V27.4669Z" fill="#38579E" />
                                        <path d="M20.7001 21.5462C22.1015 21.5462 23.2376 20.4101 23.2376 19.0087C23.2376 17.6073 22.1015 16.4712 20.7001 16.4712C19.2987 16.4712 18.1626 17.6073 18.1626 19.0087C18.1626 20.4101 19.2987 21.5462 20.7001 21.5462Z" fill="#38579E" />
                                        <path d="M29.1589 21.5462C30.5603 21.5462 31.6964 20.4101 31.6964 19.0087C31.6964 17.6073 30.5603 16.4712 29.1589 16.4712C27.7574 16.4712 26.6213 17.6073 26.6213 19.0087C26.6213 20.4101 27.7574 21.5462 29.1589 21.5462Z" fill="#38579E" />
                                        <path d="M12.2419 21.5462C13.6433 21.5462 14.7794 20.4101 14.7794 19.0087C14.7794 17.6073 13.6433 16.4712 12.2419 16.4712C10.8404 16.4712 9.70435 17.6073 9.70435 19.0087C9.70435 20.4101 10.8404 21.5462 12.2419 21.5462Z" fill="#38579E" />
                                    </svg>
                                    <div className="absolute w-3 h-full bg-[#38579E] top-0 left-0 rounded-full -translate-x-1/2">

                                    </div>
                                </Link>
                                :
                                <Link to="/chatroom">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                        <path opacity="0.35" d="M37.6167 27.4666C37.6167 30.2697 35.3448 32.5417 32.5417 32.5417H17.2659C16.2035 32.5417 15.1699 32.8732 14.3054 33.489L9.5349 36.8893C7.1158 38.6148 3.7832 36.8893 3.7832 33.9458V10.5499C3.7832 7.74677 6.05512 5.47485 8.85823 5.47485H32.5417C35.3448 5.47485 37.6167 7.74677 37.6167 10.5499V27.4666Z" fill="black" />
                                        <path d="M20.7001 21.546C22.1015 21.546 23.2376 20.4099 23.2376 19.0085C23.2376 17.607 22.1015 16.4709 20.7001 16.4709C19.2987 16.4709 18.1626 17.607 18.1626 19.0085C18.1626 20.4099 19.2987 21.546 20.7001 21.546Z" fill="black" />
                                        <path d="M29.1589 21.546C30.5603 21.546 31.6964 20.4099 31.6964 19.0085C31.6964 17.607 30.5603 16.4709 29.1589 16.4709C27.7574 16.4709 26.6213 17.607 26.6213 19.0085C26.6213 20.4099 27.7574 21.546 29.1589 21.546Z" fill="black" />
                                        <path d="M12.2419 21.546C13.6433 21.546 14.7794 20.4099 14.7794 19.0085C14.7794 17.607 13.6433 16.4709 12.2419 16.4709C10.8404 16.4709 9.70435 17.607 9.70435 19.0085C9.70435 20.4099 10.8404 21.546 12.2419 21.546Z" fill="black" />
                                    </svg>
                                </Link>
                        }

                    </li>
                    <li className="py-1 px-3 cursor-pointer relative w-20 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                            <path d="M27.9998 16.6347C28.0026 15.9515 27.4482 15.3971 26.765 15.3999L19.3142 15.4335C18.3202 15.4377 17.826 16.6389 18.5288 17.3417L26.0566 24.8695C26.7594 25.5723 27.9606 25.0781 27.9648 24.0841L27.9998 16.6347Z" fill="black" />
                            <path opacity="0.35" d="M19.6 42H16.8C15.253 42 14 40.747 14 39.2V37.8C14 36.253 15.253 35 16.8 35H19.6C21.147 35 22.4 36.253 22.4 37.8V39.2C22.4 40.747 21.147 42 19.6 42Z" fill="black" />
                            <path opacity="0.35" d="M29.4 42H26.6C25.053 42 23.8 40.747 23.8 39.2V30.8C23.8 29.253 25.053 28 26.6 28H29.4C30.947 28 32.2 29.253 32.2 30.8V39.2C32.2 40.747 30.947 42 29.4 42Z" fill="black" />
                            <path opacity="0.35" d="M39.2001 41.9999H36.4001C34.8531 41.9999 33.6001 40.7469 33.6001 39.1999V18.1999C33.6001 16.6529 34.8531 15.3999 36.4001 15.3999H39.2001C40.7471 15.3999 42.0001 16.6529 42.0001 18.1999V39.1999C42.0001 40.7469 40.7471 41.9999 39.2001 41.9999Z" fill="black" />
                            <path d="M16.4892 29.4C15.8522 29.4 15.2152 29.1564 14.7294 28.6706C13.7578 27.699 13.7578 26.1226 14.7294 25.151L20.951 18.9294C21.9226 17.9578 23.499 17.9578 24.4706 18.9294C25.4422 19.901 25.4422 21.4774 24.4706 22.449L18.249 28.6706C17.7632 29.1564 17.1262 29.4 16.4892 29.4Z" fill="black" />
                        </svg>
                    </li>
                    <li className="py-1 px-3 cursor-pointer relative w-20 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                            <path opacity="0.35" d="M40 46H16C12.686 46 10 43.314 10 40V16H46V40C46 43.314 43.314 46 40 46Z" fill="black" />
                            <path d="M40 10H16C12.686 10 10 12.686 10 16V18H46V16C46 12.686 43.314 10 40 10Z" fill="black" />
                            <path d="M25.9998 40C25.9998 41.104 25.1038 42 23.9998 42C22.8958 42 21.9998 41.104 21.9998 40C21.9998 38.896 22.8958 38 23.9998 38C25.1038 38 25.9998 38.896 25.9998 40ZM15.9998 38C14.8958 38 13.9998 38.896 13.9998 40C13.9998 41.104 14.8958 42 15.9998 42C17.1038 42 17.9998 41.104 17.9998 40C17.9998 38.896 17.1038 38 15.9998 38ZM19.9998 22C16.6858 22 13.9998 24.686 13.9998 28C13.9998 31.314 16.6858 34 19.9998 34C23.3138 34 25.9998 31.314 25.9998 28C25.9998 24.686 23.3138 22 19.9998 22ZM35.9998 30C32.6858 30 29.9998 32.686 29.9998 36C29.9998 39.314 32.6858 42 35.9998 42C39.3138 42 41.9998 39.314 41.9998 36C41.9998 32.686 39.3138 30 35.9998 30ZM39.9998 22C38.8958 22 37.9998 22.896 37.9998 24C37.9998 25.104 38.8958 26 39.9998 26C41.1038 26 41.9998 25.104 41.9998 24C41.9998 22.896 41.1038 22 39.9998 22ZM31.9998 22C30.8958 22 29.9998 22.896 29.9998 24C29.9998 25.104 30.8958 26 31.9998 26C33.1038 26 33.9998 25.104 33.9998 24C33.9998 22.896 33.1038 22 31.9998 22Z" fill="black" />
                        </svg>
                    </li>
                    <li className="py-1 px-3 cursor-pointer relative w-20 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                            <path d="M40.6 18.2C40.0596 18.2 17.3404 18.2 16.8 18.2C15.6408 18.2 14.7 19.1408 14.7 20.3C14.7 21.4592 15.6408 22.4 16.8 22.4C17.3404 22.4 40.0596 22.4 40.6 22.4C41.7592 22.4 42.7 21.4592 42.7 20.3C42.7 19.1408 41.7592 18.2 40.6 18.2Z" fill="black" />
                            <path opacity="0.35" d="M17.5 22.3999L22.5526 28.4633C23.8112 29.9725 24.5 31.8765 24.5 33.8407V41.4063C24.5 42.7755 25.4898 43.9431 26.8394 44.1685L30.4542 44.7705C31.7352 44.9847 32.9 43.9977 32.9 42.6999V33.8421C32.9 31.8765 33.5888 29.9739 34.8474 28.4647L39.9 22.3999H17.5Z" fill="black" />
                            <path d="M27.086 12.46L24.4806 15.1144C24.1054 15.4952 23.495 15.4952 23.1212 15.1144L20.5144 12.46C20.0552 11.9924 20.3828 11.2 21.0338 11.2H26.5652C27.2176 11.2 27.5452 11.9924 27.086 12.46Z" fill="black" />
                            <path d="M30.3144 14.14L32.9212 11.4856C33.2964 11.1048 33.9068 11.1048 34.2806 11.4856L36.886 14.14C37.3452 14.6076 37.0176 15.4 36.3666 15.4H30.8352C30.1828 15.4 29.8552 14.6076 30.3144 14.14Z" fill="black" />
                        </svg>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default MainMenu;