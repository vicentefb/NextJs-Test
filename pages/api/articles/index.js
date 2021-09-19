import {articles} from '../../../data'

// the path would be api/articles
export default function handler(req, res){
    res.status(200).json(articles)
}