import ActiveUser from "@/components/ActiveUser";
import ChatList from "@/components/ChatList";
import CustomHead from "@/components/CustomHead";
import Media from "@/components/Media";
import Search from "@/components/Search";
import UserDetails from "@/components/UserDetails";

export default function Home() {
  return (
    <>
      <CustomHead title={"Welcome"} />
      <main className="flex justify-between screen_92">
        <div className="w-1/5 ">
          <ActiveUser />
          <Search />
          <ChatList />
        </div>
        <div className="w-3/5 border-2">text</div>
        <div className="w-1/5">
          <UserDetails />
          <Media />
        </div>
      </main>
    </>
  );
}
