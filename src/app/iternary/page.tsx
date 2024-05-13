import Card from "../component/card"
interface iternary{
    id:number,
    imageUrl:string,
    name:string,
    location:string,
    href:string;
    isLink:boolean;
}

export default async function page() {
    const data = await fetch("http://localhost:8000/yogaschools").then((res)=>res.json())

    if(!data){
     return <p>No data found</p>
    }
  return (
    <div className="container mx-auto px-4 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {data.map((f:iternary)=>(<Card key={f.id} imageUrl={f.imageUrl} title={f.name} id={f.id} location={""} isLink={false} href="/"/>))}
    </div>
</div>
  )
}
