import Card  from "../component/card"

interface BlogPost{
    id: number;
    imageUrl:string;
    title:string;
    location:string
}

export default async function page() {

   const data = await fetch("http://localhost:8000/blogs").then((res)=>res.json())

   if(!data){
    return <p>No data found</p>
   }

  return (
    <div className="container mx-auto px-4 mt-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {data.map((f:BlogPost)=>(<Card key={f.id} imageUrl={f.imageUrl} title={f.title} id={f.id} location="" href={`/blogs/${f.id}`} isLink={true}/>))}
         </div>
    </div>
  )
}
