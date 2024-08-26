export default function MyCard({imgUrl,cardHeader}){
    return(
        <div className="basis-1/4 bg-slate-400 border border-solid border-rose-100 w-8/10 mx-auto p-4">
            <img src={imgUrl} alt={cardHeader} />
            <h1>{cardHeader}</h1>
            <p>Lecturer of Information Technology Program, Faculty of Computer Science and Information Technology, Rambhai Barni Rajabhat University</p>
        </div>
    );
}
