# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Financial Terms"

Term.create(term_name: "Bear Market", definition: "A condition in which securities prices fall 20% or more from recent highs amid widespread pessimism and negative investor sentiment")
Term.create(term_name: "Bull Market", definition: "A colloquial term used in the financial markets when asset prices have risen or are expected to rise")
Term.create(term_name: "Bond", definition: "A fixed-income instrument that represents a loan made by an investor to a borrower (typically corporate or governmental")
Term.create(term_name: "Blockchain", definition: "A digital database or ledger that is distributed amont the nodes of a peer-to-peer network")
Term.create(term_name: "Business Cycle", definition: "A cycle of expansion and contraction that economies undergo over time")

Term.create(term_name: "Capitalism", definition: "An Economic system characterized by private ownership in which the free market alone controls the production of goods and services")
Term.create(term_name: "Bitcoin Mining", definition: "The process of verifying transactions on the Bitcoin blockchain by solving mathematical puzzles, for which miners are rewarded with new bitcoin")
Term.create(term_name: "Compound Interest", definition: "The interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods")
Term.create(term_name: "Consumer Price Index (CPI)", definition: "An index that measures the monthly change in prices paid by U.S. consumers")
Term.create(term_name: "Correlation", definition: "A statistic that measures the degree to which two securities move in relation to each other")

Term.create(term_name: "Debt-to-Equity (D/E) Ratio", definition: "A ratio that is used to evaluate a company's financial leverage and is calculated by dividing a company's total liabilities by its shareholder equity")
Term.create(term_name: "Derivative", definition: "A type of financial contract whose value is dependent on an underlying asset, group of assets, or benchmark")
Term.create(term_name: "Dividend", definition: "The distribution of corporate profits to qualified shareholders, as determined by the company's board of directors")
Term.create(term_name: "Dividend Yield", definition: "A financial ratio showing the return an investor would earn from an investment based solely on its divident payments")
Term.create(term_name: "EBITDA", definition: "A widely used measure of corporate profitability, which stands for Earnings Before Interest, Taxes, Depreciation, and Amortization")

Term.create(term_name: "Earnings Per Share (EPS)", definition: "A company's net profit divided by the number of common shares it has outstanding; it indicates how much money a company makes for each share of its stock and is a widely used metric for estimating corporate value")
Term.create(term_name: "Exchange Rate", definition: "An exchange rate is a rate at which one currency will be exchanged for another currency and affects trade and movement of money between countries")
Term.create(term_name: "Free Market", definition: "An economic system based on supply and demand with little or no government control")
Term.create(term_name: "Gross Margin", definition: "The amount of money a company retains after incurring the direct costs associated with producing the goods it sells and services it provides")
Term.create(term_name: "Gross Profit", definition: "The profit a company makes after deducting the costs associated with making and selling its products, or the costs associated with providing its services")

Term.create(term_name: "Gross Domestic Product (GDP)", definition: "The total monetary or market value of all the finished goods and services produced within a country's borders in a specific time period")
Term.create(term_name: "Inflation", definition: "A rise in prices, which can be translated as the decline of purchasing power over time")
Term.create(term_name: "Margin Call", definition: "A broker's demand that an investor who has borrowed money to buy securities deposit additional funds when the equity in their account drops below a minimum value, known as the maintenance margin")
Term.create(term_name: "Price-to-Earnings (P/E) Ratio", definition: "A stock valuation metric that compares a company's share price to its earnings per share (EPS)")
Term.create(term_name: "Beta", definition: "A measure of the volatility of a security compared to the market as a whole (usually the S&P 500)")

Term.create(term_name: "Market Capitalization", definition: "The total dollar market value of a company's outstanding shares of stock. Commonoly referred to as 'Market Cap'")

puts "Financial Terms have been added to the DB"