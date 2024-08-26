export default function MyCard({imgUrl,cardHeader}){
    return(
        <div className="basis-1/4 bg-zinc-50 border border-solid border-rose-100 w-8/10 mx-auto p-4">
            <img src={imgUrl} alt={cardHeader} />
            <h1>{cardHeader}</h1>
        </div>
    );
}
