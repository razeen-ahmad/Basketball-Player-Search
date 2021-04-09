import dbConnect from '../../../util/dbConnect';
var TeamId = require('../../../../models/TeamId.js');

export default async function handler(req, res) {
  const { method } = req;
  const { team_id } = req.query;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        //get team data from db based on query
        const data = await TeamId.find({team_id});
        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false, "message": "something went wrong with the GET request" });
      }
      break;
    default:
      res.status(400).json({ success: false, "message": "not valid method" });
      break;
  }
}
