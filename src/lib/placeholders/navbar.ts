const imageDimension = { width: 18, height: 18 };

export const NavLeftLinks = [
  { ...imageDimension, alt: "", icon: "/icons/home.svg", navTitle: "Home" },
  {
    ...imageDimension,
    alt: "",
    navTitle: "Dashboard",
    icon: "/icons/dashboard.svg",
  },
  {
    ...imageDimension,
    alt: "",
    navTitle: "Wallet",
    icon: "/icons/wallet.svg",
  },
  {
    ...imageDimension,
    alt: "",
    navTitle: "Plan a trip",
    icon: "/icons/list-checks.svg",
  },
  {
    ...imageDimension,
    alt: "",
    navTitle: "Commission",
    icon: "/icons/hand-coins.svg",
  },
];

export const NavRightLinks = [
  {
    ...imageDimension,
    alt: "",
    icon: "/icons/bell.svg",
    navTitle: "Notification",
  },
  { ...imageDimension, alt: "", icon: "/icons/cart.svg", navTitle: "Cart" },
  {
    ...imageDimension,
    alt: "",
    navTitle: "Create",
    icon: "/icons/plus-square.svg",
  },
];
