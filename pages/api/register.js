import db from '../../utils/db';
import Guest from '../../models/Guest';

const postHandler = async (req, res) => {
    if (req.method !== 'POST') {
        return;
    }
    const { name, tel, email, instaid, imageField} = req.body;
    await db.connect();
    const newGuest = new Guest({
        name, tel, email, instaid, imageField 
    });
    const guest = await newGuest.save();
    await db.disconnect();
    res.status(200).send({ message: "Registered successfully", guest})
}
export default postHandler;