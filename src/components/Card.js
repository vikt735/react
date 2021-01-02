export function Card({number, text}) {
  return (
    <div className="flexSB">
      <div className="mr-5 title_h2">
        <p className="Red">{number}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
};