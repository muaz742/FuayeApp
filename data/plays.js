/** The dummy data for theater plays */

const PLAYS = [
  {
    id: 1,
    name: 'Hamlet',
    author: 'William Shakespeare',
    poster:
      'https://upload.wikimedia.org/wikipedia/commons/7/7a/Hamlet_und_Horatio_auf_dem_Friedhof_%28Eug%C3%A8ne_Ferdinand_Victor_Delacroix%29.jpg',
    description:
      "Hamlet is a tragedy by William Shakespeare, probably written between 1599 and 1601. The play, set in Denmark, recounts how Prince Hamlet exacts revenge on his uncle Claudius, who has murdered Hamlet's father, the King, and then taken the throne and married Hamlet's mother. The play vividly charts the course of real and feigned madness—from overwhelming grief to seething rage—and explores themes of treachery, revenge, incest, and moral corruption.",
  },
  {
    id: 2,
    name: 'The Miser',
    author: 'Molière',
    poster:
      'https://firebasestorage.googleapis.com/v0/b/bto-preview.appspot.com/o/afis-cimri.webp?alt=media',
    description:
        'The Miser (French: L\'Avare; pronounced [lavaʁ]) is a five-act comedy in prose by the French playwright Molière. It was first performed on September 9, 1668, in the theatre of the Palais-Royal in Paris. The play was first produced when Molière\'s company was under the protection of Louis XIV himself. It was loosely based on the Latin comedy Aulularia by Plautus, from which many incidents and scraps of dialogue are borrowed, as well as from contemporary Italian farces.',
  },
  {
    id: 3,
    name: 'Macbeth',
    author: 'William Shakespeare',
    poster:
      'https://upload.wikimedia.org/wikipedia/commons/2/2d/Thomas_Keene_in_Macbeth_1884_Wikipedia_crop.png',
    description:
      'Macbeth is a tragedy by William Shakespeare; it is thought to have been first performed in 1606. It dramatises the damaging physical and psychological effects of political ambition on those who seek power for its own sake. Of all the plays that Shakespeare wrote during the reign of James I, who was patron of Shakespeare\'s acting company, Macbeth most clearly reflects the playwright\'s relationship with his sovereign. It was first published in the Folio of 1623, possibly from a prompt book, and is Shakespeare\'s shortest tragedy.'
  },
  {
    id: 4,
    name: 'La Bourgeoise Gentilhomme',
    author: 'Molière',
    poster:
      'https://firebasestorage.googleapis.com/v0/b/bto-preview.appspot.com/o/afis-kibarlik-budalasi.webp?alt=media',
    description:
        'The Bourgeois Gentleman (French: Le Bourgeois gentilhomme [lə buʁʒwa ʒɑ̃tijɔm], literally The Bourgeois Gentleman or The Middle-Class Aristocrat or The Would-Be Noble) is a five-act comédie-ballet—a play intermingled with music, dance and singing—written by Molière, first presented on 14 October 1670 before the court of Louis XIV at the Château of Chambord by Molière\'s troupe of actors. Subsequent public performances were given at the theatre of the Palais-Royal beginning on 23 November 1670. The music was composed by Jean-Baptiste Lully, the choreography was by Pierre Beauchamp, the sets were by Carlo Vigarani and the costumes were done by the chevalier d\'Arvieux.',
  },
  {
    id: 5,
    name: 'The Tempest',
    author: 'William Shakespeare',
    poster:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/William_Hamilton_Prospero_and_Ariel.jpg',
    description:
        'The Tempest is a play by William Shakespeare, probably written in 1610–1611, and thought to be one of the last plays that Shakespeare wrote alone. After the first scene, which takes place on a ship at sea during a tempest, the rest of the story is set on a remote island, where the sorcerer Prospero, a complex and contradictory character, lives with his daughter Miranda, and his two servants—Caliban, a savage monster figure, and Ariel, an airy spirit. The play contains music and songs that evoke the spirit of enchantment on the island. It explores many themes, including magic, betrayal, revenge, and family.',
  },
  {
    id: 6,
    name: 'Othello',
    author: 'William Shakespeare',
    poster:
      'https://upload.wikimedia.org/wikipedia/commons/1/14/Thomas_Keene_in_Othello_1884_Poster.JPG',
    description:
        'Othello (The Tragedy of Othello, the Moor of Venice) is a tragedy by William Shakespeare, probably written in 1603. The story revolves around two characters, Othello and Iago. Othello is a Moorish general in the Venetian army, well-respected by everyone around him. Iago is Othello\'s ambitious friend. Othello promotes Michael Cassio to the position of lieutenant and Iago becomes extremely jealous. Iago begins plotting against Othello, the eponymous hero, and his new wife Desdemona, who is the daughter of a Venetian senator. Iago convinces Othello that Desdemona is having an affair with Cassio.',
  },
  {
    id: 7,
    name: 'Romeo and Juliet',
    author: 'William Shakespeare',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Romeo_and_juliet_brown.jpg',
    description:
        'Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare\'s most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal young lovers.',
  },
  {
    id: 8,
    name: 'The Merchant of Venice',
    author: 'William Shakespeare',
    poster:
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Maurycy_Gottlieb_-_Shylock_e_jessica.jpg',
    description:
    'The Merchant of Venice is a play by William Shakespeare, believed to have been written between 1596 and 1598. A merchant in Venice named Antonio defaults on a large loan on behalf of Bassanio, his dear friend, provided by a Jewish moneylender, Shylock.\n\nAlthough classified as a comedy in the First Folio and sharing certain aspects with Shakespeare\'s other romantic comedies, the play is most remembered for its dramatic scenes, and it is best known for the character Shylock and his famous demand for a "pound of flesh" in retribution. The play contains two famous speeches, that of Shylock, "Hath not a Jew eyes?" on the subject of humanity, and that of Portia on "the quality of mercy". Debate exists on whether the play is anti-Semitic, with Shylock\'s insistence on his legal right to the pound of flesh being in opposition to Shylock\'s seemingly universal plea for the rights of all people suffering discrimination.'
  },
  {
    id: 9,
    name: "A Midsummer Night's Dream",
    author: 'William Shakespeare',
    poster:
      'https://upload.wikimedia.org/wikipedia/commons/6/60/John_Simmons_-_Titania_sleeping_in_the_moonlight_protected_by_her_fairies.jpg',
    description:
        "A Midsummer Night's Dream is a comedy written by William Shakespeare in 1595/96. The play consists of multiple subplots that revolve around the marriage of Theseus and Hippolyta. One subplot revolves around a conflict between four Athenian lovers, one about a group of six amateur actors who have to act out their interpretation of the play 'Pyramus and Thisbe' at the wedding of Theseus and Hippolyta. The play is one of Shakespeare's most popular works for the stage and is widely performed across the world.",
  },
  {
    id: 10,
    name: 'The Comedy of Errors',
    author: 'William Shakespeare',
    poster:
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Scene_from_Comedy_of_Errors.jpg',
    description:
      "The Comedy of Errors is one of William Shakespeare's early plays. It is his shortest and one of his most farcical comedies, with a major part of the humour coming from slapstick and mistaken identity, in addition to puns and word play. The Comedy of Errors is, along with The Tempest, one of only two Shakespearean plays to observe the Aristotelian principle of unity of time—that is, that the events of a play should occur over 24 hours. It has been adapted for opera, stage, screen and musical theatre numerous times worldwide.",
  },
];

export default PLAYS;
