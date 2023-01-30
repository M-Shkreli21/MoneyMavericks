# Money Mavericks

## Description

Money Mavericks was created for individual investors, experienced or not, to help educate them more about the investing space. With Money Mavericks, users can create accounts, sign in and explore the many tabs this project has to offer.

Stocks:

The stocks section brings information regarding company information, profile, competitors, analyst recommendations and a price chart created using Chartjs. Users can search stocks by typing the company Ticker in the search bar located at the top of the tab.

Crypto:

The crypto section contains an infinite scroll table that highlights a cryptocurrencies name, logo as well as the maximum supply. Users can search for crypto pricing and other information by typing in the crypto name into the search bar located at the top of the tab.

Market Related News:

The MRN tab renders the most recent 100 market related news articles containing a thumbnail, source, title and a short summary. Users can click the title which is a hyperlink that takes them to the full article.

Financial Terms Tab:

The financial terms tab is used to help teach users about fiinancial terminology and definitions. The definitions were provided thanks to Investopedia.com

Discussion Board:

The discussion board tab allows users to post thoughts on financial related topics. As of right now, users can only post and delete their own discussion posts.

The backend was created using Ruby on Rails with a PostgreSQL database. The backend database contains a table for users, discussion posts and financial terms.

All other data was provided thankfully by the following external API's

1. Finnhub
2. AlphaVantage
3. CoinLayer
4. CoinGecko

In order to use the site from github, please follow the below steps:

1. Clone to repository into your local machine

2. Use the following command to begin the backend server (PostgreSQL) bundle install Rails s

3. Now that the backend is connected, run npm install --prefix client, in order to download the necessary node modules and packages for the frontend.

4. Once the packages have been downloaded, run npm start --prefix client

Now that you have access to the project, please enjoy Money Mavericks. I hope that it helps you with investing in anyway!
