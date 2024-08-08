import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function check() {
  return (
    <>
      <div style={{ fontSize: "25px" }}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </>
  );
}
function close() {
  return (
    <>
      <div style={{ fontSize: "25px", color: "lightgray" }}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </>
  );
}

function ab() {
  return (
    <>
      <div style={{ fontWeight: "bold", color: "black" }}>500MB</div>
    </>
  );
}
function bd() {
  return (
    <>
      <div style={{ fontWeight: "bold", color: "black" }}>50MB</div>
    </>
  );
}
function ad() {
  return (
    <>
      <div style={{ fontWeight: "bold", color: "black" }}>
        Up to 4K and 60fps
      </div>
    </>
  );
}

const tabledata = [
  {
    id: 1,
    fetatures: "Unlimited Super Reactions",
    nitrobasic: check(),
    nitro: check(),
  },
  {
    id: 2,
    fetatures: "Custom emoji anywhere and make them animated",
    nitrobasic: check(),
    nitro: check(),
  },
  {
    id: 3,
    fetatures: "Custom stickers anywhere",
    nitrobasic: check(),
    nitro: check(),
  },

  {
    id: 4,
    fetatures: "Custom App Icons",
    nitrobasic: check(),
    nitro: check(),
  },

  {
    id: 5,
    fetatures: "Bigger file sharing",
    nitrobasic: bd(),
    nitro: ab(),
  },
  {
    id: 6,
    fetatures: "HD streaming",
    nitrobasic: close(),
    nitro: ad(),
  },

  {
    id: 7,
    fetatures: "2 Free Boosts + 30% off extra Boosts",
    nitrobasic: close(),
    nitro: check(),
  },
  {
    id: 8,
    fetatures: "Animated avatar, banner, and profile theme",
    nitrobasic: close(),
    nitro: check(),
  },
  {
    id: 9,
    fetatures: "Early access to Clips",
    nitrobasic: close(),
    nitro: check(),
  },

  {
    id: 10,
    fetatures: "Custom server profiles",
    nitrobasic: close(),
    nitro: check(),
  },

  {
    id: 11,
    fetatures: "Nitro badge on your profile",
    nitrobasic: check(),
    nitro: check(),
  },

  {
    id: 12,
    fetatures: "Custom video backgrounds",
    nitrobasic: check(),
    nitro: check(),
  },
];

export default tabledata;
