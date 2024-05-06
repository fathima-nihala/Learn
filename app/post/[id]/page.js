import Post from '@/components/post';

export async function generateMetadata({ params }) {
    const id = params.id;

    const post = await fetch(process.env.NEXT_PUBLIC_API_URL + '/post/' + id)
        .then(res => res.json())
    
        console.log('Post:', post);
        console.log('title:',post.title);
    return { 
        title: "LearnCode", 
    }
}

export default function page({ params }) {
    return <Post params={params} />
}

