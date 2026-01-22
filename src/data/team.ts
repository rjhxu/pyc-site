export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamYear {
  [year: string]: TeamMember[];
}

export const teams: TeamYear = {
  '2024-2025': [
    /* =====================
      CO-CHAIR
      ===================== */
    {
      id: '1',
      name: 'Sydney Lieu',
      title: 'Co-Chair',
      description: `hi squad 👯 my name is sydney, and i am one of the cochairs for pyc ‘25. i am a grade twelve student (unfortunately) @ markville, and this is my final year in the council :( but i am super excited for all of our events this year !! 💌

    i am highkey hillary 2.0 😲 i love taylor swift (eras tour n4 #flex but i’m missing semi formal (#unflex), harry potter, the hunger games, titanic and the notebook (😭😭😭😭). in my free time, you will catch me reading (i read an unhealthy amount of books), sleeping, or studying for school 😒 erm i LOVE spanish class, and i loooove math (i complain everyday).  anyhoo, feel free to message me @sydneylieuu 4 +100000 aura. and i will see all of you guys at every event (#threat🤺)`,
      image: '/assets/team/sydney-lieu.jpg',
    },
    {
      id: '2',
      name: 'Catherine Li',
      title: 'Co-Chair',
      description: `hey everypony! im catherine and i am one of the cochairs this year 👆 i am in grade 12 at st. theresa of lisieux chs and i am so excited for my second year as a pyc member 😜

    i looove biology, specifically obstetrics and gynecology (aspiring obgyn ✊) and vanessa shelly from the fnaf movie (we are married irl). in terms of art, i love singing and any type of visual arts … many people know me as a theatre kid, but i don’t do a lot of drama anymore ☹️. anyways hmu @kittysbird and come to every pyc event be there or be square 🥶`,
      image: '/assets/team/catherine-li.jpg',
    },

    /* =====================
      EXTERNALS
      ===================== */
    {
      id: '3',
      name: 'Terrence Zhu',
      title: 'Externals',
      description: `hey everybody!!! my name is terrence zhu 💪and i am a grade 12 student at markville secondary school 📚🤓. this is my first year 1️⃣ on PYC and my role on PYC is externals because i love sending emails to people 💌. in my free time i like to play sports ⚽🥏🏒🏃 and go to the gym 🏋️🏋️. i also used be a hockey demon 😈🏒🥅 but unfortunately a scary mutation has forced me to quit 🧬👽. i am also a part-time barber 💇‍♂️so if u tryna gain aura hmu 🔥🔥. PYC is gonna hawk tuah 🫣all the events this year and its gonna be soooo demure 😌💅. dm me @terrencezhuu 😛😛`,
      image: '/assets/team/terrence-zhu.jpg',
    },
    {
      id: '4',
      name: 'Haaniya Janjua',
      title: 'Externals',
      description: `heyy guys‼️my name is haaniya n i’m a gr10 @ pierre elliot trudeau ss, im part of the externals team and this is my first yr on PYC 🙀 im rly excited to work with the rest of the team and make this year and it’s events super memorable 🔥

    my favorite things to do r  buying shoes n thrifting. i love reading n watching horror movies  
    — some of my favorite artists are SZA, Frank Ocean, Steve Lacey and Tyler the Creator anyway hmuu @haaniya_main 😸 if u ever have any questions abt PYC, events or just wanna  talk HOPE TO SEE YOU ALL AT FUTURE EVENTS‼️
    🗣️🗣️🗣️`,
      image: '/assets/team/haaniya-janjua.jpg',
    },
    {
      id: '5',
      name: 'Nicole Wong',
      title: 'Externals',
      description: `WSP GUYS!! i’m nicole, a grade 11 @ pierre elliott hs. i’m ⅔ of the externals team, and i’m so hyped for my first year on PYC 🤩🤩

    when i’m not working on bringing u absolutely FIRE events with the rest of PYC u can find me sobbing over my courseload, playing a tune on the piano, or crocheting (send patterns plz 🙏)

    feel free to hmu @shroom_shroom900 if u have any questions, or if u just want to talk. CANT WAIT TO SEE YOU AT PYC EVENTS!!!`,
      image: '/assets/team/nicole-wong.jpg',
    },

    /* =====================
      MEDIA
      ===================== */
    {
      id: '6',
      name: 'Michael Liang',
      title: 'Media',
      description: `Hey, My name is Michael, I go to St Augustine and I love food.`,
      image: '/assets/team/michael-liang.jpg',
    },
    {
      id: '7',
      name: 'Victoria Yeung',
      title: 'Media',
      description: `HEY GUYS ITS YA BOI VICTORIA 🔥🔥🔥I’m a grade 11 at Markville SS and I’m so excited to be apart of the media team. It’s my first year on PYC and im super duper looking forward to a super duper fun year 😁

    3 things abt me. I LOVE minesweeper. My fastest time for the 9x9 is 2.541 seconds 😖 its not an addiction i swear 😍🤞. erm my fav artists are SKZ 😹‼ oh and one ok rock and burnout syndrome and yuuri ‼️‼️‼️🤸‍♀️ ok also I LOVE dr stone and hxh. Pls gimme drama or anime recs 👯‍♀️
    Anyways. If u have a better PB than me in minesweeper. HMU @v1c_70r1a well actually don’t cuz I’ll get sad and get addicted to minesweeper again 😋but ermm dm me if u just wanna talk 😚 

    𝖄𝖔𝖚 𝖜𝖎𝖑𝖑 𝖇𝖊 𝖆𝖙 𝖊𝖛𝖊𝖓𝖙𝖘.`,
      image: '/assets/team/victoria-yeung.jpg',
    },
    {
      id: '8',
      name: 'Brenda Xu',
      title: 'Media',
      description: `hi everyone!! my name is brenda, i'm a grade 11 at markville ss and this is my first year on pyc!!! im super excited to be apart of the team and can't wait for our upcoming events 💌 

    one of my favourite things ever is music! i loveeelovelove music 😙i literally have my airpods on 24/7… I also play 3 instruments!! 🎹🎸🎺
    some of my fav artists are tomorrow x together, enhypen, ricky montgomery, tommy febuary6, & cas 🔥
    aside from music, i also really love visual art 🤭 if i'm not tweaking over schoolwork (very rare 😒), i'll probably be binging dramas, reading manhwas, or playing minecraft on peaceful mode because im a scaredy cat 😓 😓 feel free to reach out to me @brendaxyou if you have any questions, or just wanna talk! I hope to (BETTER) see you all at our events 😜huzzah!`,
      image: '/assets/team/brenda-xu.jpg',
    },
    {
      id: '9',
      name: 'Melissa Zhang',
      title: 'Media',
      description: `Hey chat! My name is Melissa and I am on the media team for PYC this year. I am a grade 12 student at Richmond Hill high school and im super excited for my first year being a part of the PYC team 🔥🔥

    A little bit about me, I really enjoy art mainly digital illustration and graphic design, collecting figurines (smiskis), and playing a short list of games my barely operating pc can run. I also really enjoy listening to music with some of my favourite artists being Kiss of Life, Juice WRLD, Kendrick Lamar, and Chappell Roan. Anyways, hit me up @i__see____ if you have any questions and I’ll hope to see everyone at future events💯`,
      image: '/assets/team/melissa-zhang.jpg',
    },

    /* =====================
      TECH
      ===================== */
    {
      id: '10',
      name: 'Ryan Xu',
      title: 'Tech Chair',
      description: `Hey gang! My name is Ryan and I’m the tech exec 👨‍💻 this year! I’m a Grade 12 @ Markville ☝️🤓 and I’m excited to bring you the best PYC events ever‼️

    When I’m not studying 📖 or at the gym 💪 i’m probably brawling up (900🏆 piper main 🤫). I used to be a menace 😈😈 on the rift (silver II peak ✊) but i retired after Riot and i agreed on a permanent vacation 😢. My favourite artists are Kanye, Dominic Fike, and Travis😹. PYC is going to be absolutely amazing 🤯 this year! make sure to check the website out as well🔥🔥 ! (when it’s up lol😅) 

    feel free to hmu @ryannjxu about a brawl duo, PYC, or anything else lol😁!`,
      image: '/assets/team/ryan-xu.jpg',
    },

    /* =====================
      MARKETING
      ===================== */
    {
      id: '11',
      name: 'Catherine Cai',
      title: 'Marketing',
      description: `hey guys! im Catherine and im in grade 10 at bayview ss. This is my first year on PYC and im SUPER excited, especially solstice!! 

    Honestly im pretty uninteresting but i LOVE chat atlantic and enhypen. Other than crying over school or playing roblox, i usually js rot in bed and scroll on either tiktok or instragram, or im out blowing all my money on funko pops and clothes. Anyways, feel free to dm me on instagram @catherine._cai if you have any questions or anything else. MAKE SURE TO COME TO PYC EVENTS OR ELSE I WILL HUNT YOU DOWN.`,
      image: '/assets/team/catherine-cai.jpg',
    },
    {
      id: '12',
      name: 'Michelle Do',
      title: 'Marketing',
      description: `hiii guysss, my name is michelle and im in grade 12 at unionville hs!!!! this is my first year on PYC and im tryna make it the BEST! im so excited for our events and i hope to see ALL OF U there 😊 (please)

    a bit about me is that i have 2 cats and i love nerd gummy clusters. i also love listening to drake, lana del rey, pnd, bryson tiller, brent, and MORE. feel free to dm me @mchelledo im always down to talk, or if ur tryna get ur nails done hit up @pimpedbymichelle 😩`,
      image: '/assets/team/michelle-do.jpg',
    },
    {
      id: '13',
      name: 'Audrey Fabroa',
      title: 'Marketing',
      description: `Hey everyone!! My name is Audrey Fabroa and I’m a grade 12 student at St.Augustine CHS. This is my first year at PYC and I’m looking forward to giving my all to contribute to the artistic community! Some things about me are that I love nature, painting, my dog, fashion, thrifting vintage clothes, YAPPING, my friends and ofc family ❤️❤️. I love all kinds of music but my favorite artists are Kanye west, queen, Etta James, the Beatles and Michael Jackson. My favorite movies are To I’ve loved before and Ferris bueller’s day off!! Anyways I can’t wait to work with all the extremely talented people on PYC 😽😽😽. Check me out at @audistarr 😈`,
      image: '/assets/team/audrey-fabroa.jpg',
    },

    /* =====================
      LOGISTICS
      ===================== */
    {
      id: '14',
      name: 'Kathy Hong',
      title: 'Logistics',
      description: `hi everyone !! i’m kathy and a gr10 @ pierre elliott trudeau hs :) i’m the second logistics member alongside hillary - it’s my first year on PYC and i’m so excited to make a memorable year with all of yall 🎉

    i love studio ghibli, cats, art, sunsets/skies and a wide variety of music (niki, svt, kpop, lyn lapid, taylor swift, w2e, mitski, joji, keshi and so much more). i love science and english (ALSO AN AVID MATH HATER). since everyone is promoting their personal accounts count me in: @kathyy.hong_ on ig. Feel free to reach out for any questions, chat or obsess over sunsets with me !! so excited to see u all at pyc events !!`,
      image: '/assets/team/kathy-hong.jpg',
    },
    {
      id: '15',
      name: 'Hillary Qi',
      title: 'Logistics',
      description: `hi!!! my name is hillary and i'm in gr12 at markville ss! i'm one of the two members of the logistics team at PYC 😩 it's my first year on PYC and i am thrilled to be a part of the team 🤩

    my favorite artist is taylor swift and i love THE HUNGER GAMES, harry potter, hamilton the musical, and binge watching MARVEL movies/shows (ca: tws has my whole heart). I AM AN AVID MATH HATER 😵‍💫😵‍💫😵‍💫 feel free to hmu @hillsqi on instagram (unless u like math jkjk) and COME TO PYC EVENTS GUYSSSS`,
      image: '/assets/team/hillary-qi.jpg',
    },
  ],


  '2025-2026': [
    {
      id: '1',
      name: 'New Member',
      title: 'Position',
      description: 'Bio here',
      image: '/assets/team/new-member.jpg',
    }
  ]
};

// TO ADD A NEW YEAR'S TEAM:
// Copy the '2024-2025' structure and create a new year key (e.g., '2025-2026')
// Example:
// '2025-2026': [
//   {
//     id: '5',
//     name: 'New Member',
//     title: 'Position',
//     description: 'Bio here',
//     image: '/assets/team/new-member.jpg',
//   },
// ],