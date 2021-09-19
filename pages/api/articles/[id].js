import {articles} from '../../../data'

// get data from specific id
export default function handler({query:{id}}, res){
    // filter out the specific article we want by that id
    const filtered = articles.filter(article=> article.id === id)

    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }
    else{
        res.status(404).json({message:`Article with the id of ${id} is not found`})
    }
}