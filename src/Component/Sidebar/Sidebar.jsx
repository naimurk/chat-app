import ChatList from "./ChatList";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";


const Sidebar = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <SearchBar></SearchBar>
            <ChatList></ChatList>
        </div>
    );
};

export default Sidebar;