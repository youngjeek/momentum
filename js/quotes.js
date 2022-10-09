const quotes = [
{
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
},
{
    quote: "If not us, then who? If not now, then when?",
    author: "John E. Lewis",
},
{
    quote: "바닥짐을 싣지 않은 배는 안전하지 못하여 곧장 갈 수 없는 것처럼",
    author: "쇼펜하우어",
},
{
    quote: "우리, 맨날 다 처음이잖아.",
    author: "윤여정",
},
{
    quote: "서두를 필요는 없다. 반짝일 필요도 없다. 우린 그저 자기 자신 외에는 아무도 될 필요가 없다.",
    author: "버지니아 울프",
},
{
    quote: "매일 행복하지는 않지만, 행복한 일은 매일 있어.",
    author: "곰돌이 푸",
},
{
    quote: "The mass of men lead lives of quiet desperation",
    author: "Henry David Thoreau",
},
{
    quote: "늦었다고 생각할 땐 진짜 너무 늦은 거다. 그러니 지금 당장 시작해자.",
    author: "박명수",
},
{
    quote: "아무도 네 인생을 대신 살아주지 않는다",
    author: "Philip Dormer Stanhope Chesterfield",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[0]);


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
//반올림   ceil은 올림 floor 내림
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;