import Dashboardlayout from "../../layouts/dashboardlayout";
import Chatbox from "../../components/chatBox";
import ChatCard from "../../components/chatCard";
import { useSelector } from "react-redux";
const ChatRoom = () => {
    const groups = [0, 1, 2, 3, 4, 5];
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <Dashboardlayout>
            <div className=" px-5">
                <div className="md:flex gap-4 flex-row-reverse  flex-wrap">

                    <div className="md:w-3/5 sm:w-4/5 mx-auto mt-2">
                        <Chatbox />
                    </div>
                    <div className="flex-1 main_menu mt-3 overflow-y-auto custom_scroll md:mt-2">
                        <h3 className="text-xl font-bold font-plus">Chats</h3>
                        {
                            groups.map((value, index) => {
                                return (
                                    <ChatCard key={index} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </Dashboardlayout>

    )
}
export default ChatRoom;