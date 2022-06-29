import { Game } from "~/utils/types";

export async function getGames(): Promise<Array<Game>> {
  return [
    {
      date: "2022-06-22",
      fen: "r5k1/pb1p2q1/1p4p1/n1p3Q1/4p1P1/2N1P3/PPP2r2/1K1R3R w - - 0 25",
      solution: ["Rd6", "Qf7", "Rxg6+", "Kf8", "Rh8+"],
      gameUrl: "https://lichess.org/510uJ3P3/white#48",
      white: "DrNykterstein",
      black: "nihalsarin2004",
      wRating: 3022,
      bRating: 2855,
      id: 1,
    },
    {
      date: "2022-06-23",
      fen: "r2q1r1k/6bp/2n1B1p1/1p6/p2pP3/P2P2Q1/1PnB4/R3K2R w KQ - 0 25",
      solution: ["Ke2", "Nxa1", "Rxh7+", "Kxh7", "Qh3+"],
      gameUrl: "https://lichess.org/MCI2SKd9/white#48",
      white: "penguingim1",
      black: "Tardisiana",
      wRating: 2655,
      bRating: 1626,
      id: 2,
    },
    {
      date: "2022-06-24",
      fen: "4r1k1/pbn2ppp/1p1q4/3p4/3P4/2N1RN2/PP1Q1PPP/6K1 w - - 1 19",
      solution: ["Nb5", "Qd7", "Nxc7", "Rxe3", "Qxe3"],
      gameUrl: "https://lichess.org/Tk7OjfVh#36",
      white: "GM howitzer14",
      black: "IM rueoxy001",
      wRating: 2886,
      bRating: 2663,
      id: 3,
    },
    {
      date: "2022-06-25",
      fen: "2k3rr/1b3p1p/1P2p1p1/pq1pP3/2pQ4/2P5/2B1NPPP/R5K1 w - - 3 25",
      solution: ["Ba4", "Qb2", "Qc5+", "Kb8", "Re1"],
      gameUrl: "https://lichess.org/ZP0qydyh/white#48",
      white: "GM RebeccaHarris",
      black: "NM TwelveTeen",
      wRating: 2721,
      bRating: 2520,
      id: 4,
    },
    {
      date: "2022-06-26",
      fen: "3r1k2/pp3q2/1n1pRp1p/2pN1P2/5P2/6P1/PPP4P/2KR4 w - - 3 26",
      solution: ["Rxf6", "Nxd5", "Rxf7+", "Kxf7", "Rxd5"],
      gameUrl: "https://lichess.org/U5YtZBOd#50",
      white: "GM Zhigalko_Sergei",
      black: "IM beatles_21",
      wRating: 3070,
      bRating: 2860,
      id: 5,
    },
    {
      date: "2022-06-27",
      fen: "3rr3/pp2pnkp/2p2pp1/q2p1b2/2PP1N2/1P4P1/PQ2PPBP/2RR2K1 w - - 4 20",
      solution: ["cxd5", "cxd5", "Rc5", "Qb6", "Nxd5"],
      gameUrl: "https://lichess.org/DouGIVl6#38",
      white: "GM SVODMEVKO",
      black: "GM neslraCsungaM77",
      wRating: 2978,
      bRating: 3029,
      id: 6,
    },
    {
      date: "2022-06-28",
      fen: "r2q1r2/pp4k1/4b1p1/3Nnp1p/1PP3n1/P3PN2/3QBPPP/R4RK1 w - - 2 18",
      solution: ["Nxe5", "Nxe5", "Qb2", "Bxd5", "Qxe5+"],
      gameUrl: "https://lichess.org/7WscjKGA#34",
      white: "WFM Fredericia",
      black: "dereito",
      wRating: 2379,
      bRating: 2392,
      id: 7,
    },
    {
      date: "2022-06-29",
      fen: "2r1k3/p3qp1Q/1n1rpbp1/3p4/2nP1NP1/1BP2R2/P4PK1/2B1R3 w - - 19 31",
      solution: ["Nxg6", "fxg6", "Qxg6+", "Qf7", "Rxf6"],
      gameUrl: "https://lichess.org/E19QuQRe#60",
      white: "IM petriashvili2",
      black: "splendidkid",
      wRating: 2704,
      bRating: 2796,
      id: 8,
    },
    {
      date: "2022-06-30",
      fen: "3r4/2p2p2/1p2p1pp/p3P3/P2r1P2/1P2BK2/3P3k/2R5 w - - 0 40",
      solution: ["Bg1+", "Kh3", "Bxd4", "Kh2", "Bg1+"],
      gameUrl: "https://lichess.org/EcoMqfu6/white#78",
      white: "Fast_Change",
      black: "GM AnishGiri",
      wRating: 2755,
      bRating: 2997,
      id: 9,
    },
    {
      date: "2022-06-31",
      fen: "r1b1k2r/ppp1nppp/8/2bpq3/3n4/2P1B3/PP1NBPPP/R2QK2R w KQkq - 0 10",
      solution: ["Bxd4", "Bxd4", "Nf3", "Bxc3+", "Kf1"],
      gameUrl: "https://lichess.org/xztMYqOP/white#18",
      white: "RpImpulse",
      black: "vicous",
      wRating: 1744,
      bRating: 1928,
      id: 10,
    },
  ];
}
