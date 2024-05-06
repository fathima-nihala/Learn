import connectMongo from "../../../utils/connectMongo";
import postModal from '../../../utils/Models/postModel'

// to get and also implement search query
export async function GET(req) {
    const query = req.nextUrl.searchParams.get('q');
    console.log(query, 'query');
    try {
        await connectMongo();

        let postData;
        if (query) {
             postData = await postModal.find({
                $or : [
                    {title:new RegExp(query,'i')},
                    {description:new RegExp(query,'i')}
                ]   
            });
        }
        else{
         postData = await postModal.find({});
        }

        return Response.json(postData);

    } catch (error) {
        return Response.json({ message: error })
    }


    // to get this code is enough
    // try {
    //     await connectMongo();
    //     const postData = await postModal.find({});
    //      return Response.json(postData);
    // } catch (error) {
    //     return Response.json({message:error})
    // }
}