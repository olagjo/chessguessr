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
      white: "Fast_Chance",
      black: "GM AnishGiri",
      wRating: 2755,
      bRating: 2997,
      id: 9,
    },
    {
      date: "2022-07-01",
      fen: "r2q1rk1/1p1b1pbp/p1n1p1n1/2pp3Q/P1B1N3/3P1N2/1PP3PP/R1B2RK1 w - - 0 15",
      solution: ["Nfg5", "h6", "Nf6+", "Bxf6", "Qxh6"],
      gameUrl: "https://lichess.org/fXis9bS7#28",
      white: "GM DrNykterstein",
      black: "Blazinq",
      wRating: 3283,
      bRating: 3033,
      id: 10,
    },
    {
      date: "2022-07-02",
      fen: "r1b1k2r/ppp1nppp/8/2bpq3/3n4/2P1B3/PP1NBPPP/R2QK2R w KQkq - 0 10",
      solution: ["Bxd4", "Bxd4", "Nf3", "Bxc3+", "Kf1"],
      gameUrl: "https://lichess.org/xztMYqOP/white#18",
      white: "RpImpulse",
      black: "vicous",
      wRating: 1744,
      bRating: 1928,
      id: 11,
    },
    {
      date: "2022-07-03",
      fen: "r1bq1rk1/1p2bppp/p1n1pn2/3p1PB1/3NP3/2PB4/PP1N2PP/R2Q1RK1 w - - 0 12",
      solution: ["Nxc6", "bxc6", "e5", "Ne8", "f6"],
      gameUrl: "https://lichess.org/ijr0I8Yc/white#22",
      white: "noltinho",
      black: "prokopmate",
      wRating: 1890,
      bRating: 2046,
      id: 12,
    },
    {
      date: "2022-07-04",
      fen: "8/pp3k1P/6N1/2p1p1B1/1n1pP1p1/1q4P1/8/K6R w - - 1 38",
      solution: ["Nxe5+", "Ke6", "Rh6+", "Kxe5", "h8=Q+"],
      gameUrl: "https://lichess.org/AlZU0Ga6/white#74",
      white: "GM alireza2003",
      black: "GM Konevlad",
      wRating: 2762,
      bRating: 3007,
      id: 13,
    },
    {
      date: "2022-07-05",
      fen: "2k2r1r/pb3p2/2n1pP1p/q2pP1pB/1NpP4/2Q3B1/1P4PP/5RK1 w - - 3 25",
      solution: ["Nxc6", "Qxc3", "Ne7+", "Kd7", "bxc3"],
      gameUrl: "https://lichess.org/LKL0jVuR/white#48",
      white: "GM AnishOnYoutube",
      black: "GM nihalsarin2004",
      wRating: 2869,
      bRating: 2972,
      id: 14,
    },
    {
      date: "2022-07-06",
      fen: "2r3k1/7p/6p1/1p6/1P2P3/2pq2N1/2Q2bPP/7K w - - 0 32",
      solution: ["Qxd3", "c2", "Qd5+", "Kh8", "Qe5+"],
      gameUrl: "https://lichess.org/8fERehxe/white#62",
      white: "ChessGiant",
      black: "FM Heisenberg01",
      wRating: 2046,
      bRating: 2627,
      id: 15,
    },
    {
      date: "2022-07-07",
      fen: "1n1q2kr/4rpp1/pp5p/2p2R2/6N1/1PP1P3/P3Q1PP/5RK1 w - - 1 23",
      solution: ["Ne5", "Qe8", "Nxf7", "Rxf7", "Qc4"],
      gameUrl: "https://lichess.org/WvIezSkr#44",
      white: "GM BabaRamdev",
      black: "IM mutdpro",
      wRating: 3031,
      bRating: 3131,
      id: 16,
    },
    {
      date: "2022-07-08",
      fen: "1bb2rk1/1p1nqppp/r7/pNp5/P2P2N1/1Bn1PQ1P/1P4P1/2R2RK1 w - - 0 20",
      solution: ["Nxc3", "cxd4", "Nd5", "Qd8", "Rxc8"],
      gameUrl: "https://lichess.org/pu19iESz#38",
      white: "GM aspiringstar",
      black: "BetterAtTicTacToe",
      wRating: 2896,
      bRating: 2875,
      id: 17,
    },
    {
      date: "2022-07-09",
      fen: "r6r/p3kpp1/1qp3b1/3pPnN1/5P2/2P2Q2/PP1N1bPP/R1B2K1R b - - 6 16",
      solution: ["Ng3+", "hxg3", "Rxh1+", "Ke2", "Re1#"],
      gameUrl: "https://lichess.org/JYhT24aC/black#31",
      white: "Rarelyadraw",
      black: "IM EricRosen",
      wRating: 1761,
      bRating: 2506,
      id: 18,
    },
    {
      date: "2022-07-10",
      fen: "r2qr1k1/1p1b1p1p/2pb1pp1/p2n3P/3P4/2PB1P2/PPQBN1P1/2KR3R w - - 0 16",
      solution: ["hxg6", "hxg6", "Bxg6", "fxg6", "Qxg6+"],
      gameUrl: "https://lichess.org/9yaDFsYB#30",
      white: "GM AndrewHoma",
      black: "Alexandra2011",
      wRating: 2273,
      bRating: 1634,
      id: 19,
    },
    {
      date: "2022-07-11",
      fen: "5n2/4k3/2p3p1/1p2PrRp/p1n2N1P/P2N4/1PP1K3/8 w - - 3 39",
      solution: ["Nxg6+", "Nxg6", "Rxf5", "Nxh4", "Rxh5"],
      gameUrl: "https://lichess.org/kgnzxX2d/white#76",
      white: "GM DrDrunkenstein",
      black: "GM Creep30",
      wRating: 2941,
      bRating: 2631,
      id: 20,
    },
    {
      date: "2022-07-12",
      fen: "r1bq2k1/pp3ppp/2p2n2/3Pr3/1b6/1PNBP3/P2B1PPP/R2Q1RK1 b - - 0 12",
      solution: ["Bxc3", "Bxc3", "Rxd5", "Bxf6", "gxf6"],
      gameUrl: "https://lichess.org/LILtG6EN/black#23",
      white: "GM Protagonist98",
      black: "aboveandbelow",
      wRating: 2718,
      bRating: 2709,
      id: 21,
    },
    {
      date: "2022-07-13",
      fen: "3rrqk1/5p2/4p2p/1p4pn/4b3/1P3NQP/P4PP1/BB3RK1 w - - 2 31",
      solution: ["Qe5", "Qg7", "Qxg7+", "Nxg7", "Bxe4"],
      gameUrl: "https://lichess.org/8J0TyLDu/white#60",
      white: "DrCesar001",
      black: "GM defenceboy1",
      wRating: 2829,
      bRating: 2892,
      id: 22,
    },
    {
      date: "2022-07-14",
      fen: "r1bq1rk1/ppp2ppp/8/2bp4/6n1/1B1P4/PPP1RPPP/RNBQ2K1 b - - 2 11",
      solution: ["Qh4", "h3", "Bxf2+", "Kh1", "Qg3"],
      gameUrl: "https://lichess.org/Dg8vybD0/black#21",
      white: "Cholwezovich",
      black: "GM Johanssc",
      wRating: 2207,
      bRating: 2810,
      id: 23,
    },
    {
      date: "2022-07-15",
      fen: "r1bqkb1r/pppp1ppp/2nn4/4p2Q/8/1BN5/PPPP1PPP/R1B1K1NR w KQkq - 4 6",
      solution: ["Nb5", "g6", "Qf3", "f5", "Qd5"],
      gameUrl: "https://lichess.org/2cOg7Que#10",
      white: "FM Paparama",
      black: "JoeAssaad",
      wRating: 2683,
      bRating: 2603,
      id: 24,
    },
    {
      date: "2022-07-16",
      fen: "r2qr1k1/pp3pp1/2p3p1/3Pp3/1PP1n3/P5P1/4BP1P/R2Q1RK1 w - - 0 20",
      solution: ["dxc6", "Nc3", "cxb7", "Nxd1", "Rfxd1"],
      gameUrl: "https://lichess.org/y3eP3jdE#38",
      white: "GM DrNykterstein",
      black: "Night-King96",
      wRating: 3259,
      bRating: 3138,
      id: 25,
    },
    {
      date: "2022-07-17",
      fen: "r2qk2r/p5pp/2pbp3/3nNpP1/3Pp3/2P5/PP3P1P/R1BQK2R w KQkq - 2 15",
      solution: ["Qh5+", "g6", "Nxg6", "Kd7", "Nxh8"],
      gameUrl: "https://lichess.org/bQVozJc5#28",
      white: "GM Urkis",
      black: "GM larso",
      wRating: 2601,
      bRating: 2708,
      id: 26,
    },
    {
      date: "2022-07-18",
      fen: "b2rk2r/p3qp1p/3Rp1p1/2p1P3/3npNQ1/P1B5/2P2PPP/1R4K1 w k - 10 20",
      solution: ["Bxd4", "cxd4", "Nxe6", "Rxd6", "Rb8+"],
      gameUrl: "https://lichess.org/8eP28Gbb/white#38",
      white: "IM swimmerchess",
      black: "GM fireheart92",
      wRating: 2733,
      bRating: 2768,
      id: 27,
    },
    {
      date: "2022-07-19",
      fen: "rnbqkbnr/ppp1ppp1/8/3p3p/3P1B2/4P3/PPP2PPP/RN1QKBNR b KQkq - 0 3",
      solution: ["e5", "Bxe5", "f6", "Bg3", "h4"],
      gameUrl: "https://lichess.org/8YgqKpvt#5",
      white: "leniclukachess",
      black: "IM EricRosen",
      wRating: 2428,
      bRating: 2760,
      id: 28,
    },
    {
      date: "2022-07-20",
      fen: "r5k1/1RQ2p1p/4qbp1/p3r3/8/5B1P/5PP1/5RK1 w - - 0 24",
      solution: ["Rb6", "Rc8", "Rxe6", "Rxc7", "Rxf6"],
      gameUrl: "https://lichess.org/J8HKQ0Fy/white#46",
      white: "FM lefonghua",
      black: "degardov",
      wRating: 2371,
      bRating: 2460,
      id: 29,
    },
    {
      date: "2022-07-21",
      fen: "2kr4/1pp2ppp/5nb1/p3b3/1q3PP1/2N4P/PPPBB3/1KQ1R3 b - - 0 19",
      solution: ["Rxd2", "fxe5", "Rxc2", "Qxc2", "Bxc2+"],
      gameUrl: "https://lichess.org/gOqiCYjN/black#37",
      white: "khartso",
      black: "agadmator",
      wRating: 2127,
      bRating: 2120,
      id: 30,
    },
    {
      date: "2022-07-22",
      fen: "2r3k1/pp2pp1p/3P2p1/8/8/4P3/PbbNBPPP/2R3K1 w - - 3 20",
      solution: ["d7", "Rd8", "Rxc2", "Bf6", "Rc8"],
      gameUrl: "https://lichess.org/xm6jMikg#38",
      white: "GM JanistanTV",
      black: "Torjaeger10",
      wRating: 2686,
      bRating: 2632,
      id: 31,
    },
    {
      date: "2022-07-23",
      fen: "1r5r/p3pk1p/2pp1p2/5R2/2P1P1Q1/2qPB3/b1P3PP/5RK1 w - - 9 28",
      solution: ["e5", "dxe5", "Rxf6+", "exf6", "Qd7+"],
      gameUrl: "https://lichess.org/0GPeQ9Gs#54",
      white: "GM TSMFTXH",
      black: "Mardan0212",
      wAka: "Hikaru Nakamura",
      wRating: "2276?",
      bRating: "2413",
      id: 32,
    },
    {
      date: "2022-07-24",
      fen: "1k1r2r1/1qnn1Q2/p3p3/1p2P3/2pP3P/6B1/1P3PP1/R4RK1 w - - 0 25",
      solution: ["d5", "Qxd5", "Rad1", "Qc6", "Rd6"],
      gameUrl: "https://lichess.org/ceKJybNd#48",
      white: "GM DrNykterstein",
      black: "GM nihalsarin2004",
      wAka: "Magnus Carlsen",
      bAka: "Nihal Sarin",
      wRating: "2996",
      bRating: "2860",
      id: 33,
    },
    {
      date: "2022-07-25",
      fen: "r1bq1rk1/p1p2ppp/2p2n2/3p4/1b2PB2/P1N5/1PPQBPPP/2KR3R b - - 0 11",
      solution: ["Nxe4", "Qd4", "Nxc3", "bxc3", "Bxa3+"],
      gameUrl: "https://lichess.org/A0IKJkoZ/black#21",
      white: "GM Watneg",
      black: "GM Moro183",
      wRating: "2789",
      bRating: "2700",
      id: 34,
    },
  ];
}
