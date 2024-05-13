import Image from "next/image";
type Props ={
    id:number,
    params:{slug: String},
    title:string,
    imageUrl:string,
    content:string
  }

  export async function generateStaticParams(){
    const data = await fetch("http://localhost:8000/blogs").then((res)=>res.json())

    if(!data){
        return []
    }

    return data.map((f:Props)=>({
        slug: f.id
    }));

}

export default async function page({ params }:Props) {
    const data = await fetch(`http://localhost:8000/blogs/${params.slug}`).then((res)=>res.json())
  return (
    <div className="container mx-auto py-8 max-w-4xl">
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <Image 
        src={data.imageUrl} 
        alt="Blog Post Image"
        className="w-full"
        width={500} // Adjusted width
        height={300}
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-700">{data.content}</p>
      </div>
    </div>
  </div>
  
  )
}
