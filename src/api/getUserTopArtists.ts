export const getUserTopArtists = async (username: string, period: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
  const API_URL = process.env.NEXT_PUBLIC_LASTFM_API_URL;
  const response = [
    {
      rank: 1,
      name: "Sleep Token",
      img: "https://i.scdn.co/image/ab67616100005174dbc568c9d871256b9a3e34a1",
    },
    {
      rank: 2,
      name: "While She Sleeps",
      img: "https://i.scdn.co/image/ab6761610000e5eb888dbb6f0c381220ac2dc6b7",
    },
    {
      rank: 3,
      name: "Bury Tomorrow",
      img: "https://i.scdn.co/image/ab6761610000e5eb16e034abd7151b0be2ea603f",
    },
    {
      rank: 4,
      name: "Bad Omens",
      img: "https://i.scdn.co/image/ab67616100005174ad84334ca5838c6182c8f8d4",
    },
    {
      rank: 5,
      name: "Ghost",
      img: "https://i.scdn.co/image/ab6761610000e5eb2518768732e7215a9f765ca8",
    },
    {
      rank: 6,
      name: "Bring Me the Horizon",
      img: "https://i.scdn.co/image/ab6761610000e5ebe7c9399d0b5d813c20cbec65",
    },
    {
      rank: 7,
      name: "NX Zero",
      img: "https://i.scdn.co/image/ab6761610000e5eb26af884ba5e1ccc77d1a4ba4",
    },
    {
      rank: 8,
      name: "Linkin Park",
      img: "https://i.scdn.co/image/ab6761610000517484a0dd74f21e8acce6a9fd49",
    },
    {
      rank: 9,
      name: "One Direction",
      img: "https://i.scdn.co/image/5bb443424a1ad71603c43d67f5af1a04da6bb3c8",
    },
    {
      rank: 10,
      name: "I Prevail",
      img: "https://i.scdn.co/image/ab6761610000e5ebbdc02d0b1c232af2fa559092",
    },
    {
      rank: 11,
      name: "Post Malone",
      img: "https://i.scdn.co/image/ab67616100005174e17c0aa1714a03d62b5ce4e0",
    },
    {
      rank: 12,
      name: "Lana Del Rey",
      img: "https://i.scdn.co/image/ab6761610000e5ebb99cacf8acd5378206767261",
    },
    {
      rank: 13,
      name: "Terno Rei",
      img: "https://i.scdn.co/image/ab6761610000517431ed2f2ed39cc1eb1ef0bf45",
    },
    {
      rank: 14,
      name: "Pense",
      img: "https://i.scdn.co/image/ab67616100005174b9b2288c34840aeeadaa0174",
    },
    {
      rank: 15,
      name: "Jorge & Mateus",
      img: "https://i.scdn.co/image/ab6761610000e5eb242a8ef8cfdde955f7067581",
    },
    {
      rank: 16,
      name: "Gusttavo Lima",
      img: "https://i.scdn.co/image/ab6761610000e5eb0938ff15a7660823a551b048",
    },
    {
      rank: 17,
      name: "Selvagens À Procura de Lei",
      img: "https://i.scdn.co/image/ab6761610000e5ebcef21d73ef426e6f785bd175",
    },
    {
      rank: 18,
      name: "Polaris",
      img: "https://i.scdn.co/image/ab676161000051748cc500e7483d02c27f89a12e",
    },
    {
      rank: 19,
      name: "blessthefall",
      img: "https://i.scdn.co/image/ab6761610000e5eb965130dadfdf76ccef54c926",
    },
    {
      rank: 20,
      name: "BK",
      img: "https://i.scdn.co/image/ab6761610000e5eb1dcf3b8e2c14abdf84301bd8",
    },
    {
      rank: 21,
      name: "pumapjl",
      img: "https://i.scdn.co/image/ab676161000051747674b7357c361781ccbb942f",
    },
    {
      rank: 22,
      name: "Pirâmide Perdida",
      img: "https://i.scdn.co/image/ab676161000051747674b7357c361781ccbb942f",
    },
    {
      rank: 23,
      name: "Veigh",
      img: "https://i.scdn.co/image/ab67616100005174e32110a6a91105938bb4e026",
    },
    {
      rank: 24,
      name: "Matuê",
      img: "https://i.scdn.co/image/ab67616100005174654dc6b69f86aeb73527fc07",
    },
    {
      rank: 25,
      name: "Henrique & Juliano",
      img: "https://i.scdn.co/image/ab6761610000e5ebb713c619cc12ca1866136419",
    },
  ];

  return response;
};
