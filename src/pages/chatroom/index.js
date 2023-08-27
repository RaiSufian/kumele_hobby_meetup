import Dashboardlayout from "../../layouts/dashboardlayout";
import Chatbox from "../../components/chatBox";
import ChatCard from "../../components/chatCard";

const ChatRoom = () => {
    const groups = [0, 1, 2, 3, 4, 5]
    return (
        <Dashboardlayout>
            <div className=" px-5">
                <div className="flex gap-4">
                    <div className="flex-1 main_menu mt-3 overflow-y-auto custom_scroll">
                        <h3 className="text-xl font-bold font-plus">Chats</h3>
                        {
                            groups.map((value, index) => {
                                return (
                                    <ChatCard key={index} />
                                )
                            })
                        }

                    </div>
                    <div className="w-3/5">
                        <Chatbox />
                    </div>
                </div>
            </div>
        </Dashboardlayout>

    )
}
export default ChatRoom;