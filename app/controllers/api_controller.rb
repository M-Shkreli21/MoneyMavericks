require 'dotenv-rails'
require 'json'
Dotenv.load

class ApiController < ApplicationController

    skip_before_action :check_user

    def company_profile
        cp_response = RestClient.get "https://www.alphavantage.co/query?function=OVERVIEW&symbol=#{params["symbol"]}&apikey=#{ENV["AV_API_KEY"]}",
        {content_type: :json, accept: :json}

        ci_info = JSON.parse(cp_response)

        if ci_info
            render json: ci_info
        else
            render json: {message: "Stock not found"}
        end
    end

    def stock_quote
        sq_response = RestClient.get "https://finnhub.io/api/v1/quote?symbol=#{params["symbol"]}&token=#{ENV["FINNHUB_API_TOKEN"]}",
        {content_type: :json, accept: :json}

        sq_info = JSON.parse(sq_response)

        if sq_info
            render json: sq_info
        else
            render json: {message: "Stock not found"}
        end
    end

    def stock_peers
        sp_response = RestClient.get "https://finnhub.io/api/v1/stock/peers?symbol=#{params["symbol"]}&token=#{ENV["FINNHUB_API_TOKEN"]}",
        {content_type: :json, accept: :json}

        sp_info = JSON.parse(sp_response)

        if sp_info
            render json: sp_info
        else
            render json: {message: "Stock not found"}
        end
    end

    def stock_transactions
        st_response = RestClient.get "https://finnhub.io/api/v1/stock/insider-transactions?symbol=#{params["symbol"]}&token=#{ENV["FINNHUB_API_TOKEN"]}",
        {content_type: :json, accept: :json}

        st_info = JSON.parse(st_response)

        if st_info
            render json: st_info
        else
            render json: {message: "Stock not found"}
        end
    end

    def stock_recommendations
        sr_response = RestClient.get "https://finnhub.io/api/v1/stock/recommendation?symbol=#{params["symbol"]}&token=#{ENV["FINNHUB_API_TOKEN"]}",
        {content_type: :json, accept: :json}

        sr_info = JSON.parse(sr_response)

        if sr_info
            render json: sr_info
        else
            render json: {message: "Stock not found"}
        end
    end

    def stock_info
        si_response = RestClient.get "https://finnhub.io/api/v1/stock/profile2?symbol=#{params["symbol"]}&token=#{ENV["FINNHUB_API_TOKEN"]}",
        {content_type: :json, accept: :json}

        si_info = JSON.parse(si_response)

        if si_info
            render json: si_info
        else
            render json: {messagee: "Stock not found"}
        end
    end

    def stock_news
        sn_response = RestClient.get "https://finnhub.io/api/v1/news?category=general&token=#{ENV["FINNHUB_API_TOKEN"]}"
        {content_type: :json, accept: :json}

        sn_info = JSON.parse(sn_response)

        if sn_info
            render json: sn_info
        else
            render json: {messagee: "Stock not found"}
        end
    end

    def crypto_list
        cl_response = RestClient.get "http://api.coinlayer.com/list?access_key=#{ENV["COINLAYER_ACCESS_KEY"]}"
        {content_type: :json, accept: :json}

        cl_info = JSON.parse(cl_response)

        if cl_info
            render json: cl_info
        else
            render json: {message: "Crypto Not Found"}
        end
    end

    def crypto_info
        ci_response = RestClient.get "https://api.coingecko.com/api/v3/simple/price?ids=#{params["id"]}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true"
        {content_type: :json, accept: :json}

        ci_info = JSON.parse(ci_response)

        if ci_info
            render json: ci_info
        else
            render json: {message: "Crypto Not Found"}
        end
    end


end
