import connectMongo from "../../../../utils/connectMongo";
import postModal from '../../../../utils/Models/postModel';

export async function GET(req,{params}){
    try {
        await connectMongo();
        const postData = await postModal.find({_id:params.id});
         return Response.json(postData);
    } catch (error) {
        return Response.json({message:error})
    }
  
}