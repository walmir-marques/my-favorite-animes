const animesData = [
  {
    id: 1,
    name: "Yu Yu Hakusho",
    description:
      "Yu Yu Hakusho segue Yusuke Urameshi, um adolescente delinquente que morre ao salvar uma criança em um acidente de carro. Ao perceber que sua morte não estava programada, ele recebe a chance de retornar à vida após passar por várias provações.",
    animeImage: "https://cdn.myanimelist.net/images/anime/1228/111372.jpg",
    characters: [
      {
        id: 1,
        name: "Yusuke Urameshi",
        characterImage:
          "https://i.pinimg.com/564x/53/12/7e/53127e7e9e5cd15fc961e076a58b7fff.jpg",
      },
      {
        id: 2,
        name: "Kurama",
        characterImage:
          "https://i.pinimg.com/564x/7d/be/7b/7dbe7b3abd1442fff5a5aae851f3391f.jpg",
      },
      {
        id: 3,
        name: "Hiei",
        characterImage:
          "https://upload.wikimedia.org/wikipedia/pt/a/ac/Hiei.png",
      },
    ],
  },
  {
    id: 2,
    name: "Fullmetal Alchemist: Brotherhood",
    description:
      "Fullmetal Alchemist: Brotherhood segue os irmãos Edward e Alphonse Elric em sua busca para encontrar a Pedra Filosofal para restaurar seus corpos após uma tentativa de alquimia dar errado.",
    animeImage:
      "https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png",
    characters: [
      {
        id: 1,
        name: "Edward Elric",
        characterImage:
          "https://i.pinimg.com/564x/f8/b1/89/f8b18907a62a29becf65164d59725e45.jpg",
      },
      {
        id: 2,
        name: "Alphonse Elric",
        characterImage:
          "https://i.pinimg.com/564x/95/8b/0e/958b0ea1b8bf6a5d642c3bdd3c37da96.jpg",
      },
      {
        id: 3,
        name: "Roy Mustang",
        characterImage:
          "https://i.pinimg.com/564x/e0/ae/40/e0ae4033df3e7e70288402f0070fafc7.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Death Note",
    description:
      "Death Note segue Light Yagami, um estudante do ensino médio que encontra um caderno capaz de matar qualquer pessoa cujo name seja escrito nele. Light decide usar o Death Note para livrar o mundo de criminosos.",
    animeImage: "https://m.media-amazon.com/images/I/716ASj7z2GL.jpg",
    characters: [
      {
        id: 1,
        name: "Light Yagami",
        characterImage:
          "https://i.pinimg.com/564x/82/0c/e7/820ce76b30b33b593be060da91060a0a.jpg",
      },
      {
        id: 2,
        name: "L",
        characterImage:
          "https://i.pinimg.com/564x/3f/52/2d/3f522d070dbbd3223457d5519571af96.jpg",
      },
      {
        id: 3,
        name: "Ryuk",
        characterImage:
          "https://i.pinimg.com/564x/be/e5/c1/bee5c1b9a1c1cac0ec48e0a5c9599a4b.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Naruto",
    description:
      "Naruto segue a jornada de Naruto Uzumaki, um jovem ninja que busca se tornar o líder de sua vila e ganhar o respeito dos outros, enquanto enfrenta desafios e ameaças poderosas.",
    animeImage:
      "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    characters: [
      {
        id: 1,
        name: "Naruto Uzumaki",
        characterImage:
          "https://i.pinimg.com/564x/82/5d/c2/825dc267392458d196ecef2dc51f886d.jpg",
      },
      {
        id: 2,
        name: "Sasuke Uchiha",
        characterImage:
          "https://i.pinimg.com/564x/c5/0e/98/c50e985ff69f34ea28fba9f64a620858.jpg",
      },
      {
        id: 3,
        name: "Sakura Haruno",
        characterImage:
          "https://i.pinimg.com/564x/9b/4f/35/9b4f350ceeae2590001e7ed668cf04b4.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Jujutsu Kaisen",
    description:
      "Jujutsu Kaisen segue Yuji Itadori, um estudante que acaba envolvido em eventos sobrenaturais após entrar em contato com um objeto amaldiçoado. Ele se une a outros para combater maldições.",
    animeImage:
      "https://dakiheaven.eu/cdn/shop/collections/Jujutsu-Kaisen-Dakiheaven.eu-1687322386617.jpg?v=1690905551&width=640",
    characters: [
      {
        id: 1,
        name: "Yuji Itadori",
        characterImage:
          "https://i.pinimg.com/564x/ea/dc/ac/eadcacf3f895fd4aed2133b1c82a9254.jpg",
      },
      {
        id: 2,
        name: "Megumi Fushiguro",
        characterImage:
          "https://i.pinimg.com/564x/47/4e/b6/474eb6cc3407e04025bb0978b71e1b36.jpg",
      },
      {
        id: 3,
        name: "Nobara Kugisaki",
        characterImage:
          "https://i.pinimg.com/564x/67/e8/a7/67e8a7ffabfbed6dbadb8ee1b3edd73e.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Demon Slayer",
    description:
      "Demon Slayer segue Tanjiro Kamado, um jovem que se torna um caçador de demônios após sua família ser massacrada e sua irmã se transformar em um demônio. Ele busca vingança e uma cura para sua irmã.",
    animeImage:
      "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    characters: [
      {
        id: 1,
        name: "Tanjiro Kamado",
        characterImage:
          "https://i.pinimg.com/736x/91/2d/75/912d7526c1aa139f20241a475e156dbd.jpg",
      },
      {
        id: 2,
        name: "Nezuko Kamado",
        characterImage:
          "https://i.pinimg.com/564x/06/f2/8f/06f28f33103ba8aa56f4c15ae879b580.jpg",
      },
      {
        id: 3,
        name: "Zenitsu Agatsuma",
        characterImage:
          "https://i.pinimg.com/564x/61/0a/96/610a96d109e90afb5841ce083201de55.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Black Clover",
    description:
      "Black Clover acompanha Asta, um jovem sem magia em um mundo onde a magia é tudo. Ele busca se tornar o Rei Mago para provar que mesmo sem poder mágico, pode superar desafios e proteger seus amigos.",
    animeImage:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe",
    characters: [
      {
        id: 1,
        name: "Asta",
        characterImage:
          "https://i.pinimg.com/564x/74/4f/16/744f16baa2e99680fc6709a8b8b98a71.jpg",
      },
      {
        id: 2,
        name: "Yuno",
        characterImage:
          "https://i.pinimg.com/564x/e7/87/9e/e7879ee999b5e27b775ffff2d8eb0aa0.jpg",
      },
      {
        id: 3,
        name: "Noelle Silva",
        characterImage:
          "https://i.pinimg.com/564x/70/e5/07/70e5078ba1ff1ddd62b737f57ee3bc11.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Attack on Titan",
    description:
      "Attack on Titan se passa em um mundo onde a humanidade luta pela sobrevivência contra titãs devoradores de humanos. A história segue Eren Yeager e seus amigos em uma batalha desesperada.",
    animeImage:
      "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg",
    characters: [
      {
        id: 1,
        name: "Eren Yeager",
        characterImage:
          "https://i.pinimg.com/564x/ef/34/96/ef349658df76f93c52780ed014f31f39.jpg",
      },
      {
        id: 2,
        name: "Mikasa Ackerman",
        characterImage:
          "https://i.pinimg.com/564x/cf/5a/65/cf5a659ca59322ed35562db063426cbd.jpg",
      },
      {
        id: 3,
        name: "Armin Arlert",
        characterImage:
          "https://i.pinimg.com/564x/a9/78/8b/a9788bbc438245af29aa7401dc2a93f9.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "Hunter x Hunter",
    description:
      "Hunter x Hunter segue Gon Freecss em sua jornada para se tornar um caçador, explorando o mundo e procurando seu pai. Ele faz amigos e enfrenta desafios perigosos ao longo do caminho.",
    animeImage:
      "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    characters: [
      {
        id: 1,
        name: "Gon Freecss",
        characterImage:
          "https://i.pinimg.com/564x/25/f0/5b/25f05b02b3997d3d15ee0ef44c59e629.jpg",
      },
      {
        id: 2,
        name: "Killua Zoldyck",
        characterImage:
          "https://i.pinimg.com/564x/c5/ab/28/c5ab28e5a0499512f63902bca1202b7a.jpg",
      },
      {
        id: 3,
        name: "Kurapika",
        characterImage:
          "https://i.pinimg.com/564x/0c/fd/ce/0cfdce75061fa3c44c131f8501835994.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Cavaleiros do Zodíaco",
    description:
      "Cavaleiros do Zodíaco segue os Cavaleiros de Atena, guerreiros que protegem a deusa Atena em suas batalhas contra forças do mal. Cada cavaleiro usa uma armadura inspirada nos signos do zodíaco.",
    animeImage: "https://cinema10.com.br/upload/series/series_645_seya.jpg",
    characters: [
      {
        id: 1,
        name: "Seiya de Pégaso",
        characterImage:
          "https://i.pinimg.com/564x/6b/7c/be/6b7cbe501236df7296376fc4514c029b.jpg",
      },
      {
        id: 2,
        name: "Shun de Andrômeda",
        characterImage:
          "https://i.pinimg.com/564x/7b/04/bb/7b04bbbe74290dedc9c5caabc88d0850.jpg",
      },
      {
        id: 3,
        name: "Shiriyu de Dragão",
        characterImage:
          "https://i.pinimg.com/564x/70/22/7a/70227a2071976756f3f3ef5aefa55edb.jpg",
      },
    ],
  },
  {
    id: 11,
    name: "My Hero Academia",
    description:
      'My Hero Academia se passa em um mundo onde as pessoas têm superpoderes conhecidos como "Quirks". A história segue Izuku Midoriya, um jovem sem poderes que aspira ser um herói.',
    animeImage:
      "https://i.pinimg.com/originals/78/dd/2c/78dd2c58458f01d7ee741ed8d9f9f4b5.jpg",
    characters: [
      {
        id: 1,
        name: "Izuku Midoriya",
        characterImage:
          "https://i.pinimg.com/564x/15/e8/51/15e851932ffe63b639bc5bae8b0e66cd.jpg",
      },
      {
        id: 2,
        name: "Katsuki Bakugo",
        characterImage:
          "https://i.pinimg.com/564x/ca/10/2b/ca102b4e0c367a41f33c9f0438236841.jpg",
      },
      {
        id: 3,
        name: "Shoto Todoroki",
        characterImage:
          "https://i.pinimg.com/564x/09/20/e5/0920e522fc61f7befaa94d13594cc888.jpg",
      },
    ],
  },
  {
    id: 12,
    name: "Yu-Gi-Oh!",
    description:
      "Yu-Gi-Oh! segue Yugi Mutou, um jogador de jogos de cartas que possui um antigo artefato egípcio chamado Enigma do Milênio. À medida que ele joga Duel Monsters, eventos sobrenaturais ocorrem.",
    animeImage:
      "https://static.tvtropes.org/pmwiki/pub/images/duel_monsters.png",
    characters: [
      {
        id: 1,
        name: "Yugi Muto",
        characterImage:
          "https://i.pinimg.com/564x/f5/a7/a3/f5a7a3ef630d9e58a3678fce53d189ef.jpg",
      },
      {
        id: 2,
        name: "Seto Kaiba",
        characterImage:
          "https://i.pinimg.com/736x/16/44/8a/16448a83344cc24d1d51baae88698e44.jpg",
      },
      {
        id: 3,
        name: "Joey Wheeler",
        characterImage:
          "https://i.pinimg.com/564x/6f/83/cd/6f83cdb4a717bd397fd5c77803568c40.jpg",
      },
    ],
  },
  {
    id: 13,
    name: "Super Campeões",
    description:
      "Super Campeões (Captain Tsubasa) segue Tsubasa Ozora, um jovem talentoso no futebol que aspira se tornar um jogador profissional. Ele enfrenta desafios e competições enquanto busca alcançar seus sonhos.",
    animeImage:
      "https://m.media-amazon.com/images/M/MV5BZmE1YzRiMWEtODI5NS00ZDkzLWFmNTctOGNlYmU0MmJkODY4XkEyXkFqcGdeQXVyMjMxMDM2NjY@._V1_FMjpg_UX1000_.jpg",
    characters: [
      {
        id: 1,
        name: "Tsubasa Ozora",
        characterImage:
          "https://i.pinimg.com/564x/35/b6/a4/35b6a4be55427628567b9102645870c0.jpg",
      },
      {
        id: 2,
        name: "Kojiro Hyuga",
        characterImage:
          "https://i.pinimg.com/564x/95/4f/64/954f64063239ddde8ae07d0b7f32a276.jpg",
      },
      {
        id: 3,
        name: "Genzo Wakabayashi",
        characterImage:
          "https://i.pinimg.com/564x/56/ff/ba/56ffbab8f1754bf6818f05dcc93a9e3d.jpg",
      },
    ],
  },
];
export default animesData;
