import React, { Component } from 'react';
import NewsItem from './NewsItem';
export class News extends Component {
  articles = [
    {
      status: 'ok',
      totalResults: 7,
      articles: [
        {
          source: {
            id: 'lequipe',
            name: "L'equipe",
          },
          author: "L'EQUIPE",
          title: 'Programme TV foot : à quelle heure et sur quelle chaîne voir les matchs de ce soir (28 décembre 2022) ?',
          description:
            "Retrouvez l'intégralité des retransmissions des matches de football du jour retransmis sur toutes les chaînes du bouquet TNT, Câble et Satellite. Ligue 1, Ligue 2, Premier League, coupes d'Europe... Suivez tous les matches en direct sur votre télévision ou en…",
          url: 'https://www.lequipe.fr/Football/Actualites/Programme-tv-foot-a-quelle-heure-et-sur-quelle-chaine-voir-les-matchs-de-ce-soir-28-decembre-2022/1371855',
          urlToImage: 'https://medias.lequipe.fr/img-photo-jpg/-/1500000001560312/4:0,2500:1664-640-427-75/16a19.jpg',
          publishedAt: '2022-12-28T06:00:27+00:00',
          content:
            'Ligue 1 : 16e journée \r\n- AC Ajaccio - Angers : à 15 heures en direct sur Prime Vidéo - Troyes - Nantes : à 15 heures en direct sur Prime Vidéo - Auxerre - Monaco : à 17 heures en direct sur Prime Vi… [+186 chars]',
        },
        {
          source: {
            id: 'fox-sports',
            name: 'Fox Sports',
          },
          author: null,
          title: 'College football bowl games: CFP semis and more, By the Numbers',
          description: 'From the Holiday Bowl to the CFP semifinals, here are the key stats to know for all the big bowl games left on the schedule.',
          url: 'http://www.foxsports.com/stories/college-football/college-football-bowl-games-by-the-numbers',
          urlToImage: 'https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/12/1408/814/12.27.22_By-the-Numbers_16x9.jpg?ve=1&tl=1',
          publishedAt: '2022-12-28T01:22:45Z',
          content:
            'The college football bowl season is closing with a bang.\r\nThe final stretch includes two epic matchups in the College Football Playoff semifinals, as the defending champion and No. 1-ranked Georgia B… [+8277 chars]',
        },
        {
          source: {
            id: 'google-news-uk',
            name: 'Google News (UK)',
          },
          author: null,
          title: 'Man stabbed to death in Birmingham nightclub on Boxing Day',
          description: 'Murder investigation launched after Cody Fisher, an amateur footballer was attacked at the Crane venue on Boxing Day',
          url: 'https://www.telegraph.co.uk/news/2022/12/27/man-stabbed-death-birmingham-nightclub-boxing-day/',
          urlToImage: 'https://www.telegraph.co.uk/content/dam/news/2022/12/27/TELEMMGLPICT000320610593_trans_NvBQzQNjv4Bq14FQhsJKr-QH5086pA9dWhW2GMV0ClaMMAjW6R-5rJU.jpeg?impolicy=logo-overlay',
          publishedAt: '2022-12-28T00:33:00+00:00',
          content:
            'Detectives are viewing CCTV from the nightclub and have urged anyone who was in the area to get in touch. Neighbourhood officers will be patrolling the area over the coming days to offer reassurance,… [+1744 chars]',
        },
        {
          source: {
            id: 'espn',
            name: 'ESPN',
          },
          author: 'Alex ScarboroughESPN Staff Writer ',
          title: 'Hall of Famer Ed Reed to be head coach at Bethune-Cookman',
          description:
            'Ed Reed, a Super Bowl champion and nine-time Pro Bowl selection with the Baltimore Ravens, has agreed to become the next head football coach at Bethune-Cookman, the university announced Tuesday.',
          url: 'http://espn.go.com/college-football/story/_/id/35330809/hall-famer-ed-reed-head-coach-bethune-cookman',
          urlToImage: 'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1227%2Fr1111231_1296x729_16%2D9.jpg',
          publishedAt: '2022-12-28T00:02:00Z',
          content:
            'Ed Reed, a Super Bowl champion and nine-time Pro Bowl selection with the Baltimore Ravens, has agreed to become the next head football coach at Bethune-Cookman, the university announced Tuesday.\r\nRee… [+1509 chars]',
        },
        {
          source: {
            id: 'fox-sports',
            name: 'Fox Sports',
          },
          author: null,
          title: 'College football transfer portal tracker: Sam Hartman leaves Wake Forest',
          description: 'As the calendar gets set to flip to 2023, a number of notable college football players will enter the transfer portal. Track the latest moves here.',
          url: 'http://www.foxsports.com/stories/college-football/college-football-transfer-portal-tracker',
          urlToImage: 'https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/11/1408/814/11.30.22_TransferPortalTracker_16x9.jpg?ve=1&tl=1',
          publishedAt: '2022-12-27T16:49:09Z',
          content:
            "It's here. College footballs new transfer portal window officially opened on Dec. 5. Despite new NCAA transfer windows being adopted and put into place, many players have already announced they will … [+48684 chars]",
        },
        {
          source: {
            id: 'bleacher-report',
            name: 'Bleacher Report',
          },
          author: 'Kristopher Knox',
          title: '7 NFL Players Who Deserve Contract Extensions Before the 2022 Season Ends',
          description: 'As the 2022 NFL season enters its final stretch, most of the football world is focused on the impending playoffs. However, many front-office executives are...',
          url: 'https://bleacherreport.com/articles/10059692-7-nfl-players-who-deserve-contract-extensions-before-the-2022-season-ends',
          urlToImage: 'https://media.bleacherreport.com/image/upload/x_91,y_58,w_1705,h_1137,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1671979728/gvqhs1iyaqojhsxqbbpw.jpg',
          publishedAt: '2022-12-26T12:00:00Z',
          content:
            "Stephen Maturen/Getty Images\r\nThe Indianapolis Colts will almost certainly be rebuilding in 2023, perhaps without interim head coach Jeff Saturday.\r\nSaturday's Colts have lost four straight, are out … [+1375 chars]",
        },
        {
          source: {
            id: 'espn-cric-info',
            name: 'ESPN Cric Info',
          },
          author: null,
          title: "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
          description: 'Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com',
          url: 'http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles',
          urlToImage: 'https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif',
          publishedAt: '2020-04-27T07:20:43Z',
          content:
            "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
        },
      ],
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Hot news</h2>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
