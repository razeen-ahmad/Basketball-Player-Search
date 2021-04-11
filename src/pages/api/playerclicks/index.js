import dbConnect from '../../../util/dbConnect';
var PlayerClickCount = require('../../../../models/PlayerClickCount.js');

export default async function handler(req, res) {
  const { method } = req;
  const { player_id } = req.query;
  const { first_name } = req.query;
  const { last_name } = req.query;
  const { team } = req.query;

  await dbConnect();//connect to database

  switch (method) {
    case 'GET':
      try {
        //get all data from database
        let playerClicks = {};
        //check if parameters are searching for a specific player_id
        if(player_id){
            playerClicks = await PlayerClickCount.find({player_id});
        }
        //otherwise, get all data for all players
        else{
            playerClicks = await PlayerClickCount.find({});
        }
        const data = playerClicks
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, "message" : "error fetching data from database" });
      }
      break;
    //method to update(increment) existing playerclick entry or create new one
    case 'PUT':
        try{
            //this method requires all query params
            if(!player_id || !first_name || !last_name || !team){
                res.status(400).json({ success: false, "message" : "need all query params" })
            }
            //first check if player_id is already in database
            const playerClicks = await PlayerClickCount.find({player_id});
            //if this player_id is not in database, then create and add new one, with clicks instantiated to 1
            if(playerClicks.length == 0) {
                const newPlayerClicks = await PlayerClickCount.create(
                    {
                        player_id, 
                        clicks: 1,
                        first_name,
                        last_name,
                        team,
                    }
                );
                res.status(201).json({ success: true, "message": "successfully created new document in database" })
            }
            //otherwise, we only want to increment 'clicks' counter of existing player_id in database
            else {
                const thisPlayerClicks = playerClicks[0].get('clicks');
                const updatedPlayerClicks = await PlayerClickCount.updateOne({player_id}, { clicks: thisPlayerClicks + 1});
                res.status(200).json({ success: true, data: updatedPlayerClicks });
            }
        } catch (error){
            res.status(400).json({ success: false, "error": "error updating/creating database entries" })
        }
        break;
    default:
      res.status(400).json({ success: false, "error": "not valid method" });
      break;
  }
}
