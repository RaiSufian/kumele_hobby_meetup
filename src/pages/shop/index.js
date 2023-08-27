import Dashboardlayout from "../../layouts/dashboardlayout";
import { useState, useEffect } from "react";
import ShoppingCard from "../../components/shoppingCard";
import Addpayment from "../../components/addpayment";
const Shop = () => {
    const [noteModal, setNotemodel] = useState(false);
    const [payModal, setPayModal] = useState(false);
    const [shop, setShop] = useState("sub");
    const subscript1 = [
        {
            name: "Events ads",
            icons: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M23.4615 16.7952C23.0349 16.7952 22.6082 16.6319 22.2832 16.3069C21.6315 15.6552 21.6315 14.6019 22.2832 13.9502L23.4615 12.7719C24.0915 12.1419 24.9282 11.7952 25.8182 11.7952H26.7949C26.7949 9.95691 28.2899 8.46191 30.1282 8.46191V6.79525C30.1282 4.95691 31.6232 3.46191 33.4615 3.46191H35.1282C36.0482 3.46191 36.7949 4.20691 36.7949 5.12858C36.7949 6.05025 36.0482 6.79525 35.1282 6.79525H33.4615V8.46191C33.4615 10.3002 31.9665 11.7952 30.1282 11.7952C30.1282 13.6336 28.6332 15.1286 26.7949 15.1286H25.8182L24.6399 16.3069C24.3149 16.6319 23.8882 16.7952 23.4615 16.7952Z" fill="black" />
                <path opacity="0.35" d="M24.6198 27.3034L12.9531 15.6367C12.3014 14.985 11.2481 14.985 10.5964 15.6367C10.0298 16.2034 9.98642 17.0634 10.4081 17.71L5.28642 31.7567C4.55642 33.7584 6.49809 35.7 8.49976 34.97L22.5481 29.8484C22.8231 30.0284 23.1264 30.1484 23.4431 30.1484C23.8698 30.1484 24.2964 29.985 24.6214 29.66C25.2698 29.01 25.2698 27.955 24.6198 27.3034Z" fill="black" />
                <path d="M29.2954 36.7949C30.6761 36.7949 31.7954 35.6756 31.7954 34.2949C31.7954 32.9142 30.6761 31.7949 29.2954 31.7949C27.9147 31.7949 26.7954 32.9142 26.7954 34.2949C26.7954 35.6756 27.9147 36.7949 29.2954 36.7949Z" fill="black" />
                <path d="M35.9614 18.4619C37.3421 18.4619 38.4614 17.3426 38.4614 15.9619C38.4614 14.5812 37.3421 13.4619 35.9614 13.4619C34.5807 13.4619 33.4614 14.5812 33.4614 15.9619C33.4614 17.3426 34.5807 18.4619 35.9614 18.4619Z" fill="black" />
                <path d="M5.96143 15.1284C7.34214 15.1284 8.46143 14.0091 8.46143 12.6284C8.46143 11.2477 7.34214 10.1284 5.96143 10.1284C4.58071 10.1284 3.46143 11.2477 3.46143 12.6284C3.46143 14.0091 4.58071 15.1284 5.96143 15.1284Z" fill="black" />
                <path d="M24.2954 6.79492C25.6761 6.79492 26.7954 5.67563 26.7954 4.29492C26.7954 2.91421 25.6761 1.79492 24.2954 1.79492C22.9147 1.79492 21.7954 2.91421 21.7954 4.29492C21.7954 5.67563 22.9147 6.79492 24.2954 6.79492Z" fill="black" />
                <path d="M10.9598 3.46191C9.57976 3.46191 8.46143 4.58191 8.46143 5.96191C8.46143 7.34191 9.58143 8.46191 10.9614 8.46191H12.2764C13.8514 8.46191 15.1281 9.73858 15.1281 11.3136V13.4619C15.1281 14.3819 15.8748 15.1286 16.7948 15.1286C17.7148 15.1286 18.4614 14.3819 18.4614 13.4619V10.1286C18.4614 6.44691 15.4764 3.46191 11.7948 3.46191H10.9598Z" fill="black" />
                <path d="M36.7951 27.6301C36.7951 29.0101 35.6751 30.1284 34.2951 30.1284C32.9151 30.1284 31.7951 29.0084 31.7951 27.6284V26.3134C31.7951 24.7384 30.5184 23.4618 28.9434 23.4618H26.7951C25.8751 23.4618 25.1284 22.7151 25.1284 21.7951C25.1284 20.8751 25.8751 20.1284 26.7951 20.1284H30.1284C33.8101 20.1284 36.7951 23.1134 36.7951 26.7951V27.6301Z" fill="black" />
            </svg>,
            price: 7.07,
            des: "Purchase 7 days pre-event AD",
            active: false,
            button: "Buy now"

        },

    ]
    const subscript2 = [
        {
            name: "Location Change",
            icons: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <g clip-path="url(#clip0_1_3434)">
                    <path d="M30.1287 10.1284H26.7954V15.1284H30.1287V10.1284Z" fill="black" />
                    <path d="M20.1287 10.1284H16.7954V15.1284H20.1287V10.1284Z" fill="black" />
                    <path d="M31.7948 11.7952H15.1281C14.2064 11.7952 13.4614 11.0486 13.4614 10.1286C13.4614 9.20858 14.2064 8.46191 15.1281 8.46191H31.7948C32.7164 8.46191 33.4614 9.20858 33.4614 10.1286C33.4614 11.0486 32.7164 11.7952 31.7948 11.7952Z" fill="black" />
                    <path d="M36.7951 33.4619C35.8734 33.4619 35.1284 32.7152 35.1284 31.7952V15.1286C35.1284 14.2086 35.8734 13.4619 36.7951 13.4619C37.7168 13.4619 38.4618 14.2086 38.4618 15.1286V31.7952C38.4618 32.7152 37.7168 33.4619 36.7951 33.4619Z" fill="black" />
                    <path d="M38.4621 25.1283C39.3826 25.1283 40.1287 24.3821 40.1287 23.4616C40.1287 22.5411 39.3826 21.7949 38.4621 21.7949C37.5416 21.7949 36.7954 22.5411 36.7954 23.4616C36.7954 24.3821 37.5416 25.1283 38.4621 25.1283Z" fill="black" />
                    <path opacity="0.35" d="M38.4234 22.6433C38.0101 18.3099 34.1234 15.1283 29.7701 15.1283H26.7951V18.2833C26.7951 19.9433 25.6601 21.4833 24.0218 21.7499C21.9334 22.0883 20.1284 20.4866 20.1284 18.4616C20.1284 17.8516 20.1284 15.1283 20.1284 15.1283H16.7951L10.1284 18.4616L6.25008 13.3083C5.65508 12.3983 4.63008 11.7949 3.46175 11.7949C1.62008 11.7949 0.128418 13.2866 0.128418 15.1283C0.128418 15.3699 0.156751 15.6033 0.205085 15.8299L0.898418 22.7849C1.40675 27.8999 5.71008 31.7949 10.8484 31.7949H30.1284C35.0001 31.7949 38.8967 27.6133 38.4234 22.6433Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_1_3434">
                        <rect width="40" height="40" fill="white" transform="translate(0.128418 0.128418)" />
                    </clipPath>
                </defs>
            </svg>,
            price: 8.02,
            des: "Unlimited location change, valid for 30 days",
            active: true,
            button: "Active"

        },
        {
            name: "Monthly gold",
            icons: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M23.4615 16.7952C23.0349 16.7952 22.6082 16.6319 22.2832 16.3069C21.6315 15.6552 21.6315 14.6019 22.2832 13.9502L23.4615 12.7719C24.0915 12.1419 24.9282 11.7952 25.8182 11.7952H26.7949C26.7949 9.95691 28.2899 8.46191 30.1282 8.46191V6.79525C30.1282 4.95691 31.6232 3.46191 33.4615 3.46191H35.1282C36.0482 3.46191 36.7949 4.20691 36.7949 5.12858C36.7949 6.05025 36.0482 6.79525 35.1282 6.79525H33.4615V8.46191C33.4615 10.3002 31.9665 11.7952 30.1282 11.7952C30.1282 13.6336 28.6332 15.1286 26.7949 15.1286H25.8182L24.6399 16.3069C24.3149 16.6319 23.8882 16.7952 23.4615 16.7952Z" fill="black" />
                <path opacity="0.35" d="M24.6198 27.3034L12.9531 15.6367C12.3014 14.985 11.2481 14.985 10.5964 15.6367C10.0298 16.2034 9.98642 17.0634 10.4081 17.71L5.28642 31.7567C4.55642 33.7584 6.49809 35.7 8.49976 34.97L22.5481 29.8484C22.8231 30.0284 23.1264 30.1484 23.4431 30.1484C23.8698 30.1484 24.2964 29.985 24.6214 29.66C25.2698 29.01 25.2698 27.955 24.6198 27.3034Z" fill="black" />
                <path d="M29.2954 36.7949C30.6761 36.7949 31.7954 35.6756 31.7954 34.2949C31.7954 32.9142 30.6761 31.7949 29.2954 31.7949C27.9147 31.7949 26.7954 32.9142 26.7954 34.2949C26.7954 35.6756 27.9147 36.7949 29.2954 36.7949Z" fill="black" />
                <path d="M35.9614 18.4619C37.3421 18.4619 38.4614 17.3426 38.4614 15.9619C38.4614 14.5812 37.3421 13.4619 35.9614 13.4619C34.5807 13.4619 33.4614 14.5812 33.4614 15.9619C33.4614 17.3426 34.5807 18.4619 35.9614 18.4619Z" fill="black" />
                <path d="M5.96143 15.1284C7.34214 15.1284 8.46143 14.0091 8.46143 12.6284C8.46143 11.2477 7.34214 10.1284 5.96143 10.1284C4.58071 10.1284 3.46143 11.2477 3.46143 12.6284C3.46143 14.0091 4.58071 15.1284 5.96143 15.1284Z" fill="black" />
                <path d="M24.2954 6.79492C25.6761 6.79492 26.7954 5.67563 26.7954 4.29492C26.7954 2.91421 25.6761 1.79492 24.2954 1.79492C22.9147 1.79492 21.7954 2.91421 21.7954 4.29492C21.7954 5.67563 22.9147 6.79492 24.2954 6.79492Z" fill="black" />
                <path d="M10.9598 3.46191C9.57976 3.46191 8.46143 4.58191 8.46143 5.96191C8.46143 7.34191 9.58143 8.46191 10.9614 8.46191H12.2764C13.8514 8.46191 15.1281 9.73858 15.1281 11.3136V13.4619C15.1281 14.3819 15.8748 15.1286 16.7948 15.1286C17.7148 15.1286 18.4614 14.3819 18.4614 13.4619V10.1286C18.4614 6.44691 15.4764 3.46191 11.7948 3.46191H10.9598Z" fill="black" />
                <path d="M36.7951 27.6301C36.7951 29.0101 35.6751 30.1284 34.2951 30.1284C32.9151 30.1284 31.7951 29.0084 31.7951 27.6284V26.3134C31.7951 24.7384 30.5184 23.4618 28.9434 23.4618H26.7951C25.8751 23.4618 25.1284 22.7151 25.1284 21.7951C25.1284 20.8751 25.8751 20.1284 26.7951 20.1284H30.1284C33.8101 20.1284 36.7951 23.1134 36.7951 26.7951V27.6301Z" fill="black" />
            </svg>,
            price: 15.00,
            des: "Get 30 days ads free subcription, subcription is automatic, cancel before the new month",
            active: 0,
            button: "Buy now"

        },
        {
            name: "Yearly Gold",
            icons: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M23.4615 16.7952C23.0349 16.7952 22.6082 16.6319 22.2832 16.3069C21.6315 15.6552 21.6315 14.6019 22.2832 13.9502L23.4615 12.7719C24.0915 12.1419 24.9282 11.7952 25.8182 11.7952H26.7949C26.7949 9.95691 28.2899 8.46191 30.1282 8.46191V6.79525C30.1282 4.95691 31.6232 3.46191 33.4615 3.46191H35.1282C36.0482 3.46191 36.7949 4.20691 36.7949 5.12858C36.7949 6.05025 36.0482 6.79525 35.1282 6.79525H33.4615V8.46191C33.4615 10.3002 31.9665 11.7952 30.1282 11.7952C30.1282 13.6336 28.6332 15.1286 26.7949 15.1286H25.8182L24.6399 16.3069C24.3149 16.6319 23.8882 16.7952 23.4615 16.7952Z" fill="black" />
                <path opacity="0.35" d="M24.6198 27.3034L12.9531 15.6367C12.3014 14.985 11.2481 14.985 10.5964 15.6367C10.0298 16.2034 9.98642 17.0634 10.4081 17.71L5.28642 31.7567C4.55642 33.7584 6.49809 35.7 8.49976 34.97L22.5481 29.8484C22.8231 30.0284 23.1264 30.1484 23.4431 30.1484C23.8698 30.1484 24.2964 29.985 24.6214 29.66C25.2698 29.01 25.2698 27.955 24.6198 27.3034Z" fill="black" />
                <path d="M29.2954 36.7949C30.6761 36.7949 31.7954 35.6756 31.7954 34.2949C31.7954 32.9142 30.6761 31.7949 29.2954 31.7949C27.9147 31.7949 26.7954 32.9142 26.7954 34.2949C26.7954 35.6756 27.9147 36.7949 29.2954 36.7949Z" fill="black" />
                <path d="M35.9614 18.4619C37.3421 18.4619 38.4614 17.3426 38.4614 15.9619C38.4614 14.5812 37.3421 13.4619 35.9614 13.4619C34.5807 13.4619 33.4614 14.5812 33.4614 15.9619C33.4614 17.3426 34.5807 18.4619 35.9614 18.4619Z" fill="black" />
                <path d="M5.96143 15.1284C7.34214 15.1284 8.46143 14.0091 8.46143 12.6284C8.46143 11.2477 7.34214 10.1284 5.96143 10.1284C4.58071 10.1284 3.46143 11.2477 3.46143 12.6284C3.46143 14.0091 4.58071 15.1284 5.96143 15.1284Z" fill="black" />
                <path d="M24.2954 6.79492C25.6761 6.79492 26.7954 5.67563 26.7954 4.29492C26.7954 2.91421 25.6761 1.79492 24.2954 1.79492C22.9147 1.79492 21.7954 2.91421 21.7954 4.29492C21.7954 5.67563 22.9147 6.79492 24.2954 6.79492Z" fill="black" />
                <path d="M10.9598 3.46191C9.57976 3.46191 8.46143 4.58191 8.46143 5.96191C8.46143 7.34191 9.58143 8.46191 10.9614 8.46191H12.2764C13.8514 8.46191 15.1281 9.73858 15.1281 11.3136V13.4619C15.1281 14.3819 15.8748 15.1286 16.7948 15.1286C17.7148 15.1286 18.4614 14.3819 18.4614 13.4619V10.1286C18.4614 6.44691 15.4764 3.46191 11.7948 3.46191H10.9598Z" fill="black" />
                <path d="M36.7951 27.6301C36.7951 29.0101 35.6751 30.1284 34.2951 30.1284C32.9151 30.1284 31.7951 29.0084 31.7951 27.6284V26.3134C31.7951 24.7384 30.5184 23.4618 28.9434 23.4618H26.7951C25.8751 23.4618 25.1284 22.7151 25.1284 21.7951C25.1284 20.8751 25.8751 20.1284 26.7951 20.1284H30.1284C33.8101 20.1284 36.7951 23.1134 36.7951 26.7951V27.6301Z" fill="black" />
            </svg>,
            price: 120.00,
            des: "Create 2 paid activities for free with 20 guest max / month. Unlimited location change with ADs free experience. 30% off on in-app purchases & Guest invites. Subscription is automatic, cancel before the new year.",
            active: false,
            button: "Buy now"

        },
    ]
    const guest = [
        {
            name: "6-20 guests",
            icons: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M8.46148 11.795H31.7948C32.6781 11.795 33.4948 12.0434 34.2148 12.445C34.5881 11.745 35.1215 11.1317 35.7931 10.675L35.3031 8.80003C34.6181 6.17503 31.9348 4.60336 29.3098 5.28836L7.13314 11.0817C4.75314 11.7034 3.25814 13.9667 3.50814 16.34C3.73981 13.795 5.85481 11.795 8.46148 11.795Z" fill="black" />
                <path opacity="0.35" d="M36.7948 18.7683V16.7949C36.7948 14.0333 34.5564 11.7949 31.7948 11.7949H8.46143C5.69976 11.7949 3.46143 14.0333 3.46143 16.7949V18.7683C5.39976 19.4566 6.79476 21.2883 6.79476 23.4616C6.79476 25.6349 5.39976 27.4666 3.46143 28.1549V30.1283C3.46143 32.8899 5.69976 35.1283 8.46143 35.1283H31.7948C34.5564 35.1283 36.7948 32.8899 36.7948 30.1283V28.1549C34.8564 27.4666 33.4614 25.6349 33.4614 23.4616C33.4614 21.2883 34.8564 19.4566 36.7948 18.7683Z" fill="black" />
            </svg>,
            price: 7.07,
            des: "Number of guests valid only for this event",
            active: false,
            button: "buy now",
        },
        {
            name: "21-40 guests",
            icons: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M8.46148 11.795H31.7948C32.6781 11.795 33.4948 12.0434 34.2148 12.445C34.5881 11.745 35.1215 11.1317 35.7931 10.675L35.3031 8.80003C34.6181 6.17503 31.9348 4.60336 29.3098 5.28836L7.13314 11.0817C4.75314 11.7034 3.25814 13.9667 3.50814 16.34C3.73981 13.795 5.85481 11.795 8.46148 11.795Z" fill="black" />
                <path opacity="0.35" d="M36.7948 18.7683V16.7949C36.7948 14.0333 34.5564 11.7949 31.7948 11.7949H8.46143C5.69976 11.7949 3.46143 14.0333 3.46143 16.7949V18.7683C5.39976 19.4566 6.79476 21.2883 6.79476 23.4616C6.79476 25.6349 5.39976 27.4666 3.46143 28.1549V30.1283C3.46143 32.8899 5.69976 35.1283 8.46143 35.1283H31.7948C34.5564 35.1283 36.7948 32.8899 36.7948 30.1283V28.1549C34.8564 27.4666 33.4614 25.6349 33.4614 23.4616C33.4614 21.2883 34.8564 19.4566 36.7948 18.7683Z" fill="black" />
            </svg>,
            price: 10.61,
            des: "Number of guests valid only for this event",
            active: true,
            button: "Active",
        },
        {
            name: "41-60 guests",
            icons: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M8.46148 11.795H31.7948C32.6781 11.795 33.4948 12.0434 34.2148 12.445C34.5881 11.745 35.1215 11.1317 35.7931 10.675L35.3031 8.80003C34.6181 6.17503 31.9348 4.60336 29.3098 5.28836L7.13314 11.0817C4.75314 11.7034 3.25814 13.9667 3.50814 16.34C3.73981 13.795 5.85481 11.795 8.46148 11.795Z" fill="black" />
                <path opacity="0.35" d="M36.7948 18.7683V16.7949C36.7948 14.0333 34.5564 11.7949 31.7948 11.7949H8.46143C5.69976 11.7949 3.46143 14.0333 3.46143 16.7949V18.7683C5.39976 19.4566 6.79476 21.2883 6.79476 23.4616C6.79476 25.6349 5.39976 27.4666 3.46143 28.1549V30.1283C3.46143 32.8899 5.69976 35.1283 8.46143 35.1283H31.7948C34.5564 35.1283 36.7948 32.8899 36.7948 30.1283V28.1549C34.8564 27.4666 33.4614 25.6349 33.4614 23.4616C33.4614 21.2883 34.8564 19.4566 36.7948 18.7683Z" fill="black" />
            </svg>,
            price: 14.15,
            des: "Number of guests valid only for this event",
            active: false,
            button: "Buy now",
        },
        {
            name: "61-80 guests",
            icons: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M8.46148 11.795H31.7948C32.6781 11.795 33.4948 12.0434 34.2148 12.445C34.5881 11.745 35.1215 11.1317 35.7931 10.675L35.3031 8.80003C34.6181 6.17503 31.9348 4.60336 29.3098 5.28836L7.13314 11.0817C4.75314 11.7034 3.25814 13.9667 3.50814 16.34C3.73981 13.795 5.85481 11.795 8.46148 11.795Z" fill="black" />
                <path opacity="0.35" d="M36.7948 18.7683V16.7949C36.7948 14.0333 34.5564 11.7949 31.7948 11.7949H8.46143C5.69976 11.7949 3.46143 14.0333 3.46143 16.7949V18.7683C5.39976 19.4566 6.79476 21.2883 6.79476 23.4616C6.79476 25.6349 5.39976 27.4666 3.46143 28.1549V30.1283C3.46143 32.8899 5.69976 35.1283 8.46143 35.1283H31.7948C34.5564 35.1283 36.7948 32.8899 36.7948 30.1283V28.1549C34.8564 27.4666 33.4614 25.6349 33.4614 23.4616C33.4614 21.2883 34.8564 19.4566 36.7948 18.7683Z" fill="black" />
            </svg>,
            price: 17.69,
            des: "Number of guests valid only for this event",
            active: false,
            button: "Buy now",
        },
        {
            name: "80+ guests",
            icons: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M8.46148 11.795H31.7948C32.6781 11.795 33.4948 12.0434 34.2148 12.445C34.5881 11.745 35.1215 11.1317 35.7931 10.675L35.3031 8.80003C34.6181 6.17503 31.9348 4.60336 29.3098 5.28836L7.13314 11.0817C4.75314 11.7034 3.25814 13.9667 3.50814 16.34C3.73981 13.795 5.85481 11.795 8.46148 11.795Z" fill="black" />
                <path opacity="0.35" d="M36.7948 18.7683V16.7949C36.7948 14.0333 34.5564 11.7949 31.7948 11.7949H8.46143C5.69976 11.7949 3.46143 14.0333 3.46143 16.7949V18.7683C5.39976 19.4566 6.79476 21.2883 6.79476 23.4616C6.79476 25.6349 5.39976 27.4666 3.46143 28.1549V30.1283C3.46143 32.8899 5.69976 35.1283 8.46143 35.1283H31.7948C34.5564 35.1283 36.7948 32.8899 36.7948 30.1283V28.1549C34.8564 27.4666 33.4614 25.6349 33.4614 23.4616C33.4614 21.2883 34.8564 19.4566 36.7948 18.7683Z" fill="black" />
            </svg>,
            price: 21.23,
            des: "Number of guests valid only for this event",
            active: false,
            button: "Buy now",
        },
    ]
    useEffect(() => {
        const timer = setTimeout(() => {
            setNotemodel(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            < Dashboardlayout>
                <div className="min-h-screen  px-4 mt-5">
                    <div className="bg-[#e3e3e3] rounded-lg w-96 p-1 relative">
                        <div className=" flex relative z-20">
                            <div className="w-1/2 h-9 text-lg font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setShop("sub") }}>
                                Subscriptions
                            </div>
                            <div className="w-1/2 h-9 text-lg font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setShop("guest") }}>
                                Guest tickets
                            </div>
                        </div>
                        <div className={`h-9 w-1/2 bg-white absolute top-1 ${shop == "sub" ? 'left-1' : 'right-1'} rounded-lg transition-all duration-75 ease-in`}></div>
                    </div>


                    <div className={`mt-5 pr-10 transition-all duration-700 ease-in ${shop == "sub" ? "block" : "hidden"}`}>
                        <div className="flex">
                            <div className="w-1/2 px-2">
                                {subscript1.map((value, index) => {
                                    return (
                                        <ShoppingCard value={value} key={index} setPayModal={setPayModal} />
                                    )
                                })}

                            </div>
                            <div className="w-1/2 px-2">
                                {subscript2.map((value, index) => {
                                    return (
                                        <ShoppingCard value={value} key={index} setPayModal={setPayModal} />
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                    <div className={`mt-5 pr-10 transition-all duration-700 ease-in ${shop == "guest" ? "block" : "hidden"}`}>
                        <div className="flex flex-wrap">

                            {guest.map((value, index) => {
                                return (
                                    <div className="w-1/2 px-2">
                                        <ShoppingCard value={value} key={index} setPayModal={setPayModal} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </ Dashboardlayout>
            {noteModal ?
                <div className="w-full  h-screen bg-black bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center">
                    <div className="w-[410px] bg-white p-12 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out">
                        <span className="absolute top-10 right-7 cursor-pointer" onClick={() => setNotemodel(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill="black" />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill="black" />
                            </svg>
                        </span>
                        <div>
                            <div className="home_pop2 w-28 h-28"></div>
                            <div className="py-1 text-start">
                                <h3 className="text-2xl font-bold font-plus">Subscription Expiration</h3>
                                <p className=" font-plus text-sm py-6 text-[#525252]">Your Yearly Gold subscription will be expiring within one month and will be updated automatically. If you want to update or cancel your subsciption, do it before the charge.</p>

                            </div>
                        </div>
                    </div>
                </div>
                : null}


            {payModal ?
                <Addpayment setPayModal={setPayModal} />
                : null}
        </>
    )
}
export default Shop;