import dbConnect from '../../../util/dbConnect';
const PlayerClickCount = require('../../../../models/PlayerClickCount');

export default async function handler(req, res) {
  const {
    query: { player_id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const playerClicks = await PlayerClickCount.findByOne({player_id})
        if (!playerClicks) {
          return res.status(400).json({ success: false, reason: "this player_id is not in database" })
        }
        res.status(200).json({ success: true, data: playerClicks })
      } catch (error) {
        res.status(400).json({ success: false, reason: "error" })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        //first check if player_id exists in the database
        const playerClicks = await PlayerClickCount.findByOne({player_id})
        //if player_id not in database, need to instantiate a new model with 1 click.
        if (!playerClicks) {
          const newPlayerClicks = await PlayerClickCount.create(
            {
              player_id,
              clicks: 1,
            }
          )
          return res.status(201).json({ success: true, data: newPlayerClicks })
        }
        else{//this player exists in the database, only need to increment click counter
          playerClicks.clicks = playerClicks.clicks + 1;
          res.status(200).json({ success: true, data: playerClicks })
        }
      } catch (error) {
        res.status(400).json({ success: false, reason: "error", player_id, "error": error })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedPlayerClicks = await PlayerClickCount.deleteOne({ player_id })
        if (!deletedPlayerClicks) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false, reason: "error" })
      }
      break

    default:
      res.status(400).json({ success: false, reason: "default" })
      break
  }
}
