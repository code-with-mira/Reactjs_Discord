import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "../css/Discover.css";
function verify() {
  return (
    <>
      <div className="dis-verify">
        <FontAwesomeIcon
          icon={faCircleCheck}
          style={{ color: "green", fontSize: "15px", marginTop: "6px" }}
        />
        &nbsp;verified
      </div>
    </>
  );
}

const discoverdata = [
  {
    id: 1,
    pic: "dis-1.jpg",
    smpic: "sm-1.jpg",
    hed: "Midjourney",
    detail:
      "The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
    online: "1,446,770 Online",
    member: "20,209,838 Members",
    verified: verify(),
    category: "entertainment",
  },
  {
    id: 2,
    pic: "dis-2.jpg",
    smpic: "sm-2.jpg",
    hed: "Viggle",
    online: "89,411 Online",
    member: "2,677,822 Members",
    verified: verify(),
    detail: "Viggle.ai, make any character move as you want.",
    category: "game",
  },
  {
    id: 3,
    pic: "dis-8.jpg",
    smpic: "sm-8.jpg",
    hed: "LimeWire - create AI Images, Audio & Video",
    online: "65,570 Online",
    member: "2,677,8200 Members",
    verified: "",
    detail:
      "Our active text-to-image AI community powers your journey to generate the best art, images, and design.",
    category: "entertainment",
  },
  {
    id: 4,
    pic: "dis-4.jpg",
    smpic: "sm-4.jpg",
    hed: "Leonardo.Ai",
    online: "78,570 Online",
    member: "2,677,82 Members",
    verified: verify(),
    detail:
      "Leonardo.Ai is a generative AI platform for cont Entertainment creation. Create game assets, artwork, design elem Entertainments, and more!",
    category: "game",
  },
  {
    id: 5,
    pic: "dis-5.jpg",
    smpic: "sm-5.jpg",
    hed: "Blox Fruits",
    online: " 89,411 Online",
    member: "2,677,888 Members",
    verified: "",
    detail:
      "The official community for the popular Roblox game known as Blox Fruits.",
    category: "entertainment",
  },
  {
    id: 6,
    pic: "dis-6.jpg",
    smpic: "sm-6.jpg",
    hed: "Genshin Impact Official",
    online: "89,411 Online",
    member: "2,677,855 Members",
    verified: "",
    detail:
      "Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!",
    category: "entertainment",
  },
  {
    id: 7,
    pic: "dis-7.jpg",
    smpic: "sm-7.jpg",
    hed: "All Star",
    online: "56,578 Online",
    member: "2,677,822 Members",
    verified: verify(),
    detail:
      "Form teams and defend your towers! Get ready for an adv Entertainmenture through the wonderful world of All Star Tower Defense!",
    category: "entertainment",
  },
  {
    id: 8,
    pic: "dis-8.jpg",
    smpic: "sm-8.jpg",
    hed: "VALORANT",
    online: "65,570 Online",
    member: "2,677,900 Members",
    verified: verify(),
    detail:
      "The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!",
    category: "entertainment",
  },
  {
    id: 9,
    pic: "dis-9.jpg",
    smpic: "sm-9.jpg",
    hed: "Roblox",
    online: "65,678 Online",
    member: "2,677,300 Members",
    verified: "",
    detail:
      "The largest community-run Roblox server. Join for news, chat, LFG, ev Entertainments & more! For both Users and Creators. ✨",
    category: "entertainment",
  },
  {
    id: 10,
    pic: "dis-10.jpg",
    smpic: "sm-10.jpg",
    hed: "Fusionist",
    online: "65,1234 Online",
    member: "2,699,822 Members",
    verified: verify(),
    detail:
      "A scalable and sustainable Sci-Fi universe that fulfills all possible desires.",
    category: "game",
  },
  {
    id: 11,
    pic: "dis-11.jpg",
    smpic: "sm-11.jpg",
    hed: "Fusionist",
    online: "78,2370 Online",
    member: "2,6234,822 Members",
    verified: verify(),
    detail:
      "Community run, developer supported Discord server dedicated to Apex Legends. Join for LFG, Game Discussion, News & more!",
    category: "game",
  },
  {
    id: 12,
    pic: "dis-12.jpg",
    smpic: "sm-12.jpg",
    hed: "",
    online: "12,570,56 Online",
    member: "2,677,822 Members",
    verified: verify(),
    detail:
      "A scalable and sustainable Sci-Fi universe that fulfills all possible desires.",
    category: "game",
  },
  {
    id: 13,
    pic: "dis-13.jpg",
    smpic: "sm-13.jpg",
    hed: "Fusionist",
    online: "62,678,90 Online",
    member: "2,677,822 Members",
    verified: verify(),
    detail:
      "The largest community-run Roblox server. Join for news, chat, LFG, ev Entertainments & more! For both Users and Creators. ✨",
    category: "education",
  },
  {
    id: 14,
    pic: "dis-14.jpg",
    smpic: "sm-14.jpg",
    hed: "Fusionist",
    online: "65,570 Online",
    member: "2,9977,822 Members",
    verified: "",
    detail:
      "The friendliest community on Discord 🧡 Join now to meet amazing people from all around the world 🌎",
    category: "education",
  },

  {
    id: 15,
    pic: "dis-15.jpg",
    smpic: "sm-15.jpg",
    hed: "Roblox",
    online: "65,570 Online",
    member: "2,677,8000 Members",
    verified: "",
    detail:
      "Community run, developer supported Discord server dedicated to Apex Legends. Join for LFG, Game Discussion, News & more!",
    category: "education",
  },
  {
    id: 16,
    pic: "dis-16.jpg",
    smpic: "sm-16.jpg",
    hed: "Fusionist",
    online: "65,570 Online",
    member: "67,677,822 Members",
    verified: "",
    detail:
      "Community run, developer supported Discord server dedicated to Apex Legends. Join for LFG, Game Discussion, News & more!",
    category: "education",
  },
  {
    id: 17,
    pic: "dis-17.jpg",
    smpic: "sm-17.jpg",
    hed: "Lofi Girl",
    online: "65,570 Online",
    member: "2,699,822 Members",
    verified: verify(),
    detail: "The official server for Stumble Guys by Scopely!",
    category: "education",
  },
  {
    id: 18,
    pic: "dis-18.jpg",
    smpic: "sm-18.jpg",
    hed: "Lofi Girl",
    online: "65,570 Online",
    member: "2,677,8000 Members",
    verified: "",
    detail:
      "The friendliest community on Discord 🧡 Join now to meet amazing people from all around the world 🌎",
    category: "science",
  },
  {
    id: 19,
    pic: "dis-19.jpg",
    smpic: "sm-19.jpg",
    hed: "Geometry Dash",
    online: "65,570 Online",
    member: "78,677,899 Members",
    verified: verify(),
    detail:
      "The largest community-run Roblox server. Join for news, chat, LFG, ev Entertainments & more! For both Users and Creators. ✨",
    category: "science",
  },
  {
    id: 20,
    pic: "dis-20.jpg",
    smpic: "sm-20.jpg",
    hed: "Lofi Girl",
    online: "89,411 Online",
    member: "7,677,8456 Members",
    verified: "",
    detail:
      "The friendliest community on Discord 🧡 Join now to meet amazing people from all around the world 🌎",
    category: "science",
  },
  {
    id: 21,
    pic: "dis-21.jpg",
    smpic: "sm-21.jpg",
    hed: "Geometry Dash",
    online: "89,411 Online",
    member: "2,677,822 Members",
    verified: "",
    detail:
      "A scalable and sustainable Sci-Fi universe that fulfills all possible desires.",
    category: "science",
  },
  {
    id: 22,
    pic: "dis-22.jpg",
    smpic: "sm-22.jpg",
    hed: "Roblox",
    online: "65,570 Online",
    member: "2,677,822 Members",
    verified: "",
    detail:
      "The official Discord server for the popular rhythm-based action platformer game, Geometry Dash!",
    category: "science",
  },
  {
    id: 23,
    pic: "dis-23.jpg",
    smpic: "sm-23.jpg",
    hed: "Stumble Guys",
    online: "65,570 Online",
    member: "2,677,822 Members",
    verified: "",
    detail:
      "The official Discord server for the popular rhythm-based action platformer game, Geometry Dash!",
    category: "music",
  },
  {
    id: 24,
    pic: "dis-24.jpg",
    smpic: "sm-24.jpg",
    hed: "Stumble Guys",
    online: "65,570 Online",
    member: "2,677,822 Members",
    verified: verify(),
    detail:
      "The largest community-run Roblox server. Join for news, chat, LFG, ev Entertainments & more! For both Users and Creators. ✨",
    category: "music",
  },
  {
    id: 25,
    pic: "dis-25.jpg",
    smpic: "sm-25.jpg",
    hed: "Fusionist",
    online: "65,570 Online",
    member: "2,677,822 Members",
    verified: "",
    detail:
      "The official Discord server for the popular rhythm-based action platformer game, Geometry Dash!",
    category: "music",
  },
  {
    id: 26,
    pic: "dis-26.jpg",
    smpic: "sm-26.jpg",
    hed: "Geometry Dash",
    online: "89,411 Online",
    member: "4,295,899 Members",
    verified: verify(),
    detail:
      "The official Discord server for the popular rhythm-based action platformer game, Geometry Dash!",
    category: "music",
  },
  {
    id: 27,
    pic: "dis-27.jpg",
    smpic: "sm-27.jpg",
    hed: "Roblox",
    online: "89,411 Online",
    member: "7,595,812 Members",
    verified: "",
    detail:
      "The official Discord server for the popular rhythm-based action platformer game, Geometry Dash!",
    category: "music",
  },
  {
    id: 28,
    pic: "dis-28.jpg",
    smpic: "sm-28.jpg",
    hed: "Fusionist",
    online: "89,411 Online",
    member: "2,295,711 Members",
    verified: verify(),
    detail:
      "The largest community-run Roblox server. Join for news, chat, LFG, ev Entertainments & more! For both Users and Creators. ✨",
    category: "music",
  },
];

export default discoverdata;
