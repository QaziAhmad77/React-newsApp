import React, { Component } from 'react';
import NewsItem from './NewsItem';
export class News extends Component {
  articles = [
    {
      status: 'ok',
      totalResults: 4,
      articles: [
        {
          source: {
            id: 'news24',
            name: 'News24',
          },
          author: 'Lynn Butler',
          title: 'Langeveldt hopes Proteas can bat for 2 days to save Melbourne Test',
          description:
            'Proteas bowling coach Charl Langeveldt hopes that their batters can deliver and bat for the next two days to save the second Test against Australia at Melbourne Cricket Ground.',
          url: 'https://www.news24.com/sport/cricket/proteas/langeveldt-hopes-proteas-can-bat-for-2-days-to-save-melbourne-test-20221228',
          urlToImage: 'https://cdn.24.co.za/files/Cms/General/d/7487/9f168705ef754e27ab0869b9d0903fef.jpg',
          publishedAt: '2022-12-28T13:42:16+00:00',
          content:
            '<ul><li>Proteas bowling coach Charl Langeveldt hopes their batting unit can do the job and save the second Test against Australia.</li><li>The Proteas trail by 371 runs and are 15-1 as they have to b… [+2423 chars]',
        },
        {
          source: {
            id: 'bbc-sport',
            name: 'BBC Sport',
          },
          author: null,
          title: 'Meet the England legend touring Australia in her 80s',
          description: 'England World Cup winner Enid Bakewell is aged 82 and tells BBC Sport about spending part of her winter playing cricket in Australia.',
          url: 'http://www.bbc.co.uk/sport/cricket/63973241',
          urlToImage: 'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/7684/production/_128104303_team.png',
          publishedAt: '2022-12-28T09:22:20.1940428Z',
          content:
            'Enid Bakewell, bottom right, with other members of East Anglian Veteran Ladies\r\nNot many 82-year-olds have spent their winter travelling to Australia from the UK to play cricket.\r\nBut, not many 82-ye… [+3802 chars]',
        },
        {
          source: {
            id: 'espn-cric-info',
            name: 'ESPN Cric Info',
          },
          author: null,
          title: 'PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com',
          description: 'Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com',
          url: 'http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket',
          urlToImage: 'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg',
          publishedAt: '2020-04-27T11:41:47Z',
          content:
            "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
        },
        {
          source: {
            id: 'espn-cric-info',
            name: 'ESPN Cric Info',
          },
          author: null,
          title: 'What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com',
          description: 'Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com',
          url: 'http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again',
          urlToImage: 'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg',
          publishedAt: '2020-03-30T15:26:05Z',
          content:
            'Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]',
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
