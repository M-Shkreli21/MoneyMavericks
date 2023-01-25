import { Typography } from "@mui/material";

function Home() {
    return(
        <div className="home_container">
            <div className="mission_statement">
            <h1 className="home_page_message">Welcome to Money Mavericks</h1>
            <h3>Mission Statement:</h3>
            <Typography variant='body1' gutterBottom>Here at Money Mavericks, our goal is to help educate individuals in basic financial concepts and terminology. Founded by Mark Shkreli who is a former employee of Morgan Stanley and has studied Finance for 5+ years. 
            As someone who spent more time teaching himself Finance outside the classroom than inside, he has aspired to help individuals get the tools they need to succeed as a retail investor in this crazy mix of Wall Street vs. Main Street. Money Mavericks is just the 
            beginning of a very long and complex web application to help everyone regardless if you have expereience or not</Typography>
            <br></br>
            <h3>Website Capabilities</h3>
            <Typography variant="body1" gutterButton>With Money Mavericks you as a user can search stocks by ticker and get company information as well as a list of competitors and analyst recommendations. You are also able to see a 6 month chart of closing prices that update daily thanks to the powerful AlphaVantage API.</Typography>
            <br></br>
            <Typography variant="body1" gutterButton>In the crypto tab you can see a infinite scroll table representing the many available cryptocurrencies along with the max supply. When you enter in a crypto name in the search bar you will see the current Price, Market Cap, 24Hr Change and Volume.</Typography>
            <br></br>
            <Typography variant="body1" gutterButton>Market related news are consistently refreshing with the top 100 news stories that relate to the market as a whole or can be based on a specific topic</Typography>
            <br></br>
            <Typography variant="body1" gutterButton>Terms are a collection of financial terminology that may or may not be known to the general retail investing population. Our main goal is to expand on this section and allow users to be well versed in financial terminology</Typography>
            <br></br>
            <Typography variant="body1" gutterButton>Discussions are a place for all users to post their thoughts on current market conditions or specific company related topics. Our next step in this project is the give the users availability to comment on posts and interact with one another.</Typography>
            <br></br>
            <Typography variant="body1" gutterButton>Please note that there are many more features that are in store that we as a team continuously work on to help better the user expereince. We hope to one day be the go-to site for people to learn about finance and general investing.</Typography>
            </div>
            <br></br>
            <div className="home_page_bottom">
            <Typography sx={{mb: 0}} variant='overline' display='block' gutterBottom>In order to fully access the websites capabilities please sign in, or sign up if you aren't already a part of the Money Maverick family</Typography>
            <Typography sx={{mb: 0}} variant='overline' display='block' gutterBottom>Data provided by: FinnHub, AlphaVantage, CoinLayer & CoinGecko API's</Typography>
            </div>
        </div>
    )
}

export default Home;